import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import styles from './Login.module.css';
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro(null);

        try {
            const response = await fetch('/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha }),
            });

            if (!response.ok) {
                const erroData = await response.json();
                throw new erro(erroData.message || 'O login falhou.');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            console.log('Login realizado com sucesso!', data);
        } catch (err) {
            setErro(err.message);
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.login}>
                <form onSubmit={handleSubmit}>
                    {erro && <p style={{ color: 'red' }}>{erro}</p>}
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
