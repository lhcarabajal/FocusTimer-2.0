export function DarkTheme({
  soundChuva,
  soundFloresta,
  soundLanchonete,
  soundLareira,
}) {
  function buttonDarkFloresta() {
    soundFloresta.style.backgroundColor = "#0A3442";
    soundChuva.style.backgroundColor = "#29292E";
    soundLanchonete.style.backgroundColor = "#29292E";
    soundLareira.style.backgroundColor = "#29292E";
  }

  function buttonDarkChuva() {
    soundChuva.style.backgroundColor = "#0A3442";
    soundFloresta.style.backgroundColor = "#29292E";
    soundLanchonete.style.backgroundColor = "#29292E";
    soundLareira.style.backgroundColor = "#29292E";
  }

  function buttonDarkLanchonete() {
    soundLanchonete.style.backgroundColor = "#0A3442";
    soundFloresta.style.backgroundColor = "#29292E";
    soundChuva.style.backgroundColor = "#29292E";
    soundLareira.style.backgroundColor = "#29292E";
  }

  function buttonDarkLareira() {
    soundLareira.style.backgroundColor = "#0A3442";
    soundFloresta.style.backgroundColor = "#29292E";
    soundChuva.style.backgroundColor = "#29292E";
    soundLanchonete.style.backgroundColor = "#29292E";
  }
  return {
    buttonDarkFloresta,
    buttonDarkChuva,
    buttonDarkLanchonete,
    buttonDarkLareira,
  };
}
