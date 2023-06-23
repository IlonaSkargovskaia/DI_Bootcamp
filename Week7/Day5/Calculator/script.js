function number(num){

    let input = document.querySelector('input');
    input.value += num;

}


function operator(oper){

    let input = document.querySelector('input');
    input.value += oper;
}


function equal(){

    let input = document.querySelector('input');

    // Evaluate the expression entered in the input field
    let expression = input.value;
    let result = eval(expression);

    // Update the input value with the result
    input.value = result;
    
}

function clearInput(){

    let input = document.querySelector('input');
    input.value = '';

}
