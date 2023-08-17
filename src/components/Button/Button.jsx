import "./Button.css";

function Button({ text, className, colorButton, iconButton, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`button
        ${className}
        ${iconButton ? "button_icon" : ""}
        ${colorButton === "blue" ? "button_type_blue" : ""}
        ${colorButton === "grey" ? "button_type_grey" : ""}
      }`}
      type="button"
    >
      {text}
    </button>
  );
}

export default Button;
