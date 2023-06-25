// Exercice 4 : Volume Of A Sphere

function volumeSphere(){
    const form = document.forms['MyForm'];
    const input = form.elements.radius;
    let volume = form.elements.volume;
    const button = form.elements.submit;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        volume.value = (4/3 * 3.14 * (input.value) ** 3).toFixed(2); 
    })
}

volumeSphere()