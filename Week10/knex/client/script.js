const registerButton = document.getElementById('register');
const userinput = document.getElementById('userinput');
const passwordinput = document.getElementById('passwordinput');
const message = document.getElementById('message');

registerButton.addEventListener('click', register);

async function register(e) {
    e.preventDefault();

    try {
        const data = {
            username: userinput.value,
            password: passwordinput.value
        };

        const res = await fetch('http://localhost:3001/register', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })

        //console.log(res); //just response object
        const parseData = await res.json();

        if (res.status === 200) {
            message.textContent = parseData.message;
        } else {
            message.textContent = parseData.error;
        }
        console.log(parseData); //json({message: 'Success'}) what I sent in server .json(...)

    } catch (error) {
        console.log(error)
    }
}

const loginButton = document.getElementById("login");
const usernameLogin = document.getElementById("userlogin");
const passwordLogin = document.getElementById("passwordlogin");
const loginMessage = document.getElementById("loginMessage");
async function login(e) {
    e.preventDefault();
    const loginInfo = { username: usernameLogin.value, password: passwordLogin.value }
    console.log(loginInfo)
    try {
        const data = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(loginInfo),
        })
        console.log(data);
        const parsedData = await data.json()
        console.log(parsedData)
    } catch(err) {
        console.log(err);
    };
};
loginButton.addEventListener("click", login);