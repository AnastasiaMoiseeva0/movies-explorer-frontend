import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";

function Main() {
  return (
    <main>
      <section className="main">
        <Promo />
        <AboutProject />
      </section>
    </main>
  );
}

export default Main;
