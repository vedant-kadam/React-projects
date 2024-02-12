import { useState } from "react";

export function useInput(defaultValue, validationFnc) {
  const [enteredValue, setEntereValue] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFnc(enteredValue);

  const hadelLoginInputChange = (event) => {
    setEntereValue(event.target.value);
    setDidEdit(false);
  };

  function handelInputBlur(event) {
    setDidEdit(true);
  }

  return {
    enteredValue,
    didEdit,
    handelInputBlur,
    hadelLoginInputChange,
    hasError :!valueIsValid && didEdit,
  };
}
