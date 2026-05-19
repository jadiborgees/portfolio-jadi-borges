import { portfolioData } from "../model/dados.js";

export function carregarPortfolio() {
  return portfolioData;
}

export function criarHabilidades(habilidades) {
  const icones = {
    "HTML5": "devicon-html5-plain colored",
    "CSS3": "devicon-css3-plain colored",
    "JavaScript": "devicon-javascript-plain colored",
    "TypeScript": "devicon-typescript-plain colored",
    "Python": "devicon-python-plain colored",
    "Angular": "devicon-angularjs-plain colored",
    "Node.js": "devicon-nodejs-plain colored",
    "Express": "devicon-express-original",
    "MySQL": "devicon-mysql-plain colored",
    "Prisma ORM": "devicon-prisma-original",
    "GitHub": "devicon-github-original",
    "API REST": "devicon-fastapi-plain colored",
    "UI/UX": "devicon-figma-plain colored",
    "Responsividade": "devicon-chrome-plain colored",
    "Arquitetura MVC": "devicon-vscode-plain colored"
  };

  return habilidades
    .map(
      (habilidade) => `
        <li tabindex="0">
          <i class="${icones[habilidade] || "devicon-codepen-plain"}"></i>
          <span>${habilidade}</span>
        </li>
      `
    )
    .join("");
}

export function criarProjetos(projetos) {
  return projetos
    .map(
      (projeto, index) => `
        <article class="carousel-card ${index === 0 ? "active" : ""
        }" tabindex="0">

          <img
            src="${projeto.imagem}"
            alt="${projeto.nome}"
            class="project-image"
          >

          <div class="project-content">

            <div class="project-icon">
              ${index + 1}
            </div>

            <span class="project-tech">
              ${projeto.tecnologia}
            </span>

            <h3>${projeto.nome}</h3>

            <p>${projeto.descricao}</p>

            <div class="project-actions">
              <a
                href="${projeto.repositorio}"
                target="_blank"
                class="project-link"
              >
                Ver repositório
              </a>
            </div>

          </div>

        </article>
      `
    )
    .join("");
}