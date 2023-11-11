import { Link } from 'react-router-dom';
import '../../styles/layout/SignUpDone.scss';

const SignUpDone = () => {
  return (
    <div className='signupdone__container'>
      <h2 className='signupdone__title'>Te has registrado correctamente</h2>
      <p className='signupdone__text'>
        Tu zona en <span className='special__word'>AdaGyn Health</span> esta
        lista para que empieces a usarla. Hemos configurado por defecto algunas
        opciones por ti, si deseas cambiarlas sólo tienes que hacerlo desde la
        configuración.
      </p>
      <Link to='/home' className='button--black'>
        Entrar
      </Link>
    </div>
  );
};

export default SignUpDone;
