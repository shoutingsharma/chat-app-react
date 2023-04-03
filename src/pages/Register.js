import React from "react";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Private chat</span>
        <span className="title">Register</span>

        <form action="">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{display:"none"}} type="file" id="file" />
          <label htmlFor="file">
            <i class="fa-solid fa-image"></i>
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
