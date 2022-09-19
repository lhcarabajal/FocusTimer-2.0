export default function Sound() {
  const soundFloresta = new Audio("./audio/Floresta.wav");

  const soundChuva = new Audio("./audio/Chuva.wav");

  const soundLanchonete = new Audio("./audio/Lanchonete.wav");

  const soundLareira = new Audio("./audio/Lareira.wav");

  soundFloresta.loop = true;
  soundChuva.loop = true;
  soundLanchonete.loop = true;
  soundLareira.loop = true;
  return {
    soundFloresta,
    soundLanchonete,
    soundChuva,
    soundLareira,
  };
}
