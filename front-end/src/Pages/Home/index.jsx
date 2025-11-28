import { Link } from 'react-router-dom';
import React from 'react';

import Banner from '../Pages_Images/Banner.png';

export default function Home() {
    return (
        <div>
            <img src={Banner} className='homeBanner' />
            <div className='reservasContainer'>
                <Link to='/reservas'>
                    <button className='reservasButton'>Faça já sua reserva!</button>
                </Link>
            </div>
        </div>
    );
}
