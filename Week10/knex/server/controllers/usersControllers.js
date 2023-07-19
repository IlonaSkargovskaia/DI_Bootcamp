import { createUser, getUserByUserName } from "../models/users.js";

export const registerNewUser = async (req, res) => {
    const {username, password} = req.body;
    console.log(req.body); //{ username: 'test', password: '123' }

    try {
        //.where('name_column', const our username)
        const existsInDb = await getUserByUserName(username);
        console.log(existsInDb); // object from DB{ id: 1, username: 'test', password: 'test' }

        
        if(!existsInDb) {
            try {
                //returning what we inserted now
                const newUser = await createUser(req.body);
                //if not in DB
                res.status(200).json({message: 'Registered successfully'})
            } catch (error) {
                console.log(error);
                //for client
                res.status(500).json({error: 'Internal server error'});
            }
           
        } else {
            res.status(400).json({error: 'Username exists'})
        }
    } catch (error) {
        console.log(error);
        //for client
        res.status(500).json({error: 'Internal server error'});
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {           
        const existsInDb = await getUserByUserName(username); // object from DB
        
        //if username - exist
        if (existsInDb) {
            //if password also exist
            if(existsInDb.password === req.body.password) {
                res.status(200).json({message: `Login successfully, Welcome ${username}`})
            //if password not in database
            } else {
                res.status(400).json({error: `Password incorrect, try again`})
            }
        } else {
            res.status(400).json({error: `Username doesn't exist`})
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({error: `Internal server error`})
    }
}