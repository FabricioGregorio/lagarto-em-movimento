const imgCardPadrao = new URL('../img/locais/bannerLAG.jpg', import.meta.url).href;

const listaLocais = [
    {
        nome: "Avenida Contorno",
        img: imgCardPadrao,
        badges: ["Ciclismo", "Ar Livre"],
        badgesClasses: ["badge-ciclismo", ""],
        desc: "A principal artéria para quem gosta de pedalar longas distâncias com segurança e espaço.",
        local: "Saída para Riachão",
        extra: "Pico: 05h - 07h",
        icon: "fa-clock",
        link: "locais/avenida-contorno.html"
    },
    {
        nome: "Academias da Cidade",
        img: imgCardPadrao,
        badges: ["Academia", "Ar Livre"],
        badgesClasses: ["badge-academia", ""],
        desc: "Equipamentos públicos disponíveis para fortalecimento muscular ao ar livre.",
        local: "Bairro Matinha",
        extra: "Pico: 18h - 20h",
        icon: "fa-clock",
        link: "locais/academias-da-cidade.html"
    },
    {
        nome: "Praça Filomeno Hora",
        img: imgCardPadrao,
        badges: ["Radical", "Lazer", "Ar Livre"],
        badgesClasses: ["badge-radical", "badge-lazer", ""],
        desc: "Ponto de encontro da juventude. Possui áreas lisas ideais para a prática de skate e patins.",
        local: "Centro",
        extra: "Pico: 16h - 22h",
        icon: "fa-clock",
        link: "locais/praca-filomeno-hora.html"
    },
    {
        nome: "Balneário Bica",
        img: new URL('../img/locais/bica/barzinho.jpg', import.meta.url).href,
        badges: ["Natureza", "Lazer"],
        badgesClasses: ["badge-natureza", "badge-lazer"],
        desc: "Um refúgio verde dentro da cidade. Além das piscinas naturais, possui trilhas curtas.",
        local: "Parque da Bica",
        extra: "Fins de Semana",
        icon: "fa-sun",
        link: "locais/balneario-bica.html"
    },
    {
        nome: "Praça Santa Teresinha",
        img: imgCardPadrao,
        badges: ["Lazer", "Ar Livre"],
        badgesClasses: ["badge-lazer", ""],
        desc: "Espaço público para lazer, caminhada e convivência.",
        local: "Lagarto/SE",
        extra: "A definir",
        icon: "fa-clock",
        link: "locais/praca-santa-teresinha.html"
    },
    {
        nome: "Praça Nossa Senhora da Piedade",
        img: imgCardPadrao,
        badges: ["História", "Lazer"],
        badgesClasses: ["badge-historia", "badge-lazer"],
        desc: "Área tradicional no centro, com espaço para lazer e circulação.",
        local: "Centro de Lagarto",
        extra: "Eventos / Convivência",
        icon: "fa-star",
        link: "locais/praca-nossa-senhora-da-piedade.html"
    },
    {
        nome: "Praça José Domingo Vieira",
        img: imgCardPadrao,
        badges: ["Lazer", "Ar Livre"],
        badgesClasses: ["badge-lazer", ""],
        desc: "Praça para convivência, descanso e atividades ao ar livre.",
        local: "Lagarto/SE",
        extra: "A definir",
        icon: "fa-clock",
        link: "locais/praca-jose-domingo-vieira.html"
    },
    {
        nome: "Praça do Gomes",
        img: imgCardPadrao,
        badges: ["Lazer", "Ar Livre"],
        badgesClasses: ["badge-lazer", ""],
        desc: "Espaço público para lazer e convivência ao ar livre.",
        local: "Lagarto/SE",
        extra: "A definir",
        icon: "fa-clock",
        link: "locais/praca-do-gomes.html"
    },
    {
        nome: "Praça da Ladeira do Rosário",
        img: imgCardPadrao,
        badges: ["História", "Lazer"],
        badgesClasses: ["badge-historia", "badge-lazer"],
        desc: "Ponto de encontro e passagem, com espaço para descanso.",
        local: "Lagarto/SE",
        extra: "A definir",
        icon: "fa-clock",
        link: "locais/praca-da-ladeira-do-rosario.html"
    },
    {
        nome: "Praça do Rosário",
        img: imgCardPadrao,
        badges: ["História", "Lazer"],
        badgesClasses: ["badge-historia", "badge-lazer"],
        desc: "Praça tradicional para lazer, convivência e passagem.",
        local: "Lagarto/SE",
        extra: "A definir",
        icon: "fa-clock",
        link: "locais/praca-do-rosario.html"
    },
    {
        nome: "Parque das Palmeiras",
        img: imgCardPadrao,
        badges: ["Natureza", "Lazer"],
        badgesClasses: ["badge-natureza", "badge-lazer"],
        desc: "Área verde para caminhada, descanso e atividades ao ar livre.",
        local: "Lagarto/SE",
        extra: "A definir",
        icon: "fa-sun",
        link: "locais/parque-das-palmeiras.html"
    },
    {
        nome: "Barragem Dionísio",
        img: imgCardPadrao,
        badges: ["Natureza", "Lazer"],
        badgesClasses: ["badge-natureza", "badge-lazer"],
        desc: "Área para contemplação, caminhada leve e lazer ao ar livre.",
        local: "Lagarto/SE",
        extra: "Tarde / Pôr do sol",
        icon: "fa-clock",
        link: "locais/barragem-dionisio.html"
    }
];

function renderLocais() {
    const container = document.getElementById('locais-container');
    
    // Verificação de segurança: se não achar o container (ex: está na página Home), para o script.
    if (!container) return; 

    let html = '';

    listaLocais.forEach(item => {
        // Lógica para montar as badges (etiquetas coloridas)
        let badgesHTML = '';
        item.badges.forEach((textoBadge, index) => {
            // Pega a classe correspondente ou usa uma padrão
            let classeCor = 'bg-primary';
            if (item.badgesClasses && item.badgesClasses[index]) {
                classeCor = item.badgesClasses[index];
            }
            badgesHTML += `<span class="category-badge ${classeCor}">${textoBadge}</span>`;
        });

        // Monta o Card HTML
        html += `
        <div class="col-md-6 col-lg-4">
                        <div class="card custom-card h-100 shadow-sm" data-href="${item.link}" role="link" tabindex="0" aria-label="Abrir detalhes de ${item.nome}">
              <div class="card-img-wrapper">
                                <a href="${item.link}" aria-label="Abrir detalhes de ${item.nome}">
                                    <img 
                                            src="${item.img}" 
                                            class="card-img-top" 
                                            alt="${item.nome}"
                                    >
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

function ativarClickCardsLocais() {
    const cards = document.querySelectorAll('.custom-card[data-href]');

    cards.forEach(card => {
        // Indicativo visual (sem depender de CSS global novo)
        card.style.cursor = 'pointer';

        const navigate = () => {
            const href = card.getAttribute('data-href');
            if (href) window.location.href = href;
        };

        card.addEventListener('click', (e) => {
            // Não intercepta interações internas (link, botão, imagem/modal, etc)
            if (e.target.closest('a, button, .img-clickable, [data-bs-toggle="modal"]')) return;
            navigate();
        });

        card.addEventListener('keydown', (e) => {
            // Acessibilidade: Enter/Espaço no card navega
            if (e.key !== 'Enter' && e.key !== ' ') return;
            if (e.target !== card) return;
            e.preventDefault();
            navigate();
        });
    });
}

function reativarModalImagens() {
    const clickableImages = document.querySelectorAll('.img-clickable');
    const modalImage = document.getElementById('modalImage');

    if (clickableImages.length > 0 && modalImage) {
        clickableImages.forEach((img) => {
            img.addEventListener('click', function() {
                modalImage.src = this.src;
                modalImage.alt = this.alt;
            });
        });
    }
}

function ativarBotoesMapa() {
    const mapButtons = document.querySelectorAll('.btn-map');
    const mapModal = new bootstrap.Modal(document.getElementById('mapModal'));
    const mapIframe = document.getElementById('mapIframe');
    const mapTitle = document.getElementById('mapModalLabel');

    mapButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const localQuery = this.getAttribute('data-local');
            
            // Atualiza o título do modal
            if(mapTitle) mapTitle.textContent = localQuery.replace(' Lagarto SE', '');

            // Atualiza o iframe com a busca no Google Maps
            // Usando a interface de embed simples (sem API Key necessária para visualização básica)
            const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(localQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
            
            if(mapIframe) mapIframe.src = mapUrl;

            mapModal.show();
        });
    });
    
    // Limpa o iframe ao fechar para parar vídeos/carregamento
    const mapModalEl = document.getElementById('mapModal');
    if(mapModalEl) {
        mapModalEl.addEventListener('hidden.bs.modal', function () {
            if(mapIframe) mapIframe.src = "";
        });
    }
}

/**
 * Função global para abrir o mapa (usada nas páginas internas de locais)
 * Ex: onclick="openMap('Tanque Grande')"
 */
function openMap(localName) {
    const mapModalEl = document.getElementById('mapModal');
    if (!mapModalEl) return;

    // Verifica se já existe uma instância do modal, senão cria
    let mapModal = bootstrap.Modal.getInstance(mapModalEl);
    if (!mapModal) {
        mapModal = new bootstrap.Modal(mapModalEl);
    }

    const mapIframe = document.getElementById('mapIframe');
    const mapTitle = document.getElementById('mapModalLabel');
    
    // Adiciona o contexto da cidade para a busca ficar correta
    const localQuery = localName + " Lagarto SE";

    // Atualiza o título do modal
    if(mapTitle) mapTitle.textContent = localName;

    // Atualiza o iframe
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(localQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    
    if(mapIframe) mapIframe.src = mapUrl;

    mapModal.show();

    // Limpa o iframe ao fechar (adiciona listener apenas se ainda não tiver)
    // Nota: O listener global em ativarBotoesMapa ou aqui pode se acumular se não tomar cuidado,
    // mas como a página recarrega na navegação, é tranquilo. 
    // Para garantir, usamos { once: true } aqui.
    mapModalEl.addEventListener('hidden.bs.modal', function () {
        if(mapIframe) mapIframe.src = "";
    }, { once: true });
}

// Necessário para funcionar com onclick="openMap('...')" em HTML quando o script é module
if (typeof window !== 'undefined') {
    window.openMap = openMap;
}

// Chama a função assim que o arquivo carrega
document.addEventListener('DOMContentLoaded', () => {
    renderLocais();
});