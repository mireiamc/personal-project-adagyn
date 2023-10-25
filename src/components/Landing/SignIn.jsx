import '../../styles/layout/SignIn.scss';

const SignIn = () => {
  return (
    <div className='signin__container'>
      <h2 className='signin__title'>Nuevo Usuario</h2>
      <form className='signin__form'>
        <label className='signin__label'>Nombre y Apellido:</label>
        <input className='signin__input' type='text' required />
        <label className='signin__label'>Nombre de Usuario:</label>
        <input className='signin__input' type='text' required />
        <label className='signin__label'>Contraseña:</label>
        <input className='signin__input' type='password' required />
        <h3 className='signin__subtitle'>Cuestionario de Salud</h3>
        <label className='signin__label'>
          ¿Tienes alguna de estas condiciones?
        </label>
        <select className='signin__input'>
          <option>Hipo/Hipertiroidismo</option>
          <option>Diabetes Tipo 2</option>
          <option>SOP</option>
          <option>Embarazo</option>
          <option>Menopausia</option>
          <option>Resistencia a la Insulina</option>
          <option>Endometriosis</option>
          <option>Cáncer de Mama/Ovario</option>
          <option>
            Trastornos del Ciclo Menstrual (Amenorrea o Menorragia)
          </option>
        </select>
        <label className='signin__label'>¿Tomas alguna medicación?</label>
        <select className='signin__input'>
          <option value='si'>Sí</option>
          <option value='no'>No</option>
        </select>
        <input className='signin__input' type='text' />
        <label className='signin__label'>
          ¿Tomas alguna suplementación importante para tu salud?
        </label>
        <select className='signin__input'>
          <option value='si'>Sí</option>
          <option value='no'>No</option>
        </select>
        <input className='signin__input' type='text' />
        <label className='signin__label'>
          ¿Quieres llevar un control de tu peso?
        </label>
        <select className='signin__input'>
          <option value='si'>Sí</option>
          <option value='no'>No</option>
        </select>
        <input className='signin__btn' type='submit' />
      </form>
    </div>
  );
};

export default SignIn;
