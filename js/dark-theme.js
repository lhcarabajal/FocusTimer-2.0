export function DarkTheme({
  soundChuva,
  soundFloresta,
  soundLanchonete,
  soundLareira,
}) {
  let iconChuvaDark = document.querySelector(".chuva svg path");
  let iconFlorestaDark = document.querySelector(".floresta svg path");
  let iconLareiraDark = document.querySelector(".lareira svg path");
  let iconLanchoneteDark = document.querySelector(".lanchonete svg path");

  function buttonDarkFloresta() {
    soundFloresta.style.backgroundColor = "#0A3442";
    soundChuva.style.backgroundColor = "#29292E";
    soundLanchonete.style.backgroundColor = "#29292E";
    soundLareira.style.backgroundColor = "#29292E";

    iconFlorestaDark.style.fill = "white";
    iconChuvaDark.style.fill = "white";
    iconLanchoneteDark.style.fill = "white";
    iconLareiraDark.style.fill = "white";
  }

  function buttonDarkChuva() {
    soundChuva.style.backgroundColor = "#0A3442";
    soundFloresta.style.backgroundColor = "#29292E";
    soundLanchonete.style.backgroundColor = "#29292E";
    soundLareira.style.backgroundColor = "#29292E";

    iconFlorestaDark.style.fill = "white";
    iconChuvaDark.style.fill = "white";
    iconLanchoneteDark.style.fill = "white";
    iconLareiraDark.style.fill = "white";
  }

  function buttonDarkLanchonete() {
    soundLanchonete.style.backgroundColor = "#0A3442";
    soundFloresta.style.backgroundColor = "#29292E";
    soundChuva.style.backgroundColor = "#29292E";
    soundLareira.style.backgroundColor = "#29292E";

    iconFlorestaDark.style.fill = "white";
    iconChuvaDark.style.fill = "white";
    iconLanchoneteDark.style.fill = "white";
    iconLareiraDark.style.fill = "white";
  }

  function buttonDarkLareira() {
    soundLareira.style.backgroundColor = "#0A3442";
    soundFloresta.style.backgroundColor = "#29292E";
    soundChuva.style.backgroundColor = "#29292E";
    soundLanchonete.style.backgroundColor = "#29292E";

    iconFlorestaDark.style.fill = "white";
    iconChuvaDark.style.fill = "white";
    iconLanchoneteDark.style.fill = "white";
    iconLareiraDark.style.fill = "white";
  }
  return {
    buttonDarkFloresta,
    buttonDarkChuva,
    buttonDarkLanchonete,
    buttonDarkLareira,
  };
}
