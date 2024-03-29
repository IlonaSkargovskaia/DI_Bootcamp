const registerBtn = document.getElementById('registerBtn');
const messRegister = document.querySelector('.messRegister');
const registerForm = document.getElementById('registerForm');

const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const messLogin = document.querySelector('.messLogin');


// Function to check form validity and enable or disable the button
function toggleButton(form, button) {
    if (form.reportValidity()) {
        button.disabled = false; // Enable the button if the form is valid
    } else {
        button.disabled = true; // Disable the button if the form is invalid
    }
}

// Add event listeners to the forms to toggle the buttons
registerForm.addEventListener('input', () => toggleButton(registerForm, registerBtn));
loginForm.addEventListener('input', () => toggleButton(loginForm, loginBtn));

// Initially, disable both buttons
registerBtn.disabled = true;
loginBtn.disabled = true;

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



loginBtn.addEventListener('click', loginF);

async function loginF(event) {
    
    event.preventDefault();

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
        console.log(data); //

        if (res.status === 404) {
            messLogin.textContent = data.err;
        } else if (res.status === 200) {
            messLogin.textContent = data;
        }

    
    } catch (err) {
        console.log(err);
    }
}

