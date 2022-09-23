import { resetControlDisplay } from "./index.js";
export function Timer({ displayMinutes, displaySeconds }) {
  let timeTimeOut;

  function hold() {
    clearTimeout(timeTimeOut);
  }
  // Função que atualiza o display
  function updateDisplay(minutes, seconds) {
    // Usando a função padStart para adicionar um 0 na frente quando o numero for unidade
    displayMinutes.textContent = String(minutes).padStart(2, "0");
    displaySeconds.textContent = String(seconds).padStart(2, "0");
    hold();
  }

  // Função para rodar o cronometro
  function temporizador() {
    timeTimeOut = setTimeout(function () {
      let minutes = Number(displayMinutes.textContent);
      let seconds = Number(displaySeconds.textContent);

      if (minutes <= 0 && seconds <= 0) {
        resetControlDisplay();
        return;
      }

      if (seconds <= 0) {
        seconds = 2;

        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      temporizador();
    }, 1000);
  }

  return {
    temporizador,
    updateDisplay,
    hold,
  };
}
