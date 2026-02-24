const form = document.getElementById("form-name");
const inputName = document.getElementById
("input-name");
const containerUl = document.getElementById
("container-ul");

console.log(form);
console.log(inputName);
console.log(containerUl);

//submit - Evento disparado quando um formulário é enviado.

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Enviando formulário");
});