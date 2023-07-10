fetch('/api/products')
.then(res => res.json())
.then(data => {
    console.log(data);
    render(data);
})
.catch(err => {
    console.log(err)
})

const render = arr => {
    const html = arr.map(item => {
        return `<div>
            <h2>${item.name}</h2>
            <h4>${item.price}</h4>
        </div>`
    })
    console.log(html);

    document.getElementById("root").innerHTML = html.join("");
};