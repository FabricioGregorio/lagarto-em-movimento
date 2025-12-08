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