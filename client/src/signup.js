import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [eMsg, eSetmsg] = useState("");
  const [uMsg, uSetmsg] = useState("");
  const [pMsg, pSetmsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const register = (e) => {
    e.preventDefault();
    if (email === "") {
      eSetmsg("Email should not be empty");
    } else if (email) {
      eSetmsg();
    }

    if (username === "") {
      uSetmsg("Username should not be empty");
    } else if (username) {
      uSetmsg();
    }

    if (password === "") {
      pSetmsg("Password should not be empty");
    } else if (password.length < 8) {
      pSetmsg("Password must be at least 8 characters long.");
    } else if (!/\d/.test(password)) {
      pSetmsg("'Password must contain at least one digit.");
    } else if (!/[a-z]/.test(password)) { 
      pSetmsg("Password must contain at least one lowercase letter.");
    } else if (!/[A-Z]/.test(password)) {
      pSetmsg("Password must contain at least one uppercase letter.");
    } else {
      Axios.post("http://localhost:3001/register", {
        email: email,
        username: username,
        password: password,
      }).then((response) => {
        if (response.data.message) {
          setRegisterStatus(response.data.message);
        } else {
          setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
        }
      });
    }
  };

  return (
    <div className="container head-con">
      <div className="loginForm">
        <form>
          <h4>Register Here</h4>

          <label htmlFor="email">Email Address*</label>
          <input
            className="textInput"
            type="text"
            name="email"
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your Email Address"
          />
          <h6
            style={{
              color: "red",
              fontSize: "15px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            {eMsg}
          </h6>

          <label htmlFor="username">Username*</label>
          <input
            className="textInput"
            type="username"
            name="username"
            autoComplete="off"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Enter your Username"
          />
          <h6
            style={{
              color: "red",
              fontSize: "15px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            {uMsg}
          </h6>

          <label htmlFor="password">Password*</label>
          <div style={{ position: "relative" }}>
            <input
              className="textInput"
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your Password"
            />
            <span
              style={{
                position: "absolute",
                right: "10px",
                top: "40%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "black",
                fontSize: "1.4rem",
              }}
              onClick={handlePasswordToggle}
            >
              {showPassword ? (
                <BsEyeSlash onClick={setShowPassword} />
              ) : (
                <BsEye onClick={setShowPassword} />
              )}
            </span>
          </div>
          <h6
            style={{
              color: "red",
              fontSize: "15px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            {pMsg}
          </h6>

          <input
            className="button"
            type="submit"
            onClick={register}
            value="Create an account"
          />

          <center>
            <div className="msg">
              Already Have an Account? <Link to="/login">Login</Link>
            </div>{" "}
          </center>
          <h6
            style={{
              color: "#00cc00",
              fontSize: "15px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            {registerStatus}
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Signup;
