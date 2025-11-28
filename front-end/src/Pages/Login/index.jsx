import React from 'react';

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <label>
                E-mail: <input name="email" placeholder='E-mail' />
            </label>
            <label>
                Senha: <input name="senha" placeholder='Senha'/>
            </label>
            
        </div>
    );
}
