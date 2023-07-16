import {db} from ('../config/db.js');

//all register profiles
export const getAllUsers = () => {
    return db('register')
    .select('user_id', 'first_name', 'last_name', 'email', 'password', 'created_date', 'last_login_date')
    .orderBy('user_id')
}