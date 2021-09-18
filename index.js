const Quantity = document.querySelector('.Quantity');
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');

const price = document.querySelector('.price');
const clr = document.querySelector('.clr');
let number = 0;
price.innerHTML = 0;

//Left Button
leftBtn.addEventListener('click', () => {
    number--;
    Quantity.value = number;
    const value = number * 4;
    price.textContent = value; 

    //Clear Button
    clr.addEventListener('click', () =>{
        price.textContent = 0;
        Quantity.value = '0';
        number = 0;
    })
})

//Right Button
rightBtn.addEventListener('click', () => {
    number++;
    Quantity.value = number;
    const value = number * 4;
    price.textContent = value; 

    //Clear Button
    clr.addEventListener('click', () =>{
        price.textContent = 0;
        Quantity.value = '0';
        number = 0;
    })
})
