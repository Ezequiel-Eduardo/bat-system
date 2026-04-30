let cardExibido = true;

let playerHTML = document.getElementById("player");

let iconBack = document.querySelector(".icon-back");

window.onscroll = function () {
  scrollFunction();
};

playerHTML.addEventListener("click", function () {
  if (cardExibido) {
    assistir();
    cardExibido = false;
  } else {
    pausar();
  }
});

function assistir() {
  presentationCard1.style.display = "none";
  presentationCard2.style.display = "none";
  presentationCard3.style.display = "none";
}

function pausar() {
  presentationCard1.style.display = "block";
  presentationCard2.style.display = "block";
  presentationCard3.style.display = "block";
  cardExibido = true;
}

function scrollFunction() {
  if (
    document.body.scrollTop > 2700 ||
    document.documentElement.scrollTop > 2700
  ) {
    iconBack.style.display = "block";
  } else {
    iconBack.style.display = "none";
  }
}

scrollFunction();

function trocarPagina(pagina) {
  window.location = `${pagina}.html`;
}

function trocarSessao(sessao) {
  sessao = document.getElementById(sessao);
  sessao.scrollIntoView({ behavior: "smooth" });
}

function trocarVideo(link) {
  window.open(link, "_blank");
}
