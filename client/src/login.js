import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [uMsg, setUmsg] = useState("");
  const [pMsg, setPmsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const login = (e) => {
    e.preventDefault();

    setUmsg("");
    setPmsg("");

    if (username === "" && password === "") {
      setUmsg("Username should not be empty");
      setPmsg("Password should not be empty");
    } else if (username === "") {
      setUmsg("Username should not be empty");
    } else if (password === "") {
      setPmsg("Password should not be empty");
    } else {
      Axios.post("http://localhost:3001/login", {
        username: username,
        password: password,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus("Login Successful");
        }
      });
    }
  };

  const Color = () => {
    return loginStatus === "Login Successful" ? "#00cc00" : "red";
  };

  return (
    <div className="container head-con">
      <div className="loginForm2">
        <form>
          <h4>Login Here</h4>
          <label htmlFor="username">Username*</label>
          <input
            className="textInput"
            type="text"
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
            <span
              style={{
                position: "absolute",
                right: "10px",
                top: "8px",
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
              )}{" "}
            </span>
          </div>

          <button className="button" type="submit" onClick={login}>
            Login<span className="material-symbols-outlined">east</span>
          </button>
          <center>
            <div className="msg">
              Don't have an account? <Link to="/">Register Now</Link>{" "}
            </div>
          </center>

          <h6
            style={{
              color: Color(),
              fontSize: "18px",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            {loginStatus}
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Login;
  
