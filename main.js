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

contadores[0].textContent = calculaTempo(tempoObjetivo1); //Antes
contadores[0].textContent = calculaTempo(tempos[0]); // Depois
contadores[1].textContent = calculaTempo(tempoObjetivo2);
contadores[2].textContent = calculaTempo(tempoObjetivo3);
contadores[3].textContent = calculaTempo(tempoObjetivo4);

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];
let tempoAtual = new Date();

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  if (tempoFinal > 0) {
    return [dias, horas, minutos, segundos];
  } else {
    return [0, 0, 0, 0];
  }
}

// Para cada objetivo na lista de contadores
for (let i = 0; i < contadores.length; i++) {
  //Calcular o tempo usando a função e associá-lo ao objetivo
  contadores[i].textContent = calculaTempo(tempos[i]);
}

function atualizaCronometro(){
    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];

    for (let i=0; i<contadores.length;i++){
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
        console.log("seg"+i);
    }
}

function comecaCronometro() {
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);
}

comecaCronometro();

const diasAniversario = new Date();

function calculaDias(diasAniversario) {
    const hoje = new Date();  
    const tempoRestante = diasAniversario - hoje; 
    const diasRestantes = Math.floor(tempoRestante / (1000 * 60 * 60 * 24)); 
    
    return diasRestantes;
}
//comecaCronometro();

const pintura = ["Solitude", "2018", "aquarela"];
document.getElementById("titulo").textContent = pintura[2];

const livro = ["O Pequeno Príncipe", "1943"];