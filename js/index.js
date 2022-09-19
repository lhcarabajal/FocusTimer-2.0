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

let buttonMusic = document.querySelector(".card");
let icon = document.querySelector(".card svg path");

// função para alterar a cor bo buttom no click da música
function mudarCorButtons() {
  buttonMusic.style.backgroundColor = "#02799d";
  icon.style.fill = "white";
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

  mudarCorButtons();
});

soundChuva.addEventListener("click", function () {
  sound.soundChuva.play();
  sound.soundFloresta.pause();
  sound.soundLanchonete.pause();
  sound.soundLareira.pause();

  mudarCorButtons();
});

soundLanchonete.addEventListener("click", function () {
  sound.soundLanchonete.play();
  sound.soundChuva.pause();
  sound.soundFloresta.pause();
  sound.soundLareira.pause();

  mudarCorButtons();
});

soundLareira.addEventListener("click", function () {
  sound.soundLareira.play();
  sound.soundFloresta.pause();
  sound.soundLanchonete.pause();
  sound.soundChuva.pause();

  mudarCorButtons();
});
