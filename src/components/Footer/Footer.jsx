import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__column">
        <div className="footer__caption">
          <p className="footer__text">Яндекс.Практикум</p>
          <p className="footer__text">Github</p>
        </div>
        <p className="footer__copyright">&copy; 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
