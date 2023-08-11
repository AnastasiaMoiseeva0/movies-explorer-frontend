import "./Input.css";

function Input({ text, type, errorName, isValidate, isRequired, name }) {
  return (
    <div className="input">
      <p className="input__subtitle">{text}</p>
      <input
        className={`input__field ${
          isValidate ? "input__field_type_red" : ""
        }`}
        type={type}
        required={isRequired}
        name={name}
      />
      <span className={`input__error ${
          isValidate ? "input__error_active" : ""
        }`}>{errorName}</span>
    </div>
  );
}

export default Input;
