// Espera o HTML carregar completamente antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // --- INICIALIZAÇÃO DE CONFIGURAÇÕES ---
    initializeSettings();

    // --- LÓGICA DE IMAGENS E MODAL ---
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

    // --- LÓGICA DE SCROLL REVEAL ---
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"  
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-in-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    // --- EVENT LISTENERS DA PÁGINA DE CONFIGURAÇÕES ---
    setupSettingsListeners();
});

// --- FUNÇÕES DE CONFIGURAÇÃO (GLOBAL) ---

/**
 * Carrega todas as preferências salvas (Tema, Movimento, Fonte)
 */
function initializeSettings() {
    // 1. Tema Escuro
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyTheme(true);
    } 

    // 2. Reduzir Animações
    const savedMotion = localStorage.getItem('reduceMotion');
    if (savedMotion === 'true') {
        applyMotionReduction(true);
    }

    // 3. Tamanho da Fonte
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        applyFontSize(savedFontSize);
    }
}

/**
 * Configura os ouvintes de eventos para os botões da página de configurações
 */
function setupSettingsListeners() {
    // Switch Dark Mode
    const darkModeToggle = document.getElementById('darkModeSwitch');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            applyTheme(this.checked);
        });
    }

    // Switch Reduzir Animações
    const motionToggle = document.getElementById('motionSwitch');
    if (motionToggle) {
        motionToggle.addEventListener('change', function() {
            applyMotionReduction(this.checked);
        });
    }

    // Botões de Fonte
    const btnDecrease = document.getElementById('fontDecrease');
    const btnReset = document.getElementById('fontReset');
    const btnIncrease = document.getElementById('fontIncrease');

    if (btnDecrease) btnDecrease.addEventListener('click', () => applyFontSize('sm'));
    if (btnReset) btnReset.addEventListener('click', () => applyFontSize('md')); // md = padrão
    if (btnIncrease) btnIncrease.addEventListener('click', () => applyFontSize('lg'));

    // Botão Resetar Tudo
    const btnResetAll = document.getElementById('resetSettings');
    if (btnResetAll) {
        btnResetAll.addEventListener('click', () => {
            if(confirm('Tem certeza que deseja restaurar todas as configurações padrão?')) {
                resetAllSettings();
            }
        });
    }
}

// --- FUNÇÕES DE APLICAÇÃO ---

function applyTheme(isDark) {
    const body = document.body;
    if (isDark) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
    updateSwitch('darkModeSwitch', isDark);
}

function applyMotionReduction(reduce) {
    const body = document.body;
    if (reduce) {
        body.classList.add('reduce-motion');
        localStorage.setItem('reduceMotion', 'true');
    } else {
        body.classList.remove('reduce-motion');
        localStorage.setItem('reduceMotion', 'false');
    }
    updateSwitch('motionSwitch', reduce);
}

function applyFontSize(size) {
    const html = document.documentElement;
    
    // Remove todas as classes de fonte antes de adicionar a nova
    html.classList.remove('font-sm', 'font-lg', 'font-xl');

    if (size === 'sm') {
        html.classList.add('font-sm');
    } else if (size === 'lg') {
        html.classList.add('font-lg');
    } else if (size === 'xl') {
        html.classList.add('font-xl');
    }
    // Se for 'md' ou qualquer outra coisa, não adiciona classe (fica padrão)

    localStorage.setItem('fontSize', size);
}

function resetAllSettings() {
    // Limpa todas as preferências salvas
    localStorage.removeItem('theme');
    localStorage.removeItem('reduceMotion');
    localStorage.removeItem('fontSize');

    // 1. Reseta Tema para Claro (Remove classe dark-mode)
    document.body.classList.remove('dark-mode');
    updateSwitch('darkModeSwitch', false);

    // 2. Reseta Movimento (Reativa animações)
    document.body.classList.remove('reduce-motion');
    updateSwitch('motionSwitch', false);

    // 3. Reseta Fonte para o padrão
    document.documentElement.classList.remove('font-sm', 'font-lg', 'font-xl');
    
    // Feedback visual (opcional)
    // alert("Configurações restauradas para o padrão.");
}

// Função auxiliar para atualizar o estado visual dos switches (caso existam na página)
function updateSwitch(elementId, isChecked) {
    const el = document.getElementById(elementId);
    if (el) {
        el.checked = isChecked;
    }
}

// Executa a inicialização imediatamente para evitar FOUC (Flash of Unstyled Content)
initializeSettings();