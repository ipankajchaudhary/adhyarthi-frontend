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
      <div className="row ">
        <div className="col-8  ">
          <div className="d-flex flex-column">
            <div className="p-2 ">
              <div className="d-flex flex-row">
                <div className="p-2 ">
                  <div className="logo-img">
                    <img src={logo} alt="" className="logo-image" />
                  </div>
                </div>
                <div className="px-2 py-3">
                  {" "}
                  <h5>Adhyarthi</h5>{" "}
                </div>
              </div>
            </div>
            <div className="p-2  d-flex justify-content-center">
              <h2>Sign into Adhyarthi</h2>
            </div>
            <div className="p-2  d-flex justify-content-center">
              (google logo will come here)
            </div>
            <div className="p-2   d-flex justify-content-center">
              <h6>
                <u>or use your email account :</u>
              </h6>
            </div>
            <div className="p-2   d-flex justify-content-center">
              <form className="form-signin d-flex flex-column  ">
                <input
                  className="inputcredentials d-flex"
                  type="email"
                  id="inputEmail"
                  placeholder="Email"
                  required=""
                  autoFocus=""
                />

                <input
                  type="password"
                  id="inputPassword"
                  placeholder="Password"
                  required=""
                />
                <div className="checkbox mb-3  d-flex justify-content-center">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <div className="p-2  d-flex justify-content-center">
                  <h6>
                    <u>Forgot Your Password ?</u>
                  </h6>
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                >
                  Sign in --
                </button>
              </form>
            </div>
            <div className="p-2  d-flex justify-content-center">
              <h5>Don't have an account ? Signup</h5>
            </div>
          </div>
        </div>
        <div className="col-4 right-container">
          <div className="d-flex flex-column">
            <div><h1>Scan Qr</h1></div>
            <div>(qr code)</div>
          </div>
        </div>
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
              <i className="fa-solid fa-envelope"></i>
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
