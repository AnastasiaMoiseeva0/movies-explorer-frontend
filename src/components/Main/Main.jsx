import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import { useRef } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main({loggedIn}) {
  const aboutProjectRef = useRef(null);
  const techsRef = useRef(null);
  const aboutMeRef = useRef(null);

  return (
    <>
      <Header isAuthorization={loggedIn} />
      <main className="main">
        <Promo
          onProjectClick={() => {
            aboutProjectRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          onTechsClick={() => {
            techsRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          onAboutStudentClick={() => {
            aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <AboutProject innerRef={aboutProjectRef} />
        <Techs innerRef={techsRef} />
        <AboutMe innerRef={aboutMeRef} />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
