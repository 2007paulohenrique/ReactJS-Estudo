// Para passar vários valores como props, é recomendado sua desestruturação, isso para que não seja necessário a escrita de "props." 
// antes de acessar uma de suas propriedade, isso torna o código mais limpo e legível.

function Apresentacao({nome, idade, profissao}) {
    return (
        <div>
            <p>Olá, {nome}. Você tem {idade} anos e é {profissao}.</p>
        </div>
    );
}

export default Apresentacao;