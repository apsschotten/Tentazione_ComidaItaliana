import React from 'react';

export default function Cadastro() {
    function handleSubmit() {
        alert('Cadastro realizado com sucesso!')
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input
                        name='nome'
                        type='text'
                        placeholder='Nome'
                        required />
                </label>
                <label>
                    Sobrenome:
                    <input
                        name='sobrenome'
                        type='text'
                        placeholder='Sobrenome'
                        required />
                </label>
                <label>
                    E-mail:
                    <input
                        name='email'
                        type='email'
                        placeholder='E-mail'
                        required />
                </label>
                <label>
                    Rua:
                    <input
                        name='rua'
                        type='text'
                        placeholder='Rua'
                        required />
                </label>
                <label>
                    Número:
                    <input
                        name='numero'
                        type='number'
                        placeholder='Número'
                        required />
                </label>
                <label>
                    Bairro:
                    <input
                        name='bairro'
                        type='text'
                        placeholder='Bairro'
                        required />
                </label>
                <label>
                    Cidade:
                    <input
                        name='cidade'
                        type='text'
                        placeholder='Cidade'
                        required />
                </label>
                <label>
                    Estado:
                    <input
                        name='estado'
                        type='text'
                        placeholder='Estado'
                        required />
                </label>
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    );
}