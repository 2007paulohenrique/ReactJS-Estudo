// Renderização de listas.

// A função do componente recebe um array como props.
function OutraLista({itens, titulo}) {
    return (
        <>
            <h2>{titulo}:</h2>
            {/* Os itens do array são percorridos e tratados pelo map. */}
            {/* No React, é necessário colocar um id para cada item de uma lista, isso para evitar erros quando for identificar os itens. */}
            {/* O ideal seria que esse id único venha diretamente do back-end. */}
            {/* Pode ser combinada com renderização condicional, para que uma mensagem seja exibida ao usuário quando não houver elementos no array. */}
            {itens.length > 0 ? (
                itens.map((item, id) => (<p key={id}>{item}</p>))
            ) : (
                <p>Não há itens na lista.</p>
            )}
        </>
    );
}

export default OutraLista;