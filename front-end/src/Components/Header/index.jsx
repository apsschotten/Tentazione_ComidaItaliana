import { Link } from 'react-router-dom';
import React from 'react';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/login'>Login</Link>
                <Link to='/cadastro'>Cadastro</Link>
            </nav>
        </header>
    );
}
