const formRegister = document.querySelector("#registerForm");
formRegister.addEventListener("submit", registerUser);

async function registerUser (event) {
    event.preventDefault()
    const data = new FormData(formRegister);
    console.log(data);
    const objData = Object.fromEntries(data);
    console.log(JSON.stringify(objData));

    const responsePost = await fetch("/register", {
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(objData),
    })

    if(responsePost.ok) {
        const result = await responsePost.json();
        const div = document.getElementById("registerMessage");
        div.textContent = result;
    }
}