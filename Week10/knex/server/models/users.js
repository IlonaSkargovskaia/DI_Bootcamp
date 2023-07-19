import db from '../config/db.js';

export const createUser = async (user) => {
    const answer = await db('users').insert(user);
    return answer;
}

export const getUserByUserName = async (username) => {
    const answer = await db('users').where('username', username).first();
    return answer;
}