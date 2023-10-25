import '../../styles/layout/LogIn.scss';

const LogIn = () => {
  return (
    <div className='login__container'>
      <h2 className='login__title'>Inicia Sesión</h2>
      <form className='login__form'>
        <label className='login__labels'>Usuario</label>
        <input className='login__inputs' type='text' required />
        <label className='login__labels'>Contraseña</label>
        <input className='login__inputs' type='password' required />
        <input className='login__btn' type='submit' value='Entrar' />
      </form>
      <p>
        ¿Todavía no te has registrado? <a href='#'>Regístrate</a>
      </p>
    </div>
  );
};

export default LogIn;
