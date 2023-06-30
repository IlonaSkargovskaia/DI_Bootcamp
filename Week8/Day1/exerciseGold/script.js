// // Display the value of the selected option.
// // Add an additional option to the select tag:
// // <option value="classic">Classic</option>
// // The newly added option should be selected by default.

// const select = document.querySelector('#genres');

// const option = document.createElement('option');
// option.text = 'Classic';
// option.value = 'classic';
// option.selected = true;
// select.add(option);

// for (let i = 0; i < select.length; i++) {
//     console.log(select[i].value);
// }


// // Add a click event listener to the <input type="button">. When clicked on, it should call a function named : removecolor() that removes the selected color from the dropdown list.

// const colorsSelect = document.querySelector('#colorSelect');
// const btn = document.querySelector('input');

// btn.addEventListener('click', removecolor);


// function removecolor() {
//     colorsSelect.remove(colorsSelect.selectedIndex);
// }



// In your js file:
// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

let shoppingList = [];

const root = document.querySelector('#root');

const form = document.createElement('form');
const inputAdd = document.createElement('input');
const btnSubmit = document.createElement('button');
const btnText = document.createTextNode('AddItem');

const btnClear = document.createElement('button');
const btnClearText = document.createTextNode('Clear all');

btnSubmit.appendChild(btnText);
btnClear.appendChild(btnClearText);

form.appendChild(inputAdd);
form.appendChild(btnSubmit);
form.appendChild(btnClear);
root.appendChild(form);


btnSubmit.addEventListener('click', addItem);
btnClear.addEventListener('click', clearAll);

function addItem(event) {
    event.preventDefault();
    shoppingList.push(inputAdd.value);
    console.log(shoppingList);
    inputAdd.value = "";
}

console.log(shoppingList);


function clearAll(event) {
    event.preventDefault();
    shoppingList.length = 0;
    console.log(shoppingList);
}


