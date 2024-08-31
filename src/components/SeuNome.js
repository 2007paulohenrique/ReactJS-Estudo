// Componente que altera o state de nome.

function SeuNome({setNome}) {
    return (
        <>
            <p>Seu nome</p>
            <input type="text" onChange={(e) => setNome(e.target.value)}></input>
        </>
    );
}

export default SeuNome;