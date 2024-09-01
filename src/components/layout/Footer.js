// O React Icons é um módulo do React que fornece diversos conjuntos de ícones para serem usados na interface.
// Neste caso, o conjunto usado foi o Font Awesome (fa), porém muitos outros conjuntos estão disponíveis no React Icons.
// Os ícones precisam ser importados.
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.redes_sociais}>
                {/* Os ícones são usados da mesma forma que os componentes. */}
                <li><FaFacebook />Facebook</li>
                <li><FaInstagram />Instagram</li>
                <li><FaLinkedin />Linkedin</li>
            </ul>
        </footer>
    );
}

export default Footer;