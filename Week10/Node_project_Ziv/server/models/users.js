import db from '../config/db.js';
import bcrypt from 'bcrypt';

export const register = async (
    fname,
    last_name, 
    email, 
    username, 
    hash
) => {
     //for commit-rollback if smth wrong и пишем в конце инсерт transaction(trx)
     const trx = await db.transaction();

    try {
    
        //stop commit instead of db we add trx('users)
        const user = await db('users')
        //{name_of_column, data what I send (fname)}
        .insert({
            first_name: fname,
            last_name: last_name, 
            email: email, 
            username: username, 
            //date from our server when user login last time
            last_login: new Date(),
        })
        .returning(['user_id', 'username', 'email', 'first_name', 'last_name'])
        //stop commit
        .transacting(trx);
        
        console.log('user: ', user);




        //second table hashpsw in DB
        const hashpsw = await db('hashpsw')
        .insert(
            {
            username: username,
            password: hash,
            }
        )
        //name of columns
        .returning(['login_id', 'username', 'password'])
        .transacting(trx);

        console.log('hashpsw: ', hashpsw);

        //if everything ok
        await trx.commit();
        //return promise and we resolve it on controllers
        return user;



        
    } catch (error) {
        console.log('error=>', error);
        //got to previous commit
        await trx.rollback();
        //for controllers who will know  about our error
        throw new Error(error.message);
    }
}