import '../styles/App.scss';
import LogIn from './Landing/LogIn';
import SignIn from './Landing/SignIn';

// Fichero src/components/App.jsx
// import {useState} from 'react';

const App = () => {
  // const [email, setEmail] = useState('');

  return (
    <div className='page__container'>
      <header>
        <img src='' alt='' />
      </header>
      <main className='container__main'>
        <LogIn />
        <SignIn />
      </main>
    </div>
  );
};

export default App;