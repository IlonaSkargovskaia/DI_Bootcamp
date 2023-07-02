const getForm = document.querySelector('form');
const btn = getForm.querySelector('#formSubmit');
const info = getForm.querySelectorAll('input');
console.log(info);

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const newObj = {};
    info.forEach(item => {
        newObj[item.name] = item.value;
    })
    document.body.textContent = JSON.stringify(newObj);
});

