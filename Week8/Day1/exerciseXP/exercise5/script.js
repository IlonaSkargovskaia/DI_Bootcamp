// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.

function events(){
    const btn = document.querySelector('button');
    const section = document.querySelector('#newBtn');

    btn.addEventListener('click', function() {
        document.body.style.background = 'red';
    })

    btn.addEventListener('mouseover', function() {
        btn.style.fontSize = '20px';
    })

    btn.addEventListener('mouseout', function() {
        btn.style.marginLeft = '20px';
    })

    btn.addEventListener('dblclick', function(){
        let newBtn = document.createElement('button');
        let text = document.createTextNode('New button');

        newBtn.appendChild(text);
        section.appendChild(newBtn);
    })
}

events();