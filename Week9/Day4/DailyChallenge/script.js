const form = document.querySelector('#myCurrency');
const amount = form.querySelector('#amount');
const baseCurrencySelect = form.querySelector('#baseCurrency');
const endCurrencySelect = form.querySelector('#endCurrency');
const btn = form.querySelector('#convert');
const result = document.querySelector('#result');

// btn.addEventListener('click', getResult);

async function getCurrency() {
    
    try{
        const response = await fetch('https://v6.exchangerate-api.com/v6/f57ea78c94b70acbda46b702/codes');
        
        if (response.ok) {
            const getData = await response.json();
            const getDataArr = getData['supported_codes'];
            const getDataObj = Object.fromEntries(getDataArr); // [[]] -> {}
                console.log(getDataObj);

            for (let i = 0; i < Object.keys(getDataObj).length; i++ ) {
                
                for (let key in getDataObj) {  
                    const option = document.createElement("option");  
                    option.text = getDataObj[key];
                    baseCurrencySelect.add(option);
                }

                for (let key in getDataObj) {  
                    const option = document.createElement("option");  
                    option.text = getDataObj[key];
                    endCurrencySelect.add(option);
                }
                
            }
            
        } else {
            throw new Error('Something wrong with fetch');
        }

    } catch(err) {
        console.log('Error in Get currency', err);
    }
}

getCurrency()