import React from "react";

//CSS Modules
import styles from "../../styles/form.module.css";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name}></input>
      {error && <div className={styles.inputError}>{error}</div>}
    </div>
  );
};

export default Input;
