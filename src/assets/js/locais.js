const listaLocais = [
    {
        nome: "Tanque Grande",
        img: "../assets/img/locais/bannerLAG.jpg",
        badges: ["História", "Ar Livre"],
        badgesClasses: ["badge-historia", ""], // Se deixar vazio, usa padrão
        desc: "Um marco histórico da cidade. Além de sua importância cultural, oferece uma ampla área para caminhadas.",
        local: "Centro de Lagarto",
        extra: "Pico: 17h - 19h",
        icon: "fa-clock"
    },
    {
        nome: "Avenida Contorno",
        img: "../assets/img/locais/bannerLAG.jpg",
        badges: ["Ciclismo", "Ar Livre"],
        badgesClasses: ["badge-ciclismo", ""],
        desc: "A principal artéria para quem gosta de pedalar longas distâncias com segurança e espaço.",
        local: "Saída para Riachão",
        extra: "Pico: 05h - 07h",
        icon: "fa-clock"
    },
    {
        nome: "Academia da Cidade",
        img: "../assets/img/locais/bannerLAG.jpg",
        badges: ["Academia", "Ar Livre"],
        badgesClasses: ["badge-academia", ""],
        desc: "Equipamentos públicos disponíveis para fortalecimento muscular ao ar livre.",
        local: "Bairro Matinha",
        extra: "Pico: 18h - 20h",
        icon: "fa-clock"
    },
    {
        nome: "Estádio Barretão",
        img: "../assets/img/locais/bannerLAG.jpg",
        badges: ["Futebol", "Ar Livre"],
        badgesClasses: ["badge-futebol", ""],
        desc: "O palco das grandes emoções do Lagarto FC. O entorno é muito usado para corridas.",
        local: "Bairro Matinha",
        extra: "Jogos / Eventos",
        icon: "fa-calendar"
    },
    {
        nome: "Praça Filomeno Hora",
        img: "../assets/img/locais/bannerLAG.jpg",
        badges: ["Radical", "Lazer", "Ar Livre"],
        badgesClasses: ["badge-radical", "badge-lazer", ""],
        desc: "Ponto de encontro da juventude. Possui áreas lisas ideais para a prática de skate e patins.",
        local: "Centro",
        extra: "Pico: 16h - 22h",
        icon: "fa-clock"
    },
    {
        nome: "Ginásio O Ribeirão",
        img: "../assets/img/locais/bannerLAG.jpg",
        badges: ["Indoor"],
        badgesClasses: ["badge-indoor"],
        desc: "Referência para futsal, vôlei e basquete. O ginásio recebe competições escolares e amadoras.",
        local: "Próx. ao Mercado",
        extra: "Agendamento",
        icon: "fa-clock"
    },
    {
        nome: "Balneário Bica",
        img: "../assets/img/locais/bannerLAG.jpg",
        badges: ["Natureza", "Lazer"],
        badgesClasses: ["badge-natureza", "badge-lazer"],
        desc: "Um refúgio verde dentro da cidade. Além das piscinas naturais, possui trilhas curtas.",
        local: "Parque da Bica",
        extra: "Fins de Semana",
        icon: "fa-sun"
    },
    {
        nome: "Barragem Dionísio Machado",
        img: "../assets/img/locais/bannerLAG.jpg",
        badges: ["Natureza", "Lazer"],
        badgesClasses: ["badge-natureza", "badge-lazer"],
        desc: "O cartão postal para o pôr do sol. A orla é utilizada para caminhadas leves e piqueniques.",
        local: "Zona Oeste",
        extra: "Tarde / Pôr do Sol",
        icon: "fa-clock"
    },
    {
        nome: "Praça da Piedade",
        img: "../assets/img/locais/bannerLAG.jpg",
        badges: ["História", "Lazer"],
        badgesClasses: ["badge-historia", "badge-lazer"],
        desc: "Onde a história e o lazer se encontram. O entorno da igreja matriz oferece espaço seguro.",
        local: "Centro Histórico",
        extra: "Noite / Eventos",
        icon: "fa-star"
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
            <div class="card custom-card h-100 shadow-sm">
              <div class="card-img-wrapper">
                <img 
                    src="${item.img}" 
                    class="card-img-top img-clickable" 
                    alt="${item.nome}"
                    data-bs-toggle="modal" 
                    data-bs-target="#imageModal"
                >
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
                <a href="#" class="btn btn-outline-custom w-100">Ver no Mapa</a>
              </div>
            </div>
          </div>
        `;
    });

    container.innerHTML = html;
    reativarModalImagens();
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

// Chama a função assim que o arquivo carrega
document.addEventListener('DOMContentLoaded', () => {
    renderLocais();
});