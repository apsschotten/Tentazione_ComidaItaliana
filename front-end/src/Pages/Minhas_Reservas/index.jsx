import React from 'react';

export default function Minhas_Reservas() {
    function handleSubmit() {
        alert('Reserva confirmada!')
    }

    return (
        <div>
            <h1 className='pageTitle'>Minhas Reservas</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Número da Mesa:
                    <input
                        name='numeroMesa'
                        type='number'
                        placeholder='Número da Mesa'
                        required />
                </label>
                <label>
                    Número da Reserva:
                    <input
                        name='numeroReserva'
                        type='number'
                        placeholder='Número da Reserva'
                        required />
                </label>
                <label>
                    Data da Reserva:
                    <input
                        name='data'
                        type='date'
                        required />
                </label>
                <input type="submit" value="Consultar" />
            </form>
        </div>
    );
}
