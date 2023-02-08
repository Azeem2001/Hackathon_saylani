import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <div>
        <h1>
          <Link to="/signin">Sign In</Link>
        </h1>
      </div>
      <div>
        <h1>
          <Link to="/signup">Sign Up</Link>
        </h1>
      </div>

      <h2>{props.name ? `Welcome - ${props.name}` : "Login Please"}</h2>
    </div>
  );
};

export default Home;
