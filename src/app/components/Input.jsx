import React from "react";

const InputComponent = ({ label, value, type, handleChange }) => {
  return (
    <div>
      <label htmlFor={label}>
        {label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()}
      </label>
      <input
        required
        name={label}
        id={label}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={
          label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()
        }
      />
    </div>
  );
};

export default InputComponent;
