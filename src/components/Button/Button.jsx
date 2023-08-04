import "./Button.css";

function Button({ text, textColor, buttonColor, buttonImg, buttonBorder, className }) {
  return (
    <button
      className={`button
        ${className}
        ${textColor === "white" ? "button_type_text-white" : ""}
        ${textColor === "black" ? "button_type_text-black" : ""}
        ${buttonBorder === "s" ? "button_type_border-small" : ""}
        ${buttonBorder === "m" ? "button_type_border-medium" : ""}
        ${buttonBorder === "l" ? "button_type_border-large" : ""}
        ${buttonColor === "black" ? "button_type_color-black" : ""}
        ${buttonColor === "green" ? "button_type_color-green" : ""}
        ${buttonImg === "transparent-icon" ? "button_type_transparent-icon" : ""}
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
