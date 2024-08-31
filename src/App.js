// O arquivo App.js em uma aplicação React é o componente principal/raiz da aplicação. 
// É a partir deste componente que a estrutura da aplicação é construída, 
// incluindo a inclusão de outros componentes, definição de rotas, e gerenciamento de estado.
// Todo o código será trabalhado dentro das funções. Fora delas, terá somente os imports e exports.

// JSX (JavaScript XML) é uma extensão de sintaxe para JavaScript usada em aplicações React. 
// Ele permite que o HTML seja desenvolvido diretamente dentro do código JavaScript.
// JSX é transformado em chamadas de funções JavaScript que produzem elementos React.

import './App.css';

// Import dos componentes que, por convenção, possuem o mesmo nome de sua função
import HelloWorld from './components/HelloWorld';
import Apresentacao from './components/Apresentacao';
import Lista from './components/Lista';
import Form from './components/Form';
import Evento from "./components/Evento";
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import { useState } from 'react';

// Componente principal da aplicação.
function App() {
  
  const nome1 = "mateus";

  const lista = ["Matemática", "Português", "Química"];
  const lista2 = [];

  // State lift é o ato de subir o state a um componente pai comum, para que esse state seja acessível a mais de um componente.
  // Um componente filho é responsável por alterar o state (setNome) e outros componentes podem usar seu valor por meio da props.
  const [nome, setNome] = useState();

  function soma(a, b) {
    return a + b;
  }

  // As funções com JSX não podem retornar vários elementos, logo, todos os elementos precisam estar dentro de um único elemento pai (wrapped)
  return (
    // No React, é preferível utilizar className, em vez de class, para referenciar uma classe em um elemento HTML.
    <div className="App">
      {/* O JSX permite interpolar variáveis, usando {variável}, */}
      {/* além de permitir operações, chamadas de funções, etc... dentro das tags, em seus atributos, ou em qualquer outro lugar do HTML. */}
      <p> Olá {nome1}</p>
      <p> Soma: {soma(2, 4)}</p>

      {/* Para fazer uso dos componentes, basta abrir uma tag com o seu nome */}
      <HelloWorld />

      <Apresentacao nome="João" idade="18" profissao="Médico"/>

      <Lista />

      <Form />

      <Evento />

      <Condicional />

      {/* Um array deve ser passado como atributo do componente OutraLista. */}
      <OutraLista itens={lista} titulo="Matérias" />
      <OutraLista itens={lista2} titulo="Escolas" />
      
      {/* Componente que altera o state de nome */}
      <SeuNome setNome={setNome}></SeuNome>

      {/* Componente que usa o state de nome. */}
      <Saudacao nome={nome}></Saudacao>
    </div>
  );
}

export default App;