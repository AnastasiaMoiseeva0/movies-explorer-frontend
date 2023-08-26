import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Input.css";

function Input({ text, type, name, minLength, maxLength, value, onChange, validationMessage }) {

  return (
    <div className="input">
      <p className="input__subtitle">{text}</p>
      <input
        className={`input__field ${
          validationMessage ? "input__field_type_red" : ""
        }`}
        type={type}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        required
        onChange={onChange}
      />
      <ErrorMessage message={validationMessage} className={`input__error ${
          validationMessage ? "input__error_active" : ""
        }`}></ErrorMessage>
    </div>
  );
}

export default Input;
