import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <ul>
                {/* O componente Link com o atributo to é usado para fazer o roteamento/rota. */}
                {/* Link para uma URL da aplicação, que é definida no componente Route. */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/empresa">Empresa</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;