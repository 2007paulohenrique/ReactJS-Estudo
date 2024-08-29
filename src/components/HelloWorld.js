// Import de outro componente
import Frase from './Frase';

// Na pasta components, são armazenados todos os componentes da aplicação.
// Componentes são reutilizáveis.
// Todos eles serão exportados, e importados no App.js, o componente central da aplicação, 
// porém eles podem ser importados em qualquer lugar da aplicação.

// Geralmente a função componente possui o mesmo nome do arquivo. 
// Palavras com a inicial Maiúscula.
function HelloWorld() {
    // em JSX, o return precisa estar entre parênteses.
    return (
        <div>
            <p>Hello, World!</p>

            {/* As propriedades da props são passadas como atributos do componente em sua chamada. */}
            <Frase nome="Paulo" />
            <Frase nome="Maria" />
        </div>
    );
}

// Export do componente.
export default HelloWorld;