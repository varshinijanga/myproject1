let r1 = document.getElementById('r1');
let r2 = document.getElementById('r2');
let r3 = document.getElementById('r3');
let r4 = document.getElementById('r4');
let price = document.getElementById('price');
let price1 = document.getElementById('price1');
let price2= document.getElementById('price2');
let price3= document.getElementById('price3');
let sign = document.getElementById('currency');
let sign1 = document.getElementById('currency1');
let sign2 = document.getElementById('currency2');
let sign3 = document.getElementById('currency3');
let priceVal = price.textContent;
let priceVal1= price1.textContent;
let priceVal2= price2.textContent;
let priceVal3 = price3.textContent;

r1.addEventListener('change', (e) => {
    let currency = e.target.value
    console.log(priceVal)
    if(currency == 'Rupees') {
        price.textContent = priceVal*10;
        sign.textContent = "₹";
    } else if(currency === 'Euro') {
        price.textContent = priceVal*9;
        sign.textContent = "€";
    } else {
        price.textContent = priceVal;
        sign.textContent = "$";
    }
})

r2.addEventListener('change', (e) => {
    let currency1 = e.target.value
    console.log(priceVal1)
    if(currency1 == 'Rupees') {
        price1.textContent = priceVal1*10;
        sign1.textContent = "₹";
    } else if(currency1 === 'Euro') {
        price1.textContent = priceVal1*9;
        sign1.textContent = "€";
    } else {
        price1.textContent = priceVal1;
        sign1.textContent = "$";
    }
})

r3.addEventListener('change', (e) => {
    let currency2 = e.target.value
    console.log(priceVal2)
    if(currency2 == 'Rupees') {
        price2.textContent = priceVal2*10;
        sign2.textContent = "₹";
    } else if(currency2 === 'Euro') {
        price2.textContent = priceVal2*9;
        sign2.textContent = "€";
    } else {
        price2.textContent = priceVal2;
        sign2.textContent = "$";
    }
})

r4.addEventListener('change', (e) => {
    let currency3 = e.target.value
    console.log(priceVal3)
    if(currency3 == 'Rupees') {
        price3.textContent = priceVal3*10;
        sign3.textContent = "₹";
    } else if(currency3 === 'Euro') {
        price3.textContent = priceVal3*9;
        sign3.textContent = "€";
    } else {
        price3.textContent = priceVal3;
        sign3.textContent = "$";
    }
  })