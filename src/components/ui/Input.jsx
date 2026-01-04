import React from "react";

function Input({
  children,
  type,
  id,
  name,
  value,
  onchange,
  placeholder,
  min,
  step,
}) {
  return (
    <>     
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        min={min}
        step={step}
      >
        {children}
      </input>
    </>
  );
}

export default Input;
