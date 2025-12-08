// Espera o HTML carregar completamente antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleciona os elementos
    const clickableImages = document.querySelectorAll('.img-clickable');
    const modalImage = document.getElementById('modalImage');
  
    // Verifica se os elementos existem para evitar erros
    if (clickableImages.length > 0 && modalImage) {
        
        // 2. Adiciona o evento de clique em CADA imagem
        clickableImages.forEach((img) => {
            img.addEventListener('click', function() {
                
                // Teste no Console (Aperte F12 para ver se aparece)
                console.log("Imagem clicada:", this.src);
    
                // 3. Pega o SRC da imagem clicada e joga na imagem do modal
                modalImage.src = this.src;
                modalImage.alt = this.alt;
            });
        });
        
    } else {
        console.log("Nenhuma imagem clicável ou modal encontrado.");
    }
});

// --- SISTEMA DE SCROLL REVEAL ---
const observerOptions = {
    root: null,        // Usa a viewport como referência
    threshold: 0.1,    // Dispara quando 10% do elemento estiver visível
    rootMargin: "0px"  
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Se o elemento entrou na tela...
        if (entry.isIntersecting) {
            // Adiciona a classe que faz ele aparecer
            entry.target.classList.add('visible');
            
            // (Opcional) Para de observar o elemento depois que ele apareceu uma vez
            // Se quiser que ele suma e apareça toda vez que rolar, remova a linha abaixo
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Manda o observador vigiar todos os elementos com a classe .fade-in-scroll
const elementsToAnimate = document.querySelectorAll('.fade-in-scroll');
elementsToAnimate.forEach(el => observer.observe(el));