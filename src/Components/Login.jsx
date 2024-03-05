import React from "react";
import "./Login.scss";
 import { Link } from "react-router-dom";

  function Login() {
   return(
      <>
    <html id="html1">
      <div className="loginmaindiv">
        <h3>Login to your account</h3>
        <div className="email">
          <form>
            <label for="Email" >Email</label>
            <input type="text" id="email" placeholder="Enter your Email" required></input>
            <label for="password">Password</label>
            <input type="text" id="password" placeholder=" Enter your Password" required></input>
            <button className="Loginbutton"to={"/Home2"}>Login</button>
          <h5>Doesn't Have an Account ?
            <Link className="re" to={"/Register"}  >
           <span >Register Here </span>
           </Link>
           </h5>
          </form>
        </div>
      </div>

    </html>
      </>
  );
   }
export default Login;
