document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
});

function getBasePath() {
  const host = window.location.host;
  const path = window.location.pathname;
  const pathSegments = path.replace(/^\//, '').split('/').filter(Boolean);

  // GitHub Pages: https://<user>.github.io/<repo>/...
  if (host.endsWith('github.io') && pathSegments.length > 0) {
    return `/${pathSegments[0]}/`;
  }

  return '/';
}

function renderHeader() {
  const basePath = getBasePath();
  const path = window.location.pathname;

    // Pega o título da página atual para saber qual aba ativar e o título do Hero
    let activePage = '';
    let heroTitle = '';
    let heroSubtitle = '';

    if(path.includes('locais')) { activePage = 'locais'; heroTitle = 'GUIA DE LOCAIS'; heroSubtitle = 'Todos os pontos de esporte e lazer mapeados'; }
    else if(path.includes('sobre')) { activePage = 'sobre'; heroTitle = 'SOBRE O PROJETO'; heroSubtitle = 'Nossa missão e história'; }
    else if(path.includes('equipe')) { activePage = 'equipe'; heroTitle = 'QUEM FAZ ACONTECER'; heroSubtitle = 'Alunos do IFS - Campus Lagarto'; }
    else if(path.includes('configuracoes')) { activePage = 'configuracoes'; heroTitle = 'AJUSTES'; heroSubtitle = 'Personalize sua experiência'; }
    else { activePage = 'home'; heroTitle = 'LAGARTO EM MOVIMENTO'; heroSubtitle = 'CONHEÇA O LAZER E ESPORTE...'; }

    const headerHTML = `
    <header class="main-header ${activePage !== 'home' ? 'internal-header' : ''}">
      <div class="header-overlay">
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="${basePath}index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">
                <div class="icon-circle"><i class="fa-solid fa-house"></i></div>
                <span>INÍCIO</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="${basePath}src/pages/locais.html" class="nav-link ${activePage === 'locais' ? 'active' : ''}">
                <div class="icon-circle"><i class="fa-solid fa-map-location-dot"></i></div>
                <span>LOCAIS</span>
              </a>
            </li>
            <li class="nav-item"><a href="${basePath}src/pages/sobre.html" class="nav-link ${activePage === 'sobre' ? 'active' : ''}"><div class="icon-circle"><i class="fa-solid fa-circle-info"></i></div><span>SOBRE O PROJETO</span></a></li>
            <li class="nav-item"><a href="${basePath}src/pages/equipe.html" class="nav-link ${activePage === 'equipe' ? 'active' : ''}"><div class="icon-circle"><i class="fa-solid fa-users"></i></div><span>EQUIPE</span></a></li>
            <li class="nav-item"><a href="${basePath}src/pages/configuracoes.html" class="nav-link ${activePage === 'configuracoes' ? 'active' : ''}"><div class="icon-circle"><i class="fa-solid fa-gear"></i></div><span>CONFIGURAÇÕES</span></a></li>
          </ul>
        </nav>

        <div class="hero-content container text-center mt-5">
            <h1 class="hero-title fs-1 mb-2">${heroTitle}</h1>
            <p class="hero-subtitle">${heroSubtitle}</p>
            ${activePage === 'home' ? `
              <a href="#destaques" class="btn btn-primary-custom">Ver mais</a>
              <a href="#destaques" class="scroll-down-arrow">
                <i class="fa-solid fa-chevron-down"></i>
              </a>
            ` : ''}
        </div>
      </div>
    </header>
    `;

    document.getElementById('header-component').innerHTML = headerHTML;
}

function renderFooter() {
    const basePath = getBasePath();

    const footerHTML = `
    <footer class="bg-dark text-white pt-5 pb-4 border-top border-secondary">
      <div class="container text-center text-md-start">
        <div class="row text-center text-md-start">
          
          <!-- Coluna 1: Sobre -->
          <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold" style="color: var(--primary-color);">Lagarto em Movimento</h5>
            <p>
              Guia de esporte e lazer da cidade de Lagarto/SE. Um projeto acadêmico para conectar a comunidade aos espaços públicos.
            </p>
          </div>

          <!-- Coluna 2: Mapa do Site -->
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold" style="color: var(--primary-color);">Mapa do Site</h5>
            <p><a href="${basePath}index.html" class="text-white text-decoration-none">Início</a></p>
            <p><a href="${basePath}src/pages/locais.html" class="text-white text-decoration-none">Locais</a></p>
            <p><a href="${basePath}src/pages/equipe.html" class="text-white text-decoration-none">Equipe</a></p>
            <p><a href="${basePath}src/pages/sobre.html" class="text-white text-decoration-none">Sobre</a></p>
          </div>

          <!-- Coluna 3: Institucional -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold" style="color: var(--primary-color);">Institucional</h5>
            <p>
              <a href="http://www.ifs.edu.br/lagarto" target="_blank" class="text-white text-decoration-none">
                <i class="fas fa-university me-2"></i> IFS - Campus Lagarto
              </a>
            </p>
            <p>
              <a href="https://github.com/FabricioGregorio/lagarto-em-movimento" target="_blank" class="text-white text-decoration-none">
                <i class="fab fa-github me-2"></i> Repositório GitHub
              </a>
            </p>
          </div>
          
        </div>

        <hr class="mb-4 border-secondary">

        <div class="row align-items-center">
            <div class="col-12 text-center">
                <p class="mb-0">© 2025 <strong>Lagarto em Movimento</strong>. Todos os direitos reservados.</p>
            </div>
        </div>

      </div>
    </footer>
    `;
    document.getElementById('footer-component').innerHTML = footerHTML;
}