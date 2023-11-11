import { Route, Routes, Link } from 'react-router-dom';
import '../styles/App.scss';
// import LogIn from './Landing/LogIn';
// import SignUp from './Landing/SignUp';
import Info from './Landing/Info';
import logo from '../assets/logo.png';
import SignUp from './Landing/SignUp';
import LogIn from './Landing/LogIn';
import SignUpDone from './Landing/SignUpDone';
import Home from './Main/Home';
import Appointments from './Main/Appointments';
import Analysis from './Main/Analysis';
import Medication from './Main/Medication';
import Recommendations from './Main/Recommendations';
import Cycle from './Main/Cycle';

// Fichero src/components/App.jsx
// import {useState} from 'react';

const App = () => {
  // const [email, setEmail] = useState('');

  return (
    <div className='page__container'>
      <header className='header'>
        <Link to='/'>
          <img className='logo' src={logo} alt='Logo' />
        </Link>
        <div className='buttons__container'>
          <Link to='/inicia-sesion' className='button--black'>
            Iniciar sesión
          </Link>
          <Link to='/registrate' className='button--pink'>
            Regístrate
          </Link>
        </div>
      </header>
      <main className='container__main'>
        <Routes>
          <Route path='/' element={<Info />} />
          <Route path='/registrate' element={<SignUp />} />
          <Route path='/inicia-sesion' element={<LogIn />} />
          <Route path='/signupdone' element={<SignUpDone />} />
          <Route path='/home' element={<Home />} />
          <Route path='/appointments' element={<Appointments />} />
          <Route path='/analysis' element={<Analysis />} />
          <Route path='/medication' element={<Medication />} />
          <Route path='/recommendations' element={<Recommendations />} />
          <Route path='/cycle' element={<Cycle />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
