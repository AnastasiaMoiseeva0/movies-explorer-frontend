import "./Logo.css";
import projectLogo from "../../images/logo.svg";

function Logo({className}) {
    return(
        <img
        className={`header__logo
        ${className}
      }`}
        src={projectLogo}
        alt="Логотип учебного проекта"
      />
    )
}

export default Logo;