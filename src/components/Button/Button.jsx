import "./Button.css";

function Button({ text, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`button
        ${className}
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
