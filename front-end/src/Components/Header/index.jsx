import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link to='/'>Página Inicial</Link>
            </nav>
        </header>
    )
}

export default Header
