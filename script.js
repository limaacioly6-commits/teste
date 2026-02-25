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
    //o preventDefault() evita o recarregar da página quando o formulário é disparado/enviado
    event.preventDefault();

    const ValorImput = inputName.value;

    console.log(ValorImput);

    console.log("Enviando formulário");
});