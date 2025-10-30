import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import styles from './Login.module.css';
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha }),
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <Header />
            <div className={styles.login}>
                <form onSubmit={handleSubmit}>
                    <input
                        type='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='senha'
                        placeholder='Senha'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <button type="submit">Fazer Login</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login
