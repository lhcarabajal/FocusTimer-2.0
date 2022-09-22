export function Controls({ buttonPause, buttonPlay }) {
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
  }

  function pause() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
  }

  return {
    play,
    pause,
  };
}
