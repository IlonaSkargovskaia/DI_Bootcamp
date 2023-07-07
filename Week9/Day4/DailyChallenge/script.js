const form = document.querySelector('#myCurrency');
const amountInput = form.querySelector('#amount');
const baseCurrencySelect = form.querySelector('#baseCurrency');
const endCurrencySelect = form.querySelector('#endCurrency');
const btn = form.querySelector('#convert');
const result = document.querySelector('#result');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    convert();
});

async function getCurrency() {
    try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/f57ea78c94b70acbda46b702/codes');

        if (response.ok) {
            const data = await response.json();
            const currencies = data['supported_codes'];
            //console.log(currencies)
            

            for (let current of currencies) {
                const option = document.createElement('option');
                option.value = current;
                option.textContent = current[1]; //add to select only second part
                baseCurrencySelect.appendChild(option);
                endCurrencySelect.appendChild(option.cloneNode(true));
            }

            // Set default options
            baseCurrencySelect.value = currencies[146];
            endCurrencySelect.value = currencies[61];

            //convert();

        } else {
            throw new Error('Something went wrong with the fetch');
        }
    } catch (err) {
        console.log('Error in Get currency', err);
    }
}


async function convert() {
    const fromCurr = (baseCurrencySelect.value).split(',')[0];
    const toCurr = (endCurrencySelect.value).split(',')[0];
    const amount = amountInput.value;

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/f57ea78c94b70acbda46b702/pair/${fromCurr}/${toCurr}/${amount}`);
        
        if (response.ok) {
            const data = await response.json();
            const res = data['conversion_result']; 
            result.textContent = res; 
        } else {
            throw new Error('Something went wrong with the fetch');
        }
    } catch (err) {
        console.log('Error in Convert currency', err);
    }
}



getCurrency();


