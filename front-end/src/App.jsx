import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

import { Link } from 'react-router-dom';
import MinhasReservasButton from './Gen_Images/minhasReservasButton.png';

export default function App() {
  return (
    <div className='container'>
      <Header />

      <main>
        <Outlet />
      </main>

      <Link to='/minhasreservas'>
        <img src={MinhasReservasButton} className='minhasReservasButton' />
      </Link>

      <Footer />
    </div>
  );
}
