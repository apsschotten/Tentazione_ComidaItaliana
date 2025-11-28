import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className='container'>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
