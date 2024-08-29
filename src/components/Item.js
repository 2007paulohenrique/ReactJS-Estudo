// prop-types é um módulo que permite criar validação de tipo de dado do valor que será passado como atributo na chamada dos componentes.
// As validações são a nível de programação, assim, nenhum erro é exibido na interface do usuário, mas é exibido no console do navegador.
// Funções de definição de valores padrões, no momento do trabalho deste repositório, existem, porém serão removidas em atualizações futuras.
// Para definir valor padrão a atributo, faça isso com os recursos próprios do JavaScript.

import PropTypes from 'prop-types';

function Item({marca, ano_lancamento=0}) {
    return (
        <li>{marca} - {ano_lancamento}</li>
    );
}

// Específicações dos tipos dos valores dos atributos. 
Item.propTypes = {
    // isRequires indica que um valor tem que ser passado a um atributo.
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

export default Item;