import React from 'react';

export default function Reservas() {
    function handleSubmit() {
        alert('Reserva encontrada!')
    }

    return (
        <div>
            <h1>Reservas</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Data de Reserva:
                    <input
                        name='data'
                        type='date'
                        required />
                </label>
                <label>
                    Horário:
                    <input
                        name='horario'
                        type='time'
                        required />
                </label>
                <label>
                    Nome do Cliente:
                    <input
                        name='nome'
                        type='text'
                        placeholder='Nome Completo'
                        required />
                </label>
                <label>
                    Contato:
                    <input
                        name='contato'
                        type='text'
                        placeholder='Contato'
                        required />
                </label>
                <label>
                    Quantidade de Pessoas:
                    <input
                        name='numero'
                        type='number'
                        placeholder='Quantidade de Pessoas'
                        required />
                </label>
                <input type="submit" value="Reservar" />
            </form>
        </div>
    );
}
