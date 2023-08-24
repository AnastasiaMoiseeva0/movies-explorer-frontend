import "./Input.css";
import { useForm } from "../../hooks/useForm.js";
import { useState } from "react";

function Input({ text, type, name, minLength, maxLength, value, onChange, validationMessage }) {
  // const { invalidState } = useForm({});
  // const [ invalidMessage, set] = useState();

  // function handleChange(event) {
  //   set(event.target.validationMessage);
  //   onChange(event);
  // }

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
      <span className={`input__error ${
          validationMessage ? "input__error_active" : ""
        }`}>{validationMessage}</span>
    </div>
  );
}

export default Input;
