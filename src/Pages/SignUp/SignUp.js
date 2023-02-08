import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/Input";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1>Sign Up</h1>
        <Input label="Name" placeholder="Enter Your Name" />
        <Input type="email" label="Email" placeholder="Enter Your Email" />
        <Input
          type="password"
          label="Password"
          placeholder="Enter Your Password"
        />
        <div className={styles.footer}>
          <button>Sign Up</button>
          <p>
            Already have an Account?
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
