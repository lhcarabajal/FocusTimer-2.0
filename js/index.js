import Sound from "./sounds.js";
import { Timer } from "./timer.js";

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonMais = document.querySelector(".mais");
const buttonMenos = document.querySelector(".menos");
const buttonStop = document.querySelector(".stop");
const displayMinutes = document.querySelector(".minutes");
const displaySeconds = document.querySelector(".seconds");
const soundFloresta = document.querySelector(".floresta");
const soundChuva = document.querySelector(".chuva");
const soundLanchonete = document.querySelector(".lanchonete");
const soundLareira = document.querySelector(".lareira");
let minutes = Number(displayMinutes.textContent);
let seconds = Number(displaySeconds.textContent);
let timeTimeOut;

let iconChuva = document.querySelector(".chuva svg path");
let iconFloresta = document.querySelector(".floresta svg path");
let iconLareira = document.querySelector(".lareira svg path");
let iconLanchonete = document.querySelector(".lanchonete svg path");

// funções para alterar a cor dos botões e icone com o click
function buttonColorFloresta() {
  soundFloresta.style.backgroundColor = "#02799d";
  soundChuva.style.backgroundColor = "#E1E1E6";
  soundLanchonete.style.backgroundColor = "#E1E1E6";
  soundLareira.style.backgroundColor = "#E1E1E6";

  iconFloresta.style.fill = "white";
  iconChuva.style.fill = "#323238";
  iconLanchonete.style.fill = "#323238";
  iconLareira.style.fill = "#323238";
}

function buttonColorChuva() {
  soundChuva.style.backgroundColor = "#02799d";
  soundFloresta.style.backgroundColor = "#E1E1E6";
  soundLanchonete.style.backgroundColor = "#E1E1E6";
  soundLareira.style.backgroundColor = "#E1E1E6";

  iconChuva.style.fill = "white";
  iconFloresta.style.fill = "#323238";
  iconLanchonete.style.fill = "#323238";
  iconLareira.style.fill = "#323238";
}

function buttonColorLanchonete() {
  soundLanchonete.style.backgroundColor = "#02799d";
  soundFloresta.style.backgroundColor = "#E1E1E6";
  soundChuva.style.backgroundColor = "#E1E1E6";
  soundLareira.style.backgroundColor = "#E1E1E6";

  iconLanchonete.style.fill = "white";
  iconChuva.style.fill = "#323238";
  iconFloresta.style.fill = "#323238";
  iconLareira.style.fill = "#323238";
}

function buttonColorLareira() {
  soundLareira.style.backgroundColor = "#02799d";
  soundFloresta.style.backgroundColor = "#E1E1E6";
  soundChuva.style.backgroundColor = "#E1E1E6";
  soundLanchonete.style.backgroundColor = "#E1E1E6";

  iconLareira.style.fill = "white";
  iconChuva.style.fill = "#323238";
  iconLanchonete.style.fill = "#323238";
  iconFloresta.style.fill = "#323238";
}

// Função para resetar o botão play quando o cronometro zerar e resetar o display
export function resetControlDisplay() {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  timer.updateDisplay(minutes, seconds);
}

const timer = Timer({
  displayMinutes,
  displaySeconds,
  timeTimeOut,
});

const sound = Sound();

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");

  timer.temporizador();
});

buttonPause.addEventListener("click", function () {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  timer.hold();
});

buttonStop.addEventListener("click", function () {
  resetControlDisplay();
  timer.hold();
});

/*Adicionando 5 minutos no cronometro conforme o click do botão de +*/
buttonMais.addEventListener("click", function () {
  minutes = minutes + 5;
  if (minutes > 60) {
    minutes = Number(displayMinutes.textContent);
    return;
  }
  timer.updateDisplay(minutes, 0);
});

/*decrementando 5 minutos no cronometro conforme o click do botão de -*/
buttonMenos.addEventListener("click", function () {
  minutes = minutes - 5;
  if (minutes < 0) {
    minutes = Number(displayMinutes.textContent);
    return;
  }
  timer.updateDisplay(minutes, 0);
});

soundFloresta.addEventListener("click", function () {
  sound.soundFloresta.play();
  sound.soundChuva.pause();
  sound.soundLanchonete.pause();
  sound.soundLareira.pause();

  buttonColorFloresta();
});

soundChuva.addEventListener("click", function () {
  sound.soundChuva.play();
  sound.soundFloresta.pause();
  sound.soundLanchonete.pause();
  sound.soundLareira.pause();

  buttonColorChuva();
});

soundLanchonete.addEventListener("click", function () {
  sound.soundLanchonete.play();
  sound.soundChuva.pause();
  sound.soundFloresta.pause();
  sound.soundLareira.pause();

  buttonColorLanchonete();
});

soundLareira.addEventListener("click", function () {
  sound.soundLareira.play();
  sound.soundFloresta.pause();
  sound.soundLanchonete.pause();
  sound.soundChuva.pause();

  buttonColorLareira();
});
