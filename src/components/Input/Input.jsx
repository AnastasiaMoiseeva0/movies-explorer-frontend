import "./Input.css";

function Input({ text, type, errorName, isValidate, name, minLength, maxLength, value, onChange }) {
  return (
    <div className="input">
      <p className="input__subtitle">{text}</p>
      <input
        className={`input__field ${
          isValidate ? "input__field_type_red" : ""
        }`}
        type={type}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        required
        onChange={onChange}
      />
      <span className={`input__error ${
          isValidate ? "input__error_active" : ""
        }`}>{errorName}</span>
    </div>
  );
}

export default Input;
