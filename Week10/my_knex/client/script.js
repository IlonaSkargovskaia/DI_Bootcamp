const registerBtn = document.querySelector('#registerBtn');
const message = document.querySelector('#message');

registerBtn.addEventListener('click', getRegisterData)

async function getRegisterData(e) {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

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
            message.textContent = 'User added to DataBase successfully'
        } else if(res.status === 400){
            message.textContent = 'User already exist'
        }

    } catch (error) {
        console.log(error);
    }
}

const loginBtn = document.querySelector('#loginBtn');
const messageLogin = document.querySelector('#messageLogin');

loginBtn.addEventListener('click', login);

async function login(e) {
    e.preventDefault();

    try {
        const username = document.getElementById('usernameLogin').value;
        const password = document.getElementById('passwordLogin').value;

        const loginData = {username, password};
        //console.log(loginData);

        const res = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        const data = await res.json();
        console.log(data); //hey

        if (res.status === 200) {
            messageLogin.textContent = `Welcome back, ${data.firstname}`
        } else {
            messageLogin.textContent = `Sorry, username or password wrong, try again`
        }
        
    } catch (error) {
        console.log(error);
    }
    

}