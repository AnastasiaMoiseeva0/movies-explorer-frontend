import "./Portfolio.css";
import portfolioNavigation from "../../images/navigate-arrow.svg";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav className="portfolio__navigation">
        <Link
          to="https://github.com/AnastasiaMoiseeva0/how-to-learn"
          className="portfolio__link"
        >
          <p className="portfolio__link-title">Статичный сайт</p>
          <img
            className="portfolio__link-img"
            src={portfolioNavigation}
            alt="Ссылка на сайт"
          ></img>
        </Link>
        <Link
          to="https://github.com/AnastasiaMoiseeva0/russian-travel"
          className="portfolio__link"
        >
          <p className="portfolio__link-title">Адаптивный сайт</p>
          <img
            className="portfolio__link-img"
            src={portfolioNavigation}
            alt="Ссылка на сайт"
          ></img>
        </Link>
        <Link
          to="https://github.com/AnastasiaMoiseeva0/react-mesto-api-full-gha"
          className="portfolio__link"
        >
          <p className="portfolio__link-title">Одностраничное приложение</p>
          <img
            className="portfolio__link-img"
            src={portfolioNavigation}
            alt="Ссылка на сайт"
          ></img>
        </Link>
      </nav>
    </section>
  );
}

export default Portfolio;
