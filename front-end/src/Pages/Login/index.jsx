import React from 'react';

export default function Login() {
    function handleSubmit() {
        alert('Login realizado com sucesso!')
    }

    return (
        <div>
            <h1 className='pageTitle'>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    E-mail:
                    <input
                        name='email'
                        type='email'
                        placeholder='E-mail'
                        required />
                </label>
                <label>
                    Senha:
                    <input
                        name='senha'
                        type='password'
                        placeholder='Senha'
                        required />
                </label>
                <input type="submit" value="Acessar" />
            </form>
        </div>
    );
}
