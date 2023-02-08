import React from "react";
import styles from "./Input.module.scss";
const Input = (props) => {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input type={props.type ? props.types : "text"} {...props} />
    </div>
  );
};
export default Input;
