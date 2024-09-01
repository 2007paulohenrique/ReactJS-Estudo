# Estudo do ReactJS

Este repositório contém o estudo dos recursos e do funcionamento da biblioteca React em JavaScript. O material aqui presente foi baseado nas aulas 01 a 16 do curso de ReactJS ministrado pelo professor [Matheus Battisti](https://www.youtube.com/@MatheusBattisti), disponível na plataforma YouTube.

## Conteúdo das aulas

Neste curso, foram explorados os principais recursos da biblioteca React, divididos em dezesseis aulas. A seguir, estão os conteúdos desenvolvidos em cada aula:

1. **Introdução ao React** - Definição, aplicações e ferramentas do React.
2. **Instalação do React** - Instalação, requisitos para uso e inicialização da aplicação React, além da estruturação de diretórios e arquivos.
3. **JSX** - Definição e exploração da extensão de sintaxe para JavaScript, JSX (JavaScript XML).
4. **Componentes** - Função e criação dos componentes no React.
5. **Props** - Definição e utilização de props.
6. **Estilização com CSS** - Estilização a nível global e a nível de componentes.
7. **Fragments** - Definição e sintaze dos React Fragments.
8. **Validação de props** - Validação dos valores de props usando propTypes.
9. **Eventos** - Aplicação de eventos de React.
10. **Manipulação de estado** - Alteração do estado de um componente usando o hook useState do React.
11. **Métodos nas props** - Passagem de um método como props e sua utilidade.
12. **Renderização condicional** - Importância e sintaxe de uma renderização condicional.
13. **Renderização de listas** - Renderização de listas usando array e a função map.
14. **State Lift** - Explicação e utilidade da técnica State Lift.
15. **React Router** - Aplicação dos recursos do pacote React Router para definição das rotas da aplicação.
16. **React icons** - Aplicação dos ícones disponíveis no pacote React Icons.

## Conceitos básicos

Para uma melhor compreensão do React e seu contexto de aplicação, alguns conceitos básicos estão brevemente explicados abaixo:

- **ReactJS** - Biblioteca JavaScript para construir interfaces de usuário (UI), comumente usada para construir SPAs (Single Page Applications).
- **Create React App** - Ferramenta de linha de comando que cria um novo projeto React com uma configuração inicial pronta para uso.
- **SPA (Single Page Application)** - Aplicação web que carrega uma única página HTML e atualiza o conteúdo dinamicamente sem recarregar a página inteira.
- **Componentes** - Blocos de construção reutilizáveis em React que definem uma parte da interface do usuário.
- **Propriedades (Props)** - Parâmetros passados para componentes, semelhantes a argumentos de função.
- **Estado (State)** - Dados internos de um componente que podem mudar ao longo do tempo.
- **Rotas (React Router)** - Sistema de navegação que permite a criação de rotas dinâmicas em uma aplicação React.

## Tecnologias Utilizadas

- **HTML, CSS e JavaScript**: Tecnologias fundamentais para a criação de páginas web.
- **React, React Router e React Icons**: Bibliotecas específicas do ecossistema React que adicionam funcionalidades e facilidades ao desenvolvimento de aplicações React.
- **Node.js**: Ambiente de execução JavaScript do lado do servidor, permitindo a execução de código JavaScript fora do navegador.
- **npm (Node Package Manager)**: Gerenciador de pacotes padrão para Node.js, utilizado para instalar, gerenciar e manter bibliotecas e ferramentas JavaScript.

## Instalação

1. Clone o repositório do projeto executando o comando `git clone https://github.com/2007paulohenrique/ReactJS-Estudo.git` em seu terminal.
2. Navegue até o diretório do projeto executando `cd caminho_para_o_diretorio` no terminal.
3. Instale o [Node.js](https://nodejs.org/) caso ainda não o tenha instalado, dessa forma. O npm será instalado automaticamente junto com o Node.js.
4. Confirme a instalação do Node.js e do npm executando `node -v` e `npm -v`. Caso apareça suas versões, a instalação foi concluida com sucesso. 
5. Instale as dependências do projeto com o comando `npm install`.
6. Inicie o projeto com `npm start` e o acesse em um navegador web na URL `http://localhost:3000`. 

## Como usar

Conforme mencionado anteriormente, este projeto tem como objetivo exclusivamente o estudo do ReactJS. Dessa forma, a interface não foi completamente desenvolvida, contendo apenas os elementos essenciais para a demonstração prática dos recursos da biblioteca.

Para um aprendizado mais aprofundado de um recurso complexo como o React, recomenda-se a realização de cursos ministrados por profissionais experientes na área. Todo o conteúdo deste repositório foi baseado nas aulas do professor Matheus Battisti, disponíveis em seu canal no YouTube, na playlist "Curso de React". Esta playlist conta, atualmente, com sessenta vídeos sobre a biblioteca, incluindo dezesseis aulas teóricas e mais de vinte vídeos dedicados ao desenvolvimento de uma aplicação em React.

Para começar a estudar React de forma eficiente, recomenda-se iniciar pela [primeira aula curso](https://www.youtube.com/watch?v=FXqX7oof0I4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO).

## Estrutura do repositório

Ao executar `npx create-react-app nome_do_app` no terminal, uma estrutura de diretórios é gerada automaticamente para o desenvolvimento de uma aplicação React. Além das estruturas criadas automaticamente, algumas outras foram adicionadas para este projeto. A estrutura completa de diretórios e arquivos é detalhada a seguir:

### Raiz do projeto:
    
- **/node_modules** - Contém todas as dependências do projeto necessárias para utilizar o React e outras bibliotecas e pacotes.
- **/public** - Diretório contendo os arquivos estáticos da aplicação, incluindo o arquivo HTML principal.
- **/src** - Diretório onde estão localizados os componentes React, incluindo o componente App e os arquivos de estilo CSS.
- `.gitignore` - Arquivo que especifica quais diretórios e arquivos devem ser ignorados pelo sistema de controle de versão Git.
- `package.json` e `package-lock.json` - Arquivos que listam as dependências do projeto e garantem a instalação consistente dessas dependências através do npm.
- `README.md` - Arquivo que contém a descrição do projeto e instruções de uso.

### /public:

- `index.html` - Documento HTML principal, que fornece a estrutura inicial e os contêineres onde o React irá injetar e renderizar os componentes dinâmicos. 
- `manifest.json` - Arquivo de configuração que fornece ao navegador informações sobre a aplicação web.

### /src:

- **/components** - Componentes reutilizáveis da aplicação.
- `App.js` - Componente principal da aplicação React, atuando como o ponto de entrada para os componentes da interface do usuário. 
- `index.js` - Arquivo principal que inicializa a aplicação React, fazendo a montagem do componente App na DOM, em uma div com o id root, presente no index.html.
- `index.css` - Folha de estilos global para a aplicação.
- `reportWebVitals.js` - Arquivo responsável por coletar e reportar métricas de desempenho da aplicação usando as métricas Web Vitals.

## Branches

Este repositório está organizado em duas branches principais, cada uma com um propósito específico para facilitar o estudo e desenvolvimento dos conceitos abordados no curso de ReactJS mencionado anteriormente.

### Branch main

Branch principal do repositório e serve como base para o desenvolvimento dos conteúdos apresentados nas aulas iniciais do curso, especificamente da aula 01 à aula 14. Nesta branch, estão implementados os fundamentos do React, incluindo a criação de componentes, gerenciamento de estado e propriedades, manipulação de eventos, e outras funcionalidades essenciais para a construção de aplicações React básicas.

### Branch rotas

Esta branch foi criada para focar no estudo de aspectos mais avançados do React, particularmente no uso do React Router e do React Icons, que são apresentados nas aulas 15 e 16 do curso. Aqui, há exemplos e implementações que ilustram como configurar e gerenciar múltiplas rotas dentro de uma aplicação React, permitindo a navegação entre diferentes páginas ou componentes sem a necessidade de recarregar a página. Esta branch também demonstra o uso do React Icons para incorporar ícones de forma fácil e consistente. Adicionalmente, foi criado um diretório chamado **/pages** dentro de **/src**, destinado a armazenar os componentes de páginas da aplicação.

## Contato

Caso tenha dúvidas, entre em contato:

- Nome: Paulo Henrique Barbosa do Prado Pereira
- E-mail: pereirapaulo436@gmail.com
- LinkedIn: [Paulo Barbosa](https://www.linkedin.com/in/paulo-barbosa-61a860303/)
- GitHub: [2007paulohenrique](https://github.com/2007paulohenrique)