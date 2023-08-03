import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info">
        <div>
        <h3 className="about-project__subtitle">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="about-project__description">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        </div>
        <div>
        <h3 className="about-project__subtitle">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__description">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
        </div>
      </div>
      <div className="about-project__deadline">
        <p className="about-project__week">1 неделя</p>
        <p className="about-project__weeks">4 недели</p>
        <p className="about-project__caption">Back-end</p>
        <p className="about-project__caption">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
