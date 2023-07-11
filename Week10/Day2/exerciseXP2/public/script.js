fetch('/users')
.then(res => res.json())
.then(data => {
    //console.log(data)
    html(data)
})
.catch(err => console.log(err));

const html = (data) => {
    console.log(data);
    document.querySelector(".root").innerHTML = JSON.stringify(data);
};