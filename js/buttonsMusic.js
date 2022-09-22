export function buttonsMusic({
  soundFloresta,
  soundChuva,
  soundLareira,
  soundLanchonete,
}) {
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

  return {
    buttonColorFloresta,
    buttonColorChuva,
    buttonColorLanchonete,
    buttonColorLareira,
  };
}
