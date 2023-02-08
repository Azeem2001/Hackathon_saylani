import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/Input";
import styles from "./SignIn.module.scss";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1>Login</h1>
        <Input type="email" label={"Email"} placeholder="Enter Your Email" />
        <Input
          type="password"
          label={"Password"}
          placeholder="Enter Your Password"
        />

        <div className={styles.footer}>
          <button>Login</button>
          <p>
            Already have an Account?
            <span>
              <Link to="/signup"> Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
