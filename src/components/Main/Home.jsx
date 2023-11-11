import { Link } from 'react-router-dom';
import '../../styles/layout/Home.scss';
import grafico from '../../assets/grafico.png';

const Home = () => {
  return (
    <div className='home__container'>
      <nav className='menu__container'>
        <ul className='menu__list'>
          <li>
            <Link className='menu__item' to='/appointments'>
              Agenda
            </Link>
          </li>
          <li>
            <Link className='menu__item' to='/analysis'>
              Analíticas
            </Link>
          </li>
          <li>
            <Link className='menu__item' to='/medication'>
              Medicación
            </Link>
          </li>
          <li>
            <Link className='menu__item' to='/recommendations'>
              Recomendaciones
            </Link>
          </li>
          <li>
            <Link className='menu__item' to='/cycle'>
              Ciclo
            </Link>
          </li>
        </ul>
      </nav>
      <section className='left__container'>
        <img className='home__image' src={grafico} alt='grafico' />
        <section className='analysis__container'>
          <h2 className='analysis__title'>Últimos análisis (30 de Nov)</h2>
          <ul className='analysis__list'>
            <li className='analysis__item'>
              TSH <span>2.5</span>
              <span className='happyface'>&#9786;</span>
            </li>
            <li className='analysis__item'>
              Insulina <span>28</span>
              <span className='happyface'>&#9786;</span>
            </li>
            <li className='analysis__item'>
              T4 Libre <span>6</span>
              <span className='sadface'>&#9785;</span>
            </li>
            <li className='analysis__item'>
              Glucosa <span>68</span>
              <span className='happyface'>&#9786;</span>
            </li>
            <li className='analysis__item'>
              Calcio <span>90</span>
              <span className='sadface'>&#9785;</span>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Home;
