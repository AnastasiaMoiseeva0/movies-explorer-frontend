import "./Button.css";

function Button({ text, className, colorButton, iconButton, onClick, type, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button
        ${className}
        ${iconButton ? "button_icon" : ""}
        ${colorButton === "blue" ? "button_type_blue" : ""}
        ${colorButton === "grey" ? "button_type_grey" : ""}
      }`}
      type={type || 'button'}
    >
      {text}
    </button>
  );
}

export default Button;
