// O arquivo index.js em uma aplicação React é o ponto de entrada principal do código JavaScript. 
// Ele inicializa a aplicação e injeta o componente raiz no DOM. 

// Importação da biblioteca principal do React, necessária para escrever componentes usando JSX.
import React from 'react';

// Importação da biblioteca ReactDOM, que é usada para renderizar a aplicação React no DOM do navegador.
import ReactDOM from 'react-dom/client';

// Importação do arquivo CSS para aplicar estilos globais à aplicação.
import './index.css';

// Importação do componente raiz App, que contém a estrutura principal da aplicação. 
// É nele onde o resto da aplicação é construído, incluindo outros componentes e lógica.
import App from './App';

// Importação da função relacionada ao monitoramento de métricas de desempenho da aplicação React.
import reportWebVitals from './reportWebVitals';

// Criação da raiz onde a aplicação React será montada.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
