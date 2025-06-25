const button = document.querySelector(".btn");
const input = document.querySelector(".value");
const p_value = document.querySelector(".p_value");
const cur_dolar = document.querySelector(".cur_dolar");
const img_currency = document.querySelector(".img_currency");
const select_currency = document.querySelector(".cur_select");
const p_dolar = document.querySelector(".p_dolar");

const dolar = 5.25;
const euro = 5.6;
const bitcoin = 120000;
const libra = 6.5;

select_currency.addEventListener("change", function () {
  if (select_currency.value === "opcao1") {
    p_dolar.innerHTML = "Dólar";
    img_currency.src = "./img/dolar.png";
  }
  if (select_currency.value === "opcao2") {
    p_dolar.innerHTML = "Euro";
    img_currency.src = "./img/Euro.png";
  }
  if (select_currency.value === "opcao3") {
    p_dolar.innerHTML = "Bitcoin";
    img_currency.src = "./img/bitcoin 1.png";
  }
  if (select_currency.value === "opcao4") {
    p_dolar.innerHTML = "Libra";
    img_currency.src = "./img/libra 1.png";
  }
});

function convert() {
  if (select_currency.value === "opcao0") {
    alert("Selecione uma moeda para conversão.");
  }

  if (select_currency.value === "opcao1") {
    p_value.innerHTML = input.value;
    cur_dolar.innerHTML = input.value * dolar;
  }
  if (select_currency.value === "opcao2") {
    p_value.innerHTML = input.value;
    cur_dolar.innerHTML = input.value * euro;
  }

  if (select_currency.value === "opcao3") {
    p_value.innerHTML = input.value;
    cur_dolar.innerHTML = input.value * bitcoin;
  }

  if (select_currency.value === "opcao4") {
    p_value.innerHTML = input.value;
    cur_dolar.innerHTML = input.value * libra;
  }
}
button.addEventListener("click", convert);
