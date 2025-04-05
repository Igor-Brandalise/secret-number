let input = document.querySelector("#guess-input") as HTMLInputElement;
let resposta = document.querySelector("#feedback") as HTMLParagraphElement;
let random = Math.floor(Math.random() * 50) + 1;

input.addEventListener("input", () => {
  let opcao = Number(input.value);

  if (opcao < 1) input.value = "1";
  if (opcao > 50) input.value = "50";
});

function tentar() {
  const valor = input.value;

  if (valor === "") {
    resposta.textContent = "Insira um valor válido";
    return;
  }

  const num = Number(input.value);

  if (num === random) {
    resposta.textContent = "Acertou";
  } else if (num > random) {
    resposta.textContent = "O número secreto é menor";
  } else if (num < random) {
    resposta.textContent = "O número secreto é maior";
  }
}

function reset() {
  input.value = "";
  resposta.textContent = "";
  random = Math.floor(Math.random() * 50) + 1;
}
