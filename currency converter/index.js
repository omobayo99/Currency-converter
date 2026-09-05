const currencyFirstE1 = document.getElementById("currency-first");

const worthFirstE1 = document.getElementById("worth-first");

const currencySecondE1 = document.getElementById("currency-second");

const worththSecondE1 = document.getElementById("worth-second");

const  exchangeRateE1 = document.getElementById("exchange-rate");

updateRate()

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/7717a43417e1c5b959c7ca1c/latest/${currencyFirstE1.value}`
    )
    .then((res)=> res.json())
    .then((data)=>{
        const rate = data.conversion_rates[currencySecondE1.value];
        console.log (rate);
        exchangeRateE1.innerText = `1 ${currencyFirstE1.value} = ${rate} ${currencySecondE1.value}`;

        worththSecondE1.value = (worthFirstE1.value * rate).toFixed(2);

});

}


currencyFirstE1.addEventListener("change", updateRate);

currencySecondE1.addEventListener("change", updateRate);

worthFirstE1.addEventListener("input", updateRate);