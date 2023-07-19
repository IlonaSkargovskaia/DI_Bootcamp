const btnGet = document.querySelector('#getInfo');
const btnForm = document.querySelector('#getInfoForm');
const mess = document.querySelector('#mess');
const messPost = document.querySelector('#mess2');


async function getInfoFromBack() {
    try{
        const res = await fetch('http://localhost:3000/Sam');
        const data = await res.json();

        mess.textContent = `Hey, ${data.name}`
    } catch(e) {
        console.log(e);
    }
    
}

btnGet.addEventListener('click', getInfoFromBack);

async function postInfoForm(e) {
    e.preventDefault();

    const userNameValue = document.querySelector('#username').value;
    const userPasswordValue = document.querySelector('#password').value;

    const userData = {name: userNameValue, password: userPasswordValue};

    try {
        const res = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await res.json();
        console.log(data); // {name: 'ilona', psw: '123'}

        if(res.status === 200) {
            messPost.textContent = `Hello ${data.name} you're registered and your password: ${data.password}`;
        } else if(res.status === 400) {
            messPost.textContent = `Welcome back ${data.name}`
        }
        

    } catch (error) {
        console.log(error);
    }
}

btnForm.addEventListener('click', postInfoForm);