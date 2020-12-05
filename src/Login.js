import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <div className="login__logo">
          <img src="https://rb.gy/vlnsag" alt="logo" />
          <span>.in</span>
        </div>
      </Link>
      <div className="login__inputcon">
        <h2>Login</h2>
        <div className="login__inputcon__feild">
          <label htmlFor="email">Email or mobile phone number</label>
          <input
            type="text"
            className="login__inputcon__feild__input"
            name="email_or_mobile"
            id="email"
            autoFocus={true}
          />
        </div>
        <div className="login__inputcon__feild">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="login__inputcon__feild__input"
            name="password"
            id="password"
          />
        </div>
        <p className="login__condition">
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a>{" "}
          and <a href="#">Privacy Notice.</a>
        </p>
        <button type="submit" className="login__submit__button">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
