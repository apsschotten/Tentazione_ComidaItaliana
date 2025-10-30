import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './App';
import Login from './Pages/Login/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path='/' />
        <Route element={<Login />} path='/login' />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
