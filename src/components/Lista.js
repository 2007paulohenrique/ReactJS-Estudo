import Item from './Item';

// Fragment é um recurso que permite que a função de um componente retorne mais de um elemento, sem a necessidade de estarem dentro de um elemento pai.
// É útil quando não há a necessidade de criar um elemento pai para reunir todos os elementos com real importância do componente.
// Simplifica o DOM, pois não será criado um elemento extra sem importância.

function Lista() {
    return (
        // Um fragment é formado por tags vazias.
        <>
            <h1>Lista:</h1>
            <ul>
                {/* Para passar números com valores dos atributos, é necessário colocá-lo entre "{}". */}
                <Item marca="Fiat" ano_lancamento={1999}/>
                <Item marca="Ferrari" ano_lancamento={2014}/>
            </ul>
        </>
    );
}

export default Lista;