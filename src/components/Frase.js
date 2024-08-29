// Import do estilo do componente que, por convenção, é nomeado como styles.
import styles from './Frase.module.css'

// Props são valores que podem ser passados como argumentos nas funções dos componentes para os deixar dinâmicos.
// Esses valores são passados como atributos na chamada do componente.
// As propriedades precisam estar contidas dentro de uma única props.

function Frase(props) {
    return (
        // Para usar as classes do estilo do componente, basta usá-la como a props, tratando-a como um objeto com propriedades. 
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Olá, {props.nome}.</p>
        </div>
    );
}

export default Frase;