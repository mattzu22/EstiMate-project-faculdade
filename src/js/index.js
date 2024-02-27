










const center = document.querySelector(".center");
const perguntas = document.querySelectorAll(".question");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const perguntaAtivaAtual = document.querySelector(".ativo");

    pergunta.classList.toggle("ativo")

    if (perguntaAtivaAtual) {
      perguntaAtivaAtual.classList.remove("ativo");
    }

    // pergunta.classList.add("ativo");
  });
});


center.addEventListener("click", () => {
  center.classList.toggle("selecionado");

  const selecionado = document.querySelector(".center.selecionado");
  const nav = document.querySelector(".navegation-mobile");

  if (selecionado) {
    nav.classList.toggle("selecionado");
  } else {
    nav.classList.remove("selecionado");
  }
});