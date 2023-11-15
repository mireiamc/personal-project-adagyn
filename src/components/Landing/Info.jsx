import { Link } from 'react-router-dom';
import '../../styles/layout/Info.scss';

const Info = () => {
  return (
    <div className='info__container'>
      <h1 className='info__title'>AdaGyn</h1>
      <h2 className='info__subtitle'>Tu app de salud femenina de confianza</h2>
      <p className='info__text'>
        ¡Bienvenida a AdaGyn! La salud femenina es un pilar fundamental para la
        vida y con el estrés al que nos vemos sometidas a diario cada vez es más
        común desarrollar algún desajuste hormonal que puede derivar en alguna
        enfermedad. Además, las mujeres pasamos por diferentes fases a lo largo
        de nuestras vidas que afectan directamente a nuestras hormonas.
        <br /> <br />
        Muchas de las que hayáis llegado hasta aquí, habréis vivido lo que es
        acudir a una consulta médica ginecológica o endocrinológica y la
        complejidad de llevar un seguimiento ordenado de toda la información
        relacionada con esas visitas. AdaGyn llega para poder solucionar estos
        problemas y que puedas sentirte más segura y preparada a la hora de
        afrontar estas visitas médicas.
        <br />
        <br />
        Aquí podrás encontrar un espacio donde registrar tus análisis y ver el
        historial de todos tus registros para que, de un vistazo, puedas
        comparar valores clave. Además podrás seleccionar algunos parámetros y
        ver la evolución en una gráfica que te generará automáticamente el
        sistema. Tendrás además un espacio para hacer un seguimiento de tu
        medicación y suplementación: nombres de las pastillas, cantidad y
        regularidad. También tendrás un espacio donde guardar tus próximas citas
        médicas con todos los detalles para que no se te traspapele nada y una
        pequeña zona donde tener tus notas sobre las recomendaciones que te hace
        cada doctor.
        <br />
        <br />
        Sabemos que hay millones de apps móviles para llevar el control de tu
        ciclo menstrual muy completas, así que aquí simplemente encontrarás un
        pequeño apartado para poder tener un resumen de tu ciclo: duración del
        ciclo, fecha del último ciclo, duración media y tipo de sangrado.
        Englobando así los aspectos clave de tu ciclo para poder tenerlos de un
        vistazo.
      </p>
      <Link to='/inicia-sesion' className='button--black'>
        Iniciar sesión
      </Link>
    </div>
  );
};

export default Info;
