// React Router é um pacote para mudanças de URLs da aplicação.
// Rotas/views são as páginas da aplicação, onde um componente representa uma página.
// Dessa forma, é possível acessar outras views sem o reload da página. Comportamento de uma SPA.
// Uma parte do layout da aplicação é trocada, mudando de uma view para outra.
// Mudança na estruturação do componente App. 


import styles from './App.css';
// Import dos componentes do React Router.
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    // O componente Router adapta toda a aplicação para o React Router.
    // Definição das view/rotas e componentes padrão (se repetem nas views).
    <Router>
      {/* Componente estático, permanece igual em todas as views. */}
      <NavBar />

      {/* O componente Switch é usado para definir todas as rotas da aplicação */}
      <Routes>
        {/* O componente Route é usado para declarar qual componente de página (element) deverá ser renderizado ao acessar uma URL (path). */}
        <Route exact path="/" element={<Home />} />
        <Route path="/Empresa" element={<Empresa />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>

      {/* Componente estático. */}
      <Footer />
    </Router>
  );
}

export default App;