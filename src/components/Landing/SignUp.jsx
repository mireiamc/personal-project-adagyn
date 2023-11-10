import { Link } from 'react-router-dom';
import '../../styles/layout/SignUp.scss';

const SignUp = () => {
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
        <div>
          <label className='signin__label'>
            ¿Tienes alguna de estas condiciones?
          </label>
          <div className='container__checkbox'>
            <label>
              <input
                type='checkbox'
                className='signin__input'
                value='Hipo/Hipertiroidismo'
              />
              Hipo/Hipertiroidismo
            </label>
            <label>
              <input
                type='checkbox'
                className='signin__input'
                value='Diabetes Tipo 2'
              />
              Diabetes Tipo 2
            </label>
            <label>
              <input type='checkbox' className='signin__input' value='SOP' />
              SOP
            </label>
            <label>
              <input
                type='checkbox'
                className='signin__input'
                value='Embarazo'
              />
              Embarazo
            </label>
            <label>
              <input
                type='checkbox'
                className='signin__input'
                value='Menopausia'
              />
              Menopausia
            </label>
            <label>
              <input
                type='checkbox'
                className='signin__input'
                value='Resistencia a la Insulina'
              />
              Resistencia a la Insulina
            </label>
            <label>
              <input
                type='checkbox'
                className='signin__input'
                value='Endometriosis'
              />
              Endometriosis
            </label>
            <label>
              <input
                type='checkbox'
                className='signin__input'
                value='Cáncer de Mama/Ovario'
              />
              Cáncer de Mama/Ovario
            </label>
            <label>
              <input
                type='checkbox'
                className='signin__input'
                value='Trastornos del Ciclo Menstrual (Amenorrea o Menorragia)'
              />
              Trastornos del Ciclo Menstrual (Amenorrea o Menorragia)
            </label>
          </div>
        </div>
        <label className='signin__label'>¿Tomas alguna medicación?</label>
        <select className='signin__input'>
          <option value='si'>Sí</option>
          <option value='no'>No</option>
        </select>
        <label htmlFor=''>Escribe el nombre de tu medicación:</label>
        <input className='signin__input' type='text' />
        <label className='signin__label'>
          ¿Tomas alguna suplementación importante para tu salud?
        </label>
        <select className='signin__input'>
          <option value='si'>Sí</option>
          <option value='no'>No</option>
        </select>
        <label htmlFor=''>Escribe el nombre de tu suplementación:</label>
        <input className='signin__input' type='text' />
        <label className='signin__label'>
          ¿Quieres llevar un control de tu peso?
        </label>
        <select className='signin__input'>
          <option value='si'>Sí</option>
          <option value='no'>No</option>
        </select>
        <Link to='/signupdone' className='button--black signup__btn'>
          Registrarse
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
