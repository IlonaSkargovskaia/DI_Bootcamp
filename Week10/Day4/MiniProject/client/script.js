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


    } catch (error) {
        console.log(error);
    }

}



const messLogin = document.querySelector('.messLogin');