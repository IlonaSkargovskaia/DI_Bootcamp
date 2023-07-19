const myForm = document.querySelector('form');
const btn = document.querySelector('#registerBtn');

myForm.addEventListener('submit', getFormData)

async function getFormData(e) {
    e.preventDefault();

    const name = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const formData = {name, lastname, email, username, password};

    try {
        const res = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        console.log(data); //{name: 'Ilona', lastName: 'Skargovskaya', email: 'ilona.skars@gmail.com', username: 'jordan', password: '123'}

        const msg = document.querySelector('#message');

        if (res.status === 200) {
            msg.textContent = `Hello, ${data.name} Your account is now created`
        } else if (res.status === 400){
            msg.textContent = `Welcome, ${data.name}`
        }
        

    } catch (error) {
        console.log(error);
    }
        

}

