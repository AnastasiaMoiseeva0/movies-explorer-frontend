import "./AboutMe.css";
import newStudentPhoto from "../../images/student-photo.jpeg";

function AboutMe({innerRef}) {
  return (
    <section className="about-me" ref={innerRef}>
      <h2 className="about-project__title">Студент</h2>
      <div className="about-me__student-info">
        <img
          className="about-me__photo"
          src={newStudentPhoto}
          alt="Фотография студента"
        />
        <div>
          <p className="about-me__student-name">Анастасия</p>
          <p className="about-me__profession">Фронтенд-разработчик, 26 лет</p>
          <p className="about-me__description">
            Я родилась и живу в городе Санкт-Петербурге, закончила факультет
            судебных экспертиз в СПбГАСУ.
            Несколько лет проработала в строительсве и поняла что данная отрасль
            мне не по душе, поэтому решила попробовать себя в разработке. Сейчас, помимо учебы, активно работаю на
            pet-проектами, в ближайшем будущем хочу попробовать изучить
            дополнительные фреймворки и TS.
          </p>
          <a
            href="https://github.com/AnastasiaMoiseeva0"
            className="about-me__link"
            target="Github"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
