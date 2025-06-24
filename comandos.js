

const button = document.querySelector(".btn");
const input = document.querySelector(".value");
const p_value = document.querySelector(".p_value");
const cur_dolar = document.querySelector(".cur_dolar");

const dolar = 5.25;

function convert() {
    
   p_value.innerHTML = input.value;
   cur_dolar.innerHTML = input.value * dolar;
   new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dolar);

    
}

button.addEventListener("click", convert);