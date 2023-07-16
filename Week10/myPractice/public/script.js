document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);//no data inside
    //to get all data from formData
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    //to transfer data to server I need to make an HTTP request 
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //to transfer data to the servers body i need before modify it to json
        body: JSON.stringify(data)
    })
    .then(response => response.json()) // Parse the response body data as JSON
    .then(result => {
        console.log(result); //{username: 'ilona', lname: 'Doe ', tname: 'wefwa', useremail: 'ilona.skars@gmail.com'}
    })
    .catch(err => {
        console.log('Error', err);
    })
})