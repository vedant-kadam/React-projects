import React from "react";

const Inputfields = ({ name, inputType, label, onchange, value }) => {
  return (
    <p>
      <label>{label}</label>
      <input
        name={name}
        onChange={onchange}
        value={value}
        required
        type={inputType ? inputType : "text"}
      />
    </p>
  );
};

export default Inputfields;
