import React, { useRef,useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import GHeader from "../GHeader/GHeader";
import $ from "jquery"


const Login = (props) => {
  const userref = useRef();
  const passref = useRef();
  const history = useNavigate()
  const [notify,SetNotify]=useState(false)
  const [Alert,SetAlert]=useState("")

  

  const login = () =>
  {
    axios.post('http://localhost:4000/user/authenticate', {
            username: $(".username").val(),
            password: $(".password").val(),
        }).then((res)=>{
            SetNotify(res.data.success)
            
        })
      
    console.log(notify)
    if (notify===true) {
      const cccd=$(".username").val()
      localStorage.setItem('cccd', JSON.stringify(cccd));
      history("/")
    }
    else
       SetAlert("Đăng nhập thất bại")
  }
  const Submit = (e) => {
    e.preventDefault();
    console.log({
      username: userref.current.value,
      password: passref.current.value,
    });
  }
  return (
    <div className="parent">
      <GHeader/>
      
      <div className="form_container">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form className="form" onSubmit={Submit}>
          <h3>Login</h3>
          <div className="input">
            <label htmlFor="username">username</label>
            <input
              ref={userref}
              type="text"
              id="username"
              className="username"
            />
          </div>
          <div className="input">
            <label htmlFor="password">password</label>
            <input
              ref={passref}
              type="password"
              id="password"
              className="password"
            />
          </div>
          {Alert}
          <button className="Button" onClick={login}>
            Sign In
          </button>
          <button className="Button_SignUp" onClick={()=>{history("/register")}}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;