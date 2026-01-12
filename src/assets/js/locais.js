const imgCardPadrao = new URL('../img/locais/bannerLAG.jpg', import.meta.url).href;

const listaLocais = [
    {
        nome: "Balneário da Bica José Agnaldo da Silva",
        img: new URL('../img/locais/balneario/capa.JPEG', import.meta.url).href,
        badges: ["Natureza", "Lazer"],
        badgesClasses: ["badge-natureza", "badge-lazer"],
        categorias: "natureza lazer acessibilidade", // Categoria para o filtro
        desc: "Um refúgio verde dentro da cidade. Além das piscinas naturais, possui trilhas curtas.",
        local: "Localizado às margens da avenida Contorno (rodovia SE-270).",
        extra: "Horário: 08:00h às 20:00h; Semana inteira.",
        icon: "fa-clock",
        link: "locais/balneario-bica.html"
    },
    {
        nome: "Barragem Dionísio Machado",
        img: new URL('../img/locais/dionisio/capa.JPEG', import.meta.url).href,
        badges: ["Natureza", "Lazer"],
        badgesClasses: ["badge-natureza", "badge-lazer"],
        categorias: "natureza lazer",
        desc: "Área para contemplação, caminhada leve e lazer ao ar livre.",
        local: "Zona Rural de Lagarto.",
        extra: "Livre",
        icon: "fa-clock",
        link: "locais/barragem-dionisio.html"
    },
    {
        nome: "Parque das Palmeiras",
        img: new URL('../img/locais/palmeiras/capa.JPEG', import.meta.url).href,
        badges: ["Natureza", "Lazer"],
        badgesClasses: ["badge-natureza", "badge-lazer"],
        categorias: "natureza lazer familia",
        desc: "Área verde para caminhada, descanso e atividades ao ar livre.",
        local: "Estrada Parque das Palmeiras, Povoado Brejo",
        extra: "Horário: 08:00h às 18:00h; Semana inteira",
        icon: "fa-clock",
        link: "locais/parque-das-palmeiras.html"
    },
    {
        nome: "Centro de Iniciação ao Esporte",
        img: new URL('../img/locais/cie/capa.jpg', import.meta.url).href,
        badges: ["Indoor", "Esportes"],
        badgesClasses: ["badge-indoor", "badge-esportes"],
        categorias: "infra esportes",
        desc: "Espaço voltado à iniciação esportiva e atividades físicas, com estrutura para treinamentos.",
        local: "Rua Tiradentes, s/n, no Conjunto Matinha, no Bairro Aldemar de Carvalho",
        extra: "Horário: 08:00h às 18:00h; Segunda a Sexta",
        icon: "fa-clock",
        link: "locais/centro-de-iniciacao-ao-esporte.html"
    },
    {
        nome: "Travessa da Bica",
        img: new URL('../img/locais/travessa/capa.JPEG', import.meta.url).href,
        badges: ["Lazer", "Ar Livre"],
        badgesClasses: ["badge-lazer", ""],
        categorias: "lazer acessibilidade",
        desc: "Área de acesso e circulação próxima ao Balneário da Bica, usada para caminhadas e deslocamento.",
        local: "Avenida Sindicalista Antônio Francisco da Rocha",
        extra: "Livre",
        icon: "fa-clock",
        link: "locais/travessa-da-bica.html"
    },
    {
        nome: "Praça Nossa Senhora da Piedade",
        img: new URL('../img/locais/piedade/praca-capa.JPEG', import.meta.url).href,
        badges: ["História", "Lazer"],
        badgesClasses: ["badge-historia", "badge-lazer"],
        categorias: "historia lazer",
        desc: "Área tradicional no centro, com espaço para lazer e circulação.",
        local: "R. Cel. Souza Freire, Centro",
        extra: "Livre",
        icon: "fa-clock",
        link: "locais/praca-nossa-senhora-da-piedade.html"
    },
    {
        nome: "Praça do Rosário",
        img: new URL('../img/locais/rosario/capa.JPEG', import.meta.url).href,
        badges: ["História", "Lazer"],
        badgesClasses: ["badge-historia", "badge-lazer"],
        categorias: "lazer familia historia",
        desc: "Praça tradicional para lazer, convivência e passagem.",
        local: "Praça do Rosário, com acesso pela Av. Nossa Senhora da Piedade - Centro.",
        extra: "Livre",
        icon: "fa-clock",
        link: "locais/praca-do-rosario.html"
    },
    {
        nome: "Praça Filomeno Hora",
        img: new URL('../img/locais/filomeno/capa.JPEG', import.meta.url).href,
        badges: ["Lazer", "Ar Livre"],
        badgesClasses: ["badge-lazer", ""],
        categorias: "lazer familia acessibilidade",
        desc: "Ponto de encontro da juventude. Possui áreas lisas ideais para a prática de skate e patins.",
        local: "Praça Filomeno Hora, com acesso pela Rua Dr. Lupicínio Barros, s/n - Centro.",
        extra: "Livre",
        icon: "fa-clock",
        link: "locais/praca-filomeno-hora.html"
    },
    {
        nome: "Praça Santa Teresinha",
        img: new URL('../img/locais/teresinha/praca-visao-geral.JPEG', import.meta.url).href,
        badges: ["Lazer", "Ar Livre"],
        badgesClasses: ["badge-lazer", ""],
        categorias: "lazer acessibilidade",
        desc: "Espaço público para lazer, caminhada e convivência.",
        local: "R. Josefa de Farias Júnior, 50-94 - Novo Horizonte.",
        extra: "Livre",
        icon: "fa-clock",
        link: "locais/praca-santa-teresinha.html"
    },
        {
        nome: "Praça do Gomes",
        img: new URL('../img/locais/gomes/capa.JPEG', import.meta.url).href,
        badges: ["Lazer", "Ar Livre"],
        badgesClasses: ["badge-lazer", ""],
        categorias: "lazer acessibilidade",
        desc: "Espaço público para lazer e convivência ao ar livre.",
        local: "Praça Jeremias Monteiro de Carvalho, 113 - São José.",
        extra: "Livre",
        icon: "fa-clock",
        link: "locais/praca-do-gomes.html"
    },
    {
        nome: "Praça José Domingo Vieira",
        img: new URL('../img/locais/domingo/capa.JPEG', import.meta.url).href,
        badges: ["Lazer", "Ar Livre"],
        badgesClasses: ["badge-lazer", ""],
        categorias: "lazer acessibilidade",
        desc: "Praça para convivência, descanso e atividades ao ar livre.",
        local: "Rua José Barreto de Souza, 1-107.",
        extra: "Livre",
        icon: "fa-clock",
        link: "locais/praca-jose-domingo-vieira.html"
    },
    {
        nome: "Praça José Josué da Silva (Ladeira do Rosário)",
        img: new URL('../img/locais/ladeira/capa.JPEG', import.meta.url).href,
        badges: ["História", "Lazer"],
        badgesClasses: ["badge-historia", "badge-lazer"],
        categorias: "lazer historia acessibilidade",
        desc: "Ponto de encontro e passagem, com espaço para descanso.",
        local: "Avenida José Josué da Silva (Ladeira do Rosário).",
        extra: "Livre",
        icon: "fa-clock",
        link: "locais/praca-da-ladeira-do-rosario.html"
    },
    {
        nome: "Parque Zezé Rocha",
        img: new URL('../img/locais/zeze/zeze1.jpg', import.meta.url).href,
        badges: ["História", "Lazer"],
        badgesClasses: ["badge-historia", "badge-lazer"],
        categorias: "lazer historia",
        desc: "Ponto de encontro e passagem, com espaço para descanso.",
        local: "Rodovia Lourival Baptista, Lagarto - SE.",
        extra: "Consulte agenda de eventos",
        icon: "fa-clock",
        link: "locais/parque-zeze.html"
    },
    
];

function renderLocais() {
    const container = document.getElementById('locais-container');
    if (!container) return; 

    let html = '';

    listaLocais.forEach(item => {
        let badgesHTML = '';
        item.badges.forEach((textoBadge, index) => {
            let classeCor = 'bg-primary';
            if (item.badgesClasses && item.badgesClasses[index]) {
                classeCor = item.badgesClasses[index];
            }
            badgesHTML += `<span class="category-badge ${classeCor}">${textoBadge}</span>`;
        });

        html += `
        <div class="col-md-6 col-lg-4 filter-item" data-category="${item.categorias}">
            <div class="card custom-card h-100 shadow-sm" data-href="${item.link}" role="link" tabindex="0" aria-label="Abrir detalhes de ${item.nome}">
              <div class="card-img-wrapper">
                <a href="${item.link}" aria-label="Abrir detalhes de ${item.nome}">
                    <img src="${item.img}" class="card-img-top" alt="${item.nome}">
                </a>
                <div class="badges-container">
                    ${badgesHTML}
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">${item.nome}</h5>
                <p class="card-text">${item.desc}</p>
                <ul class="list-unstyled mt-3 mb-4 details-list">
                  <li><i class="fa-solid fa-location-dot text-primary-custom"></i> ${item.local}</li>
                  <li><i class="fa-regular ${item.icon} text-primary-custom"></i> ${item.extra}</li>
                </ul>
              </div>
              <div class="card-footer bg-white border-0 pb-3">
                <a href="${item.link}" class="btn btn-primary-custom w-100 mb-2">
                    <i class="fa-solid fa-circle-info me-2"></i> Saiba mais
                </a>
                <button class="btn btn-outline-custom w-100 btn-map" data-local="${item.nome} Lagarto SE">
                    <i class="fa-solid fa-map-location-dot me-2"></i> Ver no Mapa
                </button>
              </div>
            </div>
        </div>
        `;
    });

    container.innerHTML = html;
    
    ativarClickCardsLocais();
    reativarModalImagens();
    ativarBotoesMapa();
}

// NOVA FUNÇÃO: Aplica o efeito de fundo no carrossel
function aplicarBlurBgNosCarousels() {
    const imgs = document.querySelectorAll('.carousel .carousel-item img.local-cover-img');
    imgs.forEach((img) => {
        const carouselItem = img.closest('.carousel-item');
        if (!carouselItem) return;

        const src = img.getAttribute('src');
        if (!src) return;

        // Define a variável CSS e a classe que ativa o efeito do locais.css
        carouselItem.style.setProperty('--carousel-bg', `url("${src}")`);
        carouselItem.classList.add('has-blur-bg');
    });
}

function ativarFiltros() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            const btn = e.target;
            const filtroEscolhido = btn.getAttribute('data-filter');

            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('btn-primary', 'active');
                b.classList.add('btn-outline-primary');
            });
            btn.classList.add('btn-primary', 'active');
            btn.classList.remove('btn-outline-primary');

            const cards = document.querySelectorAll('.filter-item');
            cards.forEach(card => {
                const categorias = card.getAttribute('data-category') || '';
                if (filtroEscolhido === 'all' || categorias.split(' ').includes(filtroEscolhido)) {
                    card.classList.remove('d-none');
                } else {
                    card.classList.add('d-none');
                }
            });
        }
    });
}

function ativarBotoesMapa() {
    const mapButtons = document.querySelectorAll('.btn-map');
    const modalEl = document.getElementById('mapModal');
    if (!modalEl) return;
    
    const mapModal = new bootstrap.Modal(modalEl);
    const mapIframe = document.getElementById('mapIframe');
    const mapTitle = document.getElementById('mapModalLabel');

    mapButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); 
            
            const localQuery = this.getAttribute('data-local');
            if(mapTitle) mapTitle.textContent = localQuery.replace(' Lagarto SE', '');

            // CORREÇÃO: trocado 1{ por ${
            const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(localQuery)}&output=embed`;
            
            if(mapIframe) mapIframe.src = mapUrl;
            mapModal.show();
        });
    });

    modalEl.addEventListener('hidden.bs.modal', () => {
        if(mapIframe) mapIframe.src = "";
    });
}

function ativarClickCardsLocais() {
    document.querySelectorAll('.custom-card[data-href]').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            if (e.target.closest('a, button')) return;
            const href = card.getAttribute('data-href');
            if (href) window.location.href = href;
        });
    });
}

function reativarModalImagens() {
    const modalImage = document.getElementById('modalImage');
    document.querySelectorAll('.img-clickable').forEach(img => {
        img.addEventListener('click', () => {
            if(modalImage) {
                modalImage.src = img.src;
                modalImage.alt = img.alt;
            }
        });
    });
}

// Inicialização Única
document.addEventListener('DOMContentLoaded', () => {
    renderLocais();      // Para a página de listagem
    ativarFiltros();     // Para a página de listagem
    
    // ATIVAÇÃO DO EFEITO: Importante para as páginas individuais (como Balneário)
    aplicarBlurBgNosCarousels(); 
    reativarModalImagens();
    ativarBotoesMapa();
});

window.openMap = function(localQuery) {
    const modalEl = document.getElementById('mapModal');
    if (!modalEl) return;
    
    const mapModal = new bootstrap.Modal(modalEl);
    const mapIframe = document.getElementById('mapIframe');
    const mapTitle = document.getElementById('mapModalLabel');

    if(mapTitle) mapTitle.textContent = localQuery;
    
    // URL formatada corretamente para o iframe do Google Maps
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(localQuery + " Lagarto SE")}&output=embed`;
    
    if(mapIframe) mapIframe.src = mapUrl;
    mapModal.show();
}