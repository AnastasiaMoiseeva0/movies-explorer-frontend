import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="about-project__title">Технологии</h2>
      <div className="techs__info">
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__span-accent">HTML</li>
          <li className="techs__span-accent">CSS</li>
          <li className="techs__span-accent">JS</li>
          <li className="techs__span-accent">React</li>
          <li className="techs__span-accent">Git</li>
          <li className="techs__span-accent">Express.js</li>
          <li className="techs__span-accent">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
