

const button = document.querySelector(".btn");
const input = document.querySelector(".value");
const p_value = document.querySelector(".p_value");
const cur_dolar = document.querySelector(".cur_dolar");
const img_currency = document.querySelector(".img_currency");
const select = document.querySelector(".select_currency");



const dolar = 5.25;
const euro = 5.60;
const bitcoin = 120000;
const libra = 6.50;

function convert() {
    
   p_value.innerHTML = input.value;
   cur_dolar.innerHTML = input.value * dolar;
   img_currency.src = "./img/dolar.png";  
   
  /* p_value.innerHTML = input.value;
   cur_dolar.innerHTML = input.value * euro;
   img_currency.src = "./img/Euro.png"; */

   /* p_value.innerHTML = input.value;
   cur_dolar.innerHTML = input.value * bitcoin;
   img_currency.src = "./img/bitcoin 1.png"; */

   /* p_value.innerHTML = input.value;
   cur_dolar.innerHTML = input.value * libra;
   img_currency.src = "./img/libra 1.png"; */
}

button.addEventListener("click", convert);

