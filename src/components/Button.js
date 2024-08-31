// Métodos podem ser passado como props, assim um componente filho pode ativar um método do seu componente pai.
// O método é acessado por meio de um evento.

function Button({evento, texto}) {
    // Para JSX de uma única linha, não é necessário colocar "()" no return.
    return <button onClick={evento}>{texto}</button>;
}

export default Button;