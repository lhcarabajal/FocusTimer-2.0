import Sound from "./sounds.js";
import { Timer } from "./timer.js";
import { Controls } from "./controls.js";
import { buttonsMusic } from "./buttonsMusic.js";
import {
  buttonPlay,
  buttonPause,
  buttonMais,
  buttonMenos,
  buttonStop,
  displayMinutes,
  displaySeconds,
  soundFloresta,
  soundChuva,
  soundLanchonete,
  soundLareira,
} from "./elements.js";

let minutes = Number(displayMinutes.textContent);

// Função para resetar o botão play quando o cronometro zerar e resetar o display
export function resetControlDisplay() {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  timer.updateDisplay(minutes, 0);
}

const buttonsMusicColor = buttonsMusic({
  soundFloresta,
  soundChuva,
  soundLareira,
  soundLanchonete,
});

const controls = Controls({
  buttonPause,
  buttonPlay,
});

const timer = Timer({
  displayMinutes,
  displaySeconds,
});

const sound = Sound();

buttonPlay.addEventListener("click", function () {
  controls.play();
  timer.temporizador();
});

buttonPause.addEventListener("click", function () {
  controls.pause();
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

  buttonsMusicColor.buttonColorFloresta();
});

soundChuva.addEventListener("click", function () {
  sound.soundChuva.play();
  sound.soundFloresta.pause();
  sound.soundLanchonete.pause();
  sound.soundLareira.pause();

  buttonsMusicColor.buttonColorChuva();
});

soundLanchonete.addEventListener("click", function () {
  sound.soundLanchonete.play();
  sound.soundChuva.pause();
  sound.soundFloresta.pause();
  sound.soundLareira.pause();

  buttonsMusicColor.buttonColorLanchonete();
});

soundLareira.addEventListener("click", function () {
  sound.soundLareira.play();
  sound.soundFloresta.pause();
  sound.soundLanchonete.pause();
  sound.soundChuva.pause();

  buttonsMusicColor.buttonColorLareira();
});
