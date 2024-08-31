// Componente que usa o valor de state

function Saudacao({nome}) {
    function gerarSaudacao(nome) {
        return `Olá, ${nome}.`;
    }

    return <>{nome && (<p>{gerarSaudacao(nome)}</p>)}</>
}

export default Saudacao;