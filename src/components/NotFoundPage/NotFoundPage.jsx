import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__text">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <a href="/sign-in" className="not-found__link">
        Назад
      </a>
    </div>
  );
}

export default NotFoundPage;
