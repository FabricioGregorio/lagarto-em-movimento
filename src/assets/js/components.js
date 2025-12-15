document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
});

function renderHeader() {
    // Detecta se estamos na raiz (index) ou em subpastas para ajustar os links
    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const basePath = isIndex ? './src/pages/' : './';
    const homePath = isIndex ? './index.html' : '../../index.html';
    const cssPath = isIndex ? './src/assets/img/locais/banner.jpg' : '../assets/img/locais/banner.jpg'; // Ajuste conforme onde a imagem está

    // Pega o título da página atual para saber qual aba ativar e o título do Hero
    const path = window.location.pathname;
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
              <a href="${homePath}" class="nav-link ${activePage === 'home' ? 'active' : ''}">
                <div class="icon-circle"><i class="fa-solid fa-house"></i></div>
                <span>INÍCIO</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="${basePath}locais.html" class="nav-link ${activePage === 'locais' ? 'active' : ''}">
                <div class="icon-circle"><i class="fa-solid fa-map-location-dot"></i></div>
                <span>LOCAIS</span>
              </a>
            </li>
            <li class="nav-item"><a href="${basePath}sobre.html" class="nav-link ${activePage === 'sobre' ? 'active' : ''}"><div class="icon-circle"><i class="fa-solid fa-circle-info"></i></div><span>SOBRE O PROJETO</span></a></li>
            <li class="nav-item"><a href="${basePath}equipe.html" class="nav-link ${activePage === 'equipe' ? 'active' : ''}"><div class="icon-circle"><i class="fa-solid fa-users"></i></div><span>EQUIPE</span></a></li>
            <li class="nav-item"><a href="${basePath}configuracoes.html" class="nav-link ${activePage === 'configuracoes' ? 'active' : ''}"><div class="icon-circle"><i class="fa-solid fa-gear"></i></div><span>CONFIGURAÇÕES</span></a></li>
          </ul>
        </nav>

        <div class="hero-content container text-center">
            <h1 class="hero-title fs-1 mb-2">${heroTitle}</h1>
            <p class="hero-subtitle">${heroSubtitle}</p>
            ${activePage === 'home' ? '<a href="#destaques" class="btn btn-primary-custom">Ver mais</a>' : ''}
        </div>
      </div>
    </header>
    `;

    document.getElementById('header-component').innerHTML = headerHTML;
}

function renderFooter() {
    const footerHTML = `
    <footer class="bg-black py-4 text-center text-white-50">
      <div class="container">
        <small>&copy; 2025 Lagarto em Movimento. Projeto Acadêmico IFS.</small>
      </div>
    </footer>
    `;
    document.getElementById('footer-component').innerHTML = footerHTML;
}