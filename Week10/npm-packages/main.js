const axios = require('axios');
const bcrypt = require('bcrypt');

//crypt password
const hashPassword = async (pass) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = bcrypt.hashSync(pass, salt);
        console.log(hash);
    } catch (error) {
        console.log(error);
    }
}

hashPassword('absdfwe');


//fetching data
const user = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

// user();