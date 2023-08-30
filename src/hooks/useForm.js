import { useState, useCallback } from "react";

export function useForm(inputValues = {}, validationState = {}) {
  const [values, setValues] = useState(inputValues);
  const [invalidState, setValidateState] = useState(validationState);


  const handleChange = (event) => {
    const { value, name, validationMessage } = event.target;
    setValidateState({ ...invalidState, [name]: validationMessage });
    console.log(invalidState);
    setValues({ ...values, [name]: value });
  };

  const validate = (inputs) => {
    inputs.forEach(input => {
      const {validationMessage, name } = input;
      setValidateState({ ...invalidState, [name]: validationMessage });
    });
  }

  const isInvalid = useCallback(() => {
    for(let key in invalidState) {
      let value = invalidState[key];
      if (value) {
        return true;
      }
    }
    return false;
  }, [invalidState])

  return { values, invalidState, handleChange, setValues, validate, isInvalid };
}
