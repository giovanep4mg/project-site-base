import styles from './navegacao.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navegacao(){
    return ( 
    <nav className={styles.nav}>
        <Link to='/' className="icon">
            <h1>Salão do Nego</h1>
        </Link>
        <ul>
            <CustomLink to='./servicos'>Serviços</CustomLink>
            <CustomLink to='/produtos'>Produtos</CustomLink>
            <CustomLink to='/profile'>Contato</CustomLink>
            <CustomLink to='/about'>Sobre</CustomLink>
        </ul>
    </nav>
    )
}

export default Navegacao;

// eslint-disable-next-line react/prop-types
function CustomLink({to, children, ...props } ) {
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({path: resolvePath.pathname, end: true})

    return(
        <li className={isActive ? 'active' : ''}>
            <Link to ={to} {...props}>
                {children}
            </Link>
        </li>
    )
}