<script src="main.js"></script>b

const botoes = document.querySelectorAll(".botao");
console.log(botoes);

for (let i = 0; i < botoes.length; i++) {
  console.log(i);
}

botoes[i].onclick = function () {
  botoes[i].classList.add("ativo");
};

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    botoes[i].classList.add("ativo");
  };
}

for ([inicialização]; [condição]; [incremento]) {
  declaração;
}

for (var i = 1; i <= 5; i++) {
  console.log(i);
}

for (var i = 0; i <= 10; i += 2) {
  console.log(i);
}

var frutas = ["Maçã", "Banana", "Laranja", "Pera"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

let contador = 5;
contador += 3;

let contador = 10;
contador -= 4;

var numero = 3;
numero *= 2;

var numero = 10;
numero /= 2;

for ([inicialização]; [condição]; [incremento]) {
   declaração
   }

   for (var i = 1; i <= 5; i++) {
  console.log(i);
}

for (var i = 0; i <= 10; i += 2) {
  console.log(i);
}

var frutas = ["Maçã", "Banana", "Laranja", "Pera"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

let contador = 5;
contador += 3;

let contador = 10;
contador -= 4;

var numero = 3;
numero *= 2;

var numero = 10;
numero /= 2; 

const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
contadores[0].textContent = "Contagem regressiva";
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");

contadores[0].textContent = tempoObjetivo1;


for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);
  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
    segundos %= 60;
minutos %= 60;
horas %= 24;
  );
}

