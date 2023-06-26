function makeJuice(size) {

    const ingredients = [];

    function addIngredients(first, second, third){
        //part1
        // document.body.textContent = `The client wants a ${size}ml juice, containing ${first}, ${second}, ${third}`;

        // part2
        ingredients.push(`${first}, ${second}, ${third}`);
        
    }


    function displayJuice() {
        document.body.textContent = `The client wants a ${size}ml juice, containing ${ingredients} `;
    }

    addIngredients('apple', 'banana', 'orange');
    addIngredients('grape', 'cucumber', 'strawberry');
    displayJuice();
}

makeJuice(250);