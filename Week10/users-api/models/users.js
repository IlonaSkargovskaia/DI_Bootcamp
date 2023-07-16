// import {db} from '../config/db.js'

// //create model for register - queries to DB
// // {} - destructure from req.body fields like we create in DB
// export const register = ({
//     first_name, 
//     last_name, 
//     email, 
//     username, 
//     created_date, 
//     last_login,
//     hash
// }) => {
//     // commit - rollback
//     //trx - transaction for commit or rollback if smth wrong
//     db.transaction((trx) => {
//         trx('users').insert({
//             //name of column : data
//             //if in parameters fname then in trx first_name : fname
//             //if we have the same names - we name it
//             first_name, 
//             last_name, 
//             email, 
//             username, 
//             created_date, 
//             last_login
//         })
//         //save to users table
//         .returning(['user_id', 'username', 'email', 'first_name', 'last_name'])
//         //row = [ {
//         //     'user_id': 1,
//         //     'username': wdawdf, 
//         //     'email':xfre, 
//         //     'first_name':serges, 
//         //     'last_name':serfghesb
//         // }]
//         .then(row => {
//             //save to login table 
//             return trx('login')
//             .insert({
//                 //when we resolve we get array with 1 object
//                 username: row[0].username || username,
//                 password: hash
//             })
//             .then(row => {
//                 trx.commit;
//             })
//             .catch(err => {
//                 trx.rollback;
//             })
//         })
//         .then(row => {
//             trx.commit;
//         })
//         .catch(err => {
//             trx.rollback;
//         })
//     })
        
// }

import { db } from '../config/db.js';

export const register = async ({
    first_name,
    last_name,
    email,
    username,
    created_date,
    last_login,
    hash,
}) => {
    try {
        await db.transaction(async (trx) => {
        const insertedUser = await trx('users')
            .insert({
            first_name,
            last_name,
            email,
            username,
            created_date,
            last_login,
            })
            .returning(['user_id', 'username', 'email', 'first_name', 'last_name']);

        await trx('login').insert({
            username: insertedUser[0].username || username,
            password: hash,
        });

        trx.commit;
        });
    } catch (error) {
        trx.rollback;
    }
};
