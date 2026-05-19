import {
  carregarPortfolio,
  criarHabilidades,
  criarProjetos
} from "../controller/controller.js";

const dados = carregarPortfolio();

document.getElementById("nome").textContent = dados.perfil.nome;
document.getElementById("titulo").textContent = dados.perfil.titulo;
document.getElementById("descricao").textContent = dados.perfil.descricao;
document.getElementById("email").textContent = dados.perfil.email;
document.getElementById("telefone").textContent = dados.perfil.telefone;
document.getElementById("localizacao").textContent = dados.perfil.localizacao;

document.getElementById("habilidades").innerHTML =
  criarHabilidades(dados.habilidades);

document.getElementById("projetos").innerHTML =
  criarProjetos(dados.projetos);

const cards = document.querySelectorAll(".carousel-card");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const dots = document.querySelectorAll(".dot");

let indexAtual = 0;
let intervaloCarrossel;

function atualizarCarrossel() {
  cards.forEach((card, index) => {
    card.classList.remove("active", "left", "right", "hidden");

    if (index === indexAtual) {
      card.classList.add("active");
    } else if (index === (indexAtual - 1 + cards.length) % cards.length) {
      card.classList.add("left");
    } else if (index === (indexAtual + 1) % cards.length) {
      card.classList.add("right");
    } else {
      card.classList.add("hidden");
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === indexAtual);
  });
}

function proximoProjeto() {
  indexAtual = (indexAtual + 1) % cards.length;
  atualizarCarrossel();
}

function projetoAnterior() {
  indexAtual = (indexAtual - 1 + cards.length) % cards.length;
  atualizarCarrossel();
}

function iniciarCarrosselAutomatico() {
  intervaloCarrossel = setInterval(() => {
    proximoProjeto();
  }, 4500);
}

function reiniciarCarrosselAutomatico() {
  clearInterval(intervaloCarrossel);
  iniciarCarrosselAutomatico();
}

btnNext.addEventListener("click", () => {
  proximoProjeto();
  reiniciarCarrosselAutomatico();
});

btnPrev.addEventListener("click", () => {
  projetoAnterior();
  reiniciarCarrosselAutomatico();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    indexAtual = Number(dot.dataset.index);
    atualizarCarrossel();
    reiniciarCarrosselAutomatico();
  });
});

atualizarCarrossel();
iniciarCarrosselAutomatico();