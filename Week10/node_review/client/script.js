const button = document.getElementById('get');

// GET

//fetch data from my server
// function getDataFromServer() {
//     //from my API on server in app.get ('/users')
//     fetch('http://localhost:3000/users')
//     //response from server and covert from json to array of obj
//     .then((res) => res.json())
//     //to start using data from server we need wait and do another then
//     //and now we get array of objects from API
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

//fetch with .then
// button.addEventListener('click', getDataFromServer);

async function getDataAsync() {
    try{
        //after the we create on server app.get with (/users/:userId )client send request to our API to server with http://localhost:3000/users/1
        //we waiting, then go to server and waiting data
        const res = await fetch(`http://localhost:3000/users/2`);
        //waiting data
        const data = await res.json(); 
        console.log(data); // object with key and value {userId: '1'}

        const myDiv = document.getElementById('message');

        if (res.status === 404) {
            myDiv.innerText = "User not found";
        } else if (res.status === 200) {
            myDiv.innerText = `Welcome ${data.name},you live in ${data.country}`;
        }

        // const myDiv = document.getElementById('message');
        // //userId come from server from res.json = req.params 
        // //after on the page we get    Request was with ID: 1
        // myDiv.textContent = `Request was with ID: ${data.userId}`; 
    } catch(err) {
        console.log(err);
    }
    
}


//fetch with async
button.addEventListener('click', getDataAsync);




//POST REQUESTS

const postButton = document.getElementById('post');
const username = document.getElementById('username');
const password = document.getElementById('password');

async function postData(e) {
    e.preventDefault();

    const usernameValue = username.value;
    const passwordValue = password.value;

    //console.log(`${usernameValue} and pass: ${passwordValue}`);

    const userData={username: usernameValue, password: passwordValue};

    //wait data from server with post request
    const res = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const data = await res.json();
    console.log(data);
}

postButton.addEventListener('click', postData);

