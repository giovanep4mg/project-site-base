/* eslint-disable jsx-a11y/anchor-is-valid  */
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header () {
    return(
        <header className={styles.header}>
            <Link to="/">
                <span>Salão do Nego</span>
            </Link>
            <nav>
                <Link to="/home">Página Principal</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/servicos">Serviços</Link>
                <Link to="/profile">Contatos</Link>
                <Link to="/about">Sobre</Link>
            </nav>
        </header>
    )
}
    
export default Header;