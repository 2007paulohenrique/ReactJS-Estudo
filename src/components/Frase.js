// Props são valores que podem ser passados como argumentos nas funções dos componentes para os deixar dinâmicos.
// Esses valores são passados como atributos na chamada do componente.
// As propriedades precisam estar contidas dentro de uma única props.

function Frase(props) {
    return (
        <div>
            <p>Olá, {props.nome}.</p>
        </div>
    )
}

export default Frase;