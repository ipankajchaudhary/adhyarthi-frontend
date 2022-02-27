import React, { useState } from "react";
import logo from "./logo.png";
import "./Login.css";
const Login = () => {
  const [show, setshow] = useState("false");

  const handleslasheye = (e) => {
    e.preventDefault();
    setshow("true");
  };
  const handlenormaleye = (e) => {
    e.preventDefault();
    setshow("false");
  };
  return (
    <>

    <div class="d-flex bd-highlight">
    <div class="p-2 flex-fill bd-highlight">Flex item with a lot of content</div>
    <div class="p-2 flex-fill bd-highlight">Flex item</div>
    <div class="p-2 flex-fill bd-highlight">Flex item</div>
  </div>
      





      






      





      

      


      

      

      
      
      
      


























      








      
    {/*<div className="main-container">
        <div className="left-container">
          <div className="left-inner-container">
            <div className="logo">
              <div className="logo-img">
                <img src={logo} alt="" className="logo-image" />
              </div>
              <div className="logo-text">Adhyarthi</div>
            </div>
            <div className="Sign-in-text">Sign into Adhyarthi</div>
            <div className="gicon">G+</div>
            <div className="use-email-text">or use your email account :</div>
            <div className="email-input">
              <div className="email-logo">
              <i class="fa-solid fa-envelope"></i>
              </div>
              <input
                type="email"
                className="form-control for-email"
                id="emailHelp"
                name="email"
                placeholder="Email"
                aria-describedby="emailHelp"
                autoComplete="on"
              />
            </div>
          *<div className="password-input">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label"
                id="id_password"
              >
                {" "}
                <b>Password</b>
              </label>
              <button type="submit" className="FP">
                Forgot password?
              </button>

              <input
                type={show === "true" ? "text" : "password"}
                className="form-control password-input"
                name="password"
                id="password"
                autoComplete="on"
                placeholder="Enter your password..."
              />
            </div>
            <div className="forgot-text">Forgot your password?</div>
            <div className="sign-in-btn">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
            <div className="signup-text">Don’t have an account ? Sign Up</div>

          </div>
        </div>
        <div className="right-container">qr code</div>
</div> */}
    </>
  );
};

export default Login;
