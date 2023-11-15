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
      <section className='big__container'>
        <section className='left__container'>
          <div>
            <h2 className='home__title'>Mis hormonas</h2>
            <img className='home__image' src={grafico} alt='grafico' />
          </div>
          <section className='analysis__container'>
            <div>
              <h2 className='analysis__title'>Últimos análisis</h2>
              <h3 className='analysis__title--date'>30 de Noviembre</h3>
            </div>
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

        <section className='right__container'>
          <div>
            <h3 className='right__container--title'>Mis próximas citas</h3>
            <div className='date__container'>
              <p className='date__container--subtitle'>Dra. Mari Mer. Pérez</p>
              <p>Centro Womer</p>
              <p>Ginecología</p>
              <p className='date__container--subtitle'>
                Viernes, 24 de diciembre
              </p>
            </div>
          </div>
          <div>
            <h3 className='right__container--title'>Mi medicación</h3>
            <div className='medication__container'>
              <p className='medication__container--subtitle'>Eutirox 175mg</p>
              <p>1 comprimido al día</p>
              <p className='medication__container--subtitle'>
                Myoinositol Lambert's
              </p>
              <p>3 comprimidos al día</p>
            </div>
          </div>
          <div>
            <h3 className='right__container--title'>Mi ciclo</h3>
            <div className='cycle__content'>
              <p className='highlight__text'>
                Último ciclo: <br />{' '}
                <span className='plain__text'>20 de Noviembre</span>
              </p>
              <p className='highlight__text'>
                Duración del último ciclo: <br />
                <span className='plain__text'>6 días</span>
              </p>
              <p className='highlight__text'>
                Tipo de sangrado: <br />
                <span className='plain__text'>Normal</span>
              </p>
              <p className='highlight__text'>
                Media de duración del ciclo: <br />
                <span className='plain__text'>35 días</span>
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
