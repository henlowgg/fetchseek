import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./tailwind-login.css";
import { data } from "autoprefixer";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
//   const navigate = useNavigate();

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };


  const searchDogId = () => {
    const mockids = [
    "VXGFTIcBOvEgQ5OCx40W",
    "V3GFTIcBOvEgQ5OCx40W",
    "WHGFTIcBOvEgQ5OCx40W",
    "W3GFTIcBOvEgQ5OCx40W",
    "YnGFTIcBOvEgQ5OCx40W",
    "Y3GFTIcBOvEgQ5OCx40W",
    "aXGFTIcBOvEgQ5OCx40W",
    "bHGFTIcBOvEgQ5OCx40W",
    "bnGFTIcBOvEgQ5OCx40W",
    "cXGFTIcBOvEgQ5OCx40W",
    "dHGFTIcBOvEgQ5OCx40W",
    "dnGFTIcBOvEgQ5OCx40W"]

    const url = "https://frontend-take-home-service.fetch.com/dogs";
    const config = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            
        },
        credentials : 'include',
        body : JSON.stringify(mockids),
    }

    const idResponse = fetch(url, config).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data);
    })
    
}
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      return;
    }

    try {
      const response = await axios.post(
        "https://frontend-take-home-service.fetch.com/auth/login",
        { name, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const authToken = response.headers["fetch-access-token"];
        localStorage.setItem("authToken", authToken);
        // onLogin();
        
      } else {
        console.error("Login failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

//   useEffect(() => {
//     if (localStorage.getItem("isLoggedIn") === "true") {
//       navigate("/home");
//     } else {
//       navigate("/login");
//     }
//   }, [navigate]);

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form onSubmit={handleSubmit} className="login-form">
            <span className="login-form-title"> Rescue </span>

            <span className="login-form-title">
              <img src={"./assets/favicon.png"} alt="Logo" />
            </span>

            <div className="wrap-input">
              <input
                className={name !== "" ? "has-val input" : "input"}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Name"></span>
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" type="submit">
                Login
              </button>
            </div>

            <button onClick={searchDogId}>idResponse</button>

            <div className="text-center">
              <span className="txt1">Wanna check out my GitHub? </span>
              <a className="txt2" href="https://github.com/henlowgg">
                "github logo"
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;