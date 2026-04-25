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

function assistirVideo2() {
  window.open("https://youtu.be/reIXndCVIjc?si=STGZfFoDN6zO5cLv", "_blank");
}

function assistirVideo3() {
  window.open("https://youtu.be/20M1FR8piZ0?si=oR-77tBGOy6-4faQ", "_blank");
}

function assistirVideo4() {
  window.open("https://youtu.be/rU1VXXPmjYE?si=CKcxGkTsf-QII_NV", "_blank");
}

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    iconBack.style.display = "block";
  } else {
    iconBack.style.display = "none";
  }
}

scrollFunction();

function voltarTopo() {
  hero = document.querySelector(".hero");
  hero.scrollIntoView({ behavior: "smooth" });
}
