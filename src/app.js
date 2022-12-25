import React, { useState, useEffect } from "react";
import LandingPage from "./component/LandingPage/LandingPage";
import axios from "axios";
import Login from "./component/Login";
import "./app.css"
const App = () => {

  const [message, setMessage] = useState({
    data: [{
      STT: 0,
      Name: 'Đi chơi',
      Type: '3 tháng',
      Expr: '01-03-2023',
      Deposit: '1M',
      Profit: '0'
    }, {
      STT: 1,
      Name: 'Đi chơi',
      Type: '3 tháng',
      Expr: '01-03-2023',
      Deposit: '1M',
      Profit: '0'
    }]
  })

  useEffect(() => {
    axios.get("http://localhost:4000/saving/getSaving").then((res) => {
      setMessage(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const updatedata = () => {

    axios.get("http://localhost:4000/saving/getSaving").then((res) => {
      setMessage(res)
    }).catch((err) => {
      console.log(err)
    })
    setMessage(message)
  }
  const x = localStorage.getItem('cccd')
  const [cccd, SetCCCD] = useState(Number(localStorage.getItem('cccd').slice(1, x.length - 1)))
  console.log(cccd)
  console.log(message.data)
  return (
    <div>
      <LandingPage data={message.data} click={updatedata} cccd={cccd}></LandingPage>
    </div>
  )
}

export default App;