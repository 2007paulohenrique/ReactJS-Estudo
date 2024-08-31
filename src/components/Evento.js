// Import do componente filho com um método na props.
import Button from './Button';

function Evento() {
    // Métodos que serão passados como props ao usar o Button.
    function priEvento() {
        console.log("Primeiro evento")
    }

    function segEvento() {
        console.log("Segundo evento")
    }

    return (
        <>
            <h2>Evento</h2>
            {/* Uso da props evento do Button para ativar um evento do componente pai (Evento). */}
            <Button evento={priEvento} texto="Evento 1"/>    
            <Button evento={segEvento} texto="Evento 2"/>    
        </>
    );
}

export default Evento;