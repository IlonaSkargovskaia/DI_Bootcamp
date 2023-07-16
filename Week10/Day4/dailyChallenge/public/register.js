const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  // Register form submission
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send register request
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, lastName, email, username, password })
    });

    const result = await response.text();
    const msg = document.querySelector('#registerMessage');

    if (result === 'register') {
      //alert('Registered successfully!');
      msg.textContent = 'Hello! Your account created successfully'
    } else if (result === 'error1') {
      //alert('Username or password already exists!');
      msg.textContent = 'Username or password already exists!'
    }
});