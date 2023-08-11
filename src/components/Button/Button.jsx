import "./Button.css";

function Button({ text, className, colorButton, iconButton, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`button
        ${className}
        ${iconButton === "icon" ? "button__icon" : ""}
        ${colorButton === "green" ? "button_type_green" : ""}
        ${colorButton === "blue" ? "button_type_blue" : ""}
        ${colorButton === "grey" ? "button_type_grey" : ""}
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
