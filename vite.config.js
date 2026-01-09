import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // No GitHub Pages o site fica em /<repo>/, então precisamos ajustar o base.
  // Em outros ambientes (dev local, Vercel etc.) mantemos '/'.
  base: process.env.GITHUB_ACTIONS === 'true'
    ? (() => {
        const repoName = (process.env.GITHUB_REPOSITORY || '').split('/')[1];
        return repoName ? `/${repoName}/` : '/';
      })()
    : '/',
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
        piedade: resolve(__dirname, 'src/pages/locais/praca-da-piedade.html'),
        filomeno: resolve(__dirname, 'src/pages/locais/praca-filomeno-hora.html'),

        // Novas páginas de locais
        santaTeresinha: resolve(__dirname, 'src/pages/locais/praca-santa-teresinha.html'),
        nossaSenhoraPiedade: resolve(__dirname, 'src/pages/locais/praca-nossa-senhora-da-piedade.html'),
        joseDomingoVieira: resolve(__dirname, 'src/pages/locais/praca-jose-domingo-vieira.html'),
        gomes: resolve(__dirname, 'src/pages/locais/praca-do-gomes.html'),
        ladeiraRosario: resolve(__dirname, 'src/pages/locais/praca-da-ladeira-do-rosario.html'),
        rosario: resolve(__dirname, 'src/pages/locais/praca-do-rosario.html'),
        parqueDasPalmeiras: resolve(__dirname, 'src/pages/locais/parque-das-palmeiras.html'),
        barragemDionisio: resolve(__dirname, 'src/pages/locais/barragem-dionisio.html'),
      },
    },
  },
});
