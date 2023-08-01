import "./Button.css";

function Button({ size, text, textColor, buttonColor }) {
  return (
    <button
      className={`button
        ${size === "m" ? "button_type_medium" : ""}
        ${textColor === "white" ? "button_type_text-white" : ""}
        ${buttonColor === "black" ? "button_type_color-black" : ""}
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
