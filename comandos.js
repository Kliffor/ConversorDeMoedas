

const button = document.querySelector(".btn");
const input = document.querySelector(".value");
const p_value = document.querySelector(".p_value");



function click() {
    p_value.innerHTML = input.value;

}

button.addEventListener("click", click);