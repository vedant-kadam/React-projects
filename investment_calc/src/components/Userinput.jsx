import React from "react";
import Inputfields from "./Inputfields";

const inputInfo = [
  {
    inputType: "number",
    label: "Initial Investment",
    required: true,
  },
];

const Userinput = ({ inputVals, hadelInputValChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <Inputfields
          
          inputType="number"
          label="Initial Investment"
          value={inputVals.initialInvestment}
          name="initialInvestment"
          onchange={hadelInputValChange}
        />
        <Inputfields
          inputType="number"
          label="Annual Investment"
          value={inputVals.annualInvestment}
          name="annualInvestment "
          onchange={hadelInputValChange}
        />
      </div>
      <div className="input-group">
        <Inputfields
          inputType="number"
          label="Expected Returm"
          value={inputVals.expectedReturn}
          onchange={hadelInputValChange}
          name="expectedReturn "
        />
        <Inputfields
          inputType="number"
          label="Duration"
          value={inputVals.duration}
          onchange={hadelInputValChange}
          name="duration "
        />
      </div>
    </section>
  );
};

export default Userinput;
