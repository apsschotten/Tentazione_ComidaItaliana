import { Link } from 'react-router-dom';
import React from 'react';

import Logo from '../Images/Logo.png';

export default function Header() {
    return (
        <header>
            <img src={Logo} className='Logo' />
            <nav>
                <Link to='/' className='headerAtalhos'>Home</Link>
                <Link to='/cardapio' className='headerAtalhos'>Cardápio</Link>
                <Link to='/login' className='headerAtalhos'>Login</Link>
                <Link to='/cadastro' className='headerAtalhos'>Cadastro</Link>
            </nav>
        </header>
    );
}
