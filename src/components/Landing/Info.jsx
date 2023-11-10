import { Link } from 'react-router-dom';
import '../../styles/layout/Info.scss';

const Info = () => {
  return (
    <div className='info__container'>
      <h1 className='info__title'>AdaGyn</h1>
      <h2 className='info__subtitle'>Tu app de salud femenina de confianza</h2>
      <p className='info__text'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi
        saepe, ea modi facilis eveniet cupiditate autem porro. Praesentium quod
        quaerat quibusdam sapiente recusandae alias cumque, corrupti ea deserunt
        quis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        corporis qui modi obcaecati provident fugiat dolor, incidunt eius
        architecto? Minus sed perferendis voluptatem consequatur architecto.
        Dolore laudantium fugit nostrum alias! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Fuga quam odio debitis nam exercitationem
        aliquid quos cupiditate, dicta, dignissimos, eum eaque magnam? Assumenda
        velit aperiam ut. Molestiae quis dicta vitae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Tempora et veritatis minus laudantium
        officiis labore quae accusamus sapiente autem aperiam ducimus vel, velit
        ex aspernatur suscipit voluptas, quas facilis iste.
      </p>
      <Link to='/inicia-sesion' className='button--black'>
        Iniciar sesión
      </Link>
    </div>
  );
};

export default Info;
