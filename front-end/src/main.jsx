import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './globals.css';

import App from './App';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Reservas from './Pages/Reservas';
import Minhas_Reservas from './Pages/Minhas_Reservas';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path='/'>
          <Route element={<Home />} index />
          <Route element={<Menu />} path='menu' />
          <Route element={<Login />} path='login' />
          <Route element={<Cadastro />} path='cadastro' />
          <Route element={<Reservas />} path='reservas' />
          <Route element={<Minhas_Reservas />} path='minhasreservas' />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
