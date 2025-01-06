import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    var data = {email, password };
    console.log(data)
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/login", data);
      console.log(res.data.username);
      if (res.status === 200) {
        alert("Logged in Successfully...");
        navigate("/navbar");
        localStorage.setItem("k",res.data.username)
      } else {
        alert("Login failed.");
      }
    } catch (err) {
      console.log(err);
      alert("LogIn failed...");
    }
  };
  return (
    <div>
        <label htmlFor="email">Email</label>
        <input  onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                placeholder="Enter your email" />
        <label htmlFor="password">Password</label>
        <input onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="password"
                placeholder="Enter your password"/>
        <button
              onClick={handleLogin}
              type="submit"
             >
              Log In
            </button>
            <button ><a href="/signup">Signup</a> </button>
    </div>
  )
}

export default Login
