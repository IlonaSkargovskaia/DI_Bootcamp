import { register } from '../models/users.js';
import bcrypt from 'bcrypt';

export const _register = async (req, res) => {
    //column name first_name and fname, lname comes from frontend form
    const first_name = req.body.fname;
    const last_name = req.body.lname;
    const username = req.body.username;
    //пользователь может регистрироваться только с одним email поэтому нужно привести к lowercase
    const email = req.body.email.toLowerCase();
    //bcrypt needs string and password can return number - we need to convert it to string
    const password = req.body.password.toString();

    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    try {
        //
        const rows = await register(first_name, last_name, email, username, hash);
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message})
    }

}