import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <img src='https://drive.google.com/file/d/1MqbnNxwiv28grxfP76rLXUkiJ4Ebab9l/view' alt='Logo' />
            <nav>
                <Link to='/'>Página Inicial</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </header>
    )
}

export default Header
