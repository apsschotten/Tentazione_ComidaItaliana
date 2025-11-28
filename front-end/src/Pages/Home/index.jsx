import { Link } from 'react-router-dom';
import React from 'react';

import Banner from '../Pages_Images/Banner.png';
import ReservasButton from '../Pages_Images/reservasButton.png';
import MinhasReservasButton from '../Pages_Images/minhasReservasButton.png';

export default function Home() {
    return (
        <div>
            <img src={Banner} className='homeBanner' />
            <div className='buttonsContainer'>
                <Link to='/minhasreservas'>
                    <img src={MinhasReservasButton} className='homeButton' />
                </Link>
                <Link to='/reservas'>
                    <img src={ReservasButton} className='homeButton' />
                </Link>
            </div>
        </div>
    );
}
