import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import GHeader from "../GHeader/GHeader";
import axios from "axios";
import $ from "jquery"
const Register = () => {
  const [check, setCheck] = useState(true);
  const userref = useRef();
  const passref = useRef();
  const repassref = useRef();
  const history = useNavigate()
  const checkMatch = (a, b) => {
    return a === b;
  };

  const Submit = (e) => {
    e.preventDefault();
    const username = userref.current.value;
    const password = passref.current.value;
    const repass = repassref.current.value;

    if (!checkMatch(password, repass)) {
      setCheck(false);
    } else {
      console.log({
        username: userref.current.value,
        password: passref.current.value,
        retypepassword: repassref.current.value,
      });
    }
  };
  const [notify, SetNotify] = useState(false);
  const signup = () =>
  {
    axios.post('http://localhost:4000/user/create', {
          CCCD: $(".username").val(),
          username: $(".username").val(),
          password: $(".password").val(),
          address:"a",
          isAdmin:false,
        }).then((res)=>{
            SetNotify(res.data.success)
            
        })
        console.log(notify)

    notify===true? history("/login"): setCheck("Đăng ký thất bại")
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
          <h3>Register</h3>
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
            {!check && (
              <p className="alert">
                password and retype password aren't matching
              </p>
            )}
          </div>
          <div className="input">
            <label htmlFor="Retypepassword">password</label>
            <input
              ref={repassref}
              type="password"
              id="Retypepassword"
              className="password"
            />
            {check}
          </div>
          <button type="submit" className="Button" onClick={signup}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;