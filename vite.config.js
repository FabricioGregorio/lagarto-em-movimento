import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  appType: 'mpa', // Garante que o Vite funcione como Multi-Page App e não SPA
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        locais: resolve(__dirname, 'src/pages/locais.html'),
        sobre: resolve(__dirname, 'src/pages/sobre.html'),
        equipe: resolve(__dirname, 'src/pages/equipe.html'),
        configuracoes: resolve(__dirname, 'src/pages/configuracoes.html'),
        // Sub-páginas de locais
        academias: resolve(__dirname, 'src/pages/locais/academias-da-cidade.html'),
        avenida: resolve(__dirname, 'src/pages/locais/avenida-contorno.html'),
        balneario: resolve(__dirname, 'src/pages/locais/balneario-bica.html'),
        barragem: resolve(__dirname, 'src/pages/locais/barragem-dionisio-machado.html'),
        estadio: resolve(__dirname, 'src/pages/locais/estadio-barretao.html'),
        ginasio: resolve(__dirname, 'src/pages/locais/ginasio-o-ribeirao.html'),
        piedade: resolve(__dirname, 'src/pages/locais/praca-da-piedade.html'),
        filomeno: resolve(__dirname, 'src/pages/locais/praca-filomeno-hora.html'),
        tanque: resolve(__dirname, 'src/pages/locais/tanque-grande.html'),
      },
    },
  },
});
