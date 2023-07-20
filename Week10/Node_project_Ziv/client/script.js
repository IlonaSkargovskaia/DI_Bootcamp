const registerBtn = document.getElementById('registerBtn');
const messRegister = document.querySelector('.messRegister');

registerBtn.addEventListener('click', getUserInfo);

async function getUserInfo(e) {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('usernameRegister').value;
    const password = document.getElementById('passwordRegister').value;

    const formData = {
        firstname,
        lastname,
        email,
        username,
        password
    }

    try {
        const res = await fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        const data = await res.json();
        console.log(data); 

        if (res.status === 200) {
            messRegister.textContent = `${firstname} ${lastname} you registered successfully!`
        } else if (res.status === 400) {
            messRegister.textContent = `User already exist!`
        }


    } catch (error) {
        console.log(error);
    }

}

const loginBtn = document.getElementById('loginBtn');
const messLogin = document.querySelector('.messLogin');


loginBtn.addEventListener('click', loginF);

async function loginF(event) {
    
    event.preventDefault();
    console.log('loginBtn');

    const userNameLogin = document.getElementById('username').value;
    const userNamePass = document.getElementById('password').value;

    const loginData = {userNameLogin, userNamePass};
    console.log(loginData);

    try {
        const res = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })

        const data = await res.json();
        console.log(data); 
    
    } catch (err) {
        console.log(err);
    }
}