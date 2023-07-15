document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const registerButton = document.getElementById('registerButton');
    const loginButton = document.getElementById('loginButton');

    registerForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(registerForm);
        const data = Object.fromEntries(formData.entries());

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(message => {
            if (message === 'register') {
                alert('Registration successful');
                registerForm.reset();
            } else if (message === 'error1') {
                alert('Username or password already exists');
            }
        })
        .catch(error => console.error(error));
    });

    loginForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const data = Object.fromEntries(formData.entries());

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(message => {
            if (message === 'login') {
                alert('Login successful');
                loginForm.reset();
            } else if (message === 'error2') {
                alert('User not found');
            }
        })
        .catch(error => console.error(error));
    });

    // Disable register button if any required fields are empty
    registerForm.addEventListener('input', () => {
        const inputs = registerForm.querySelectorAll('input[required]');
        const emptyInputs = Array.from(inputs).filter(input => !input.value);
        registerButton.disabled = emptyInputs.length > 0;
    });

    // Disable login button if any required fields are empty
    loginForm.addEventListener('input', () => {
        const inputs = loginForm.querySelectorAll('input[required]');
        const emptyInputs = Array.from(inputs).filter(input => !input.value);
        loginButton.disabled = emptyInputs.length > 0;
    });
});
