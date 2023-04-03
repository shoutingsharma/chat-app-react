import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Private chat</span>
        <span className="title">Sign in</span>

        <form action="">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
