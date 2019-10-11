import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name}></input>
      {error && <div className="input-error">{error}</div>}
    </div>
  );
};

export default Input;
