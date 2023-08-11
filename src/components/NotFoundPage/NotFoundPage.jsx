import "./NotFoundPage.css";
import Button from "../Button/Button"
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
}

  return (
    <div className="not-found">
      <div className="not-found__text">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <Button className="not-found__link" onClick={goBack} text="Назад"/>
    </div>
  );
}

export default NotFoundPage;
