import React from "react";

const Button = ({ children, textOnly, className = "", ...props }) => {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;
  //console.log(props);
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
