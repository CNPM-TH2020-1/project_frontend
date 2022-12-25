import Header from "../Header/Header";
import $ from "jquery"
import "./style.css";
import Container from "../Container/Container";
import Create from "../Create/Create";
import Withdraw from "../Withdraw";
import React, { useState, useEffect } from "react";
import Fund from "../Fund/Fund";


const LandingPage=(props)=> {
  const modelCreate=$(".model-create")
  const overlay=$(".opacity")
  const modelWithdraw=$(".model-withdraw")
  const modelFund=$(".model-Fund")

  // Data
  const a = props.data
  const [dts,setdt]=useState(a)
  // Xử lý event cho bt
  const [create, Setcreate] = useState(false)
  const CreateBox = () => {
    Setcreate(!create)
  }

  if (create===false)
  {
    modelCreate.css('display','none')
    overlay.css('z-index','-1')
  } 
  else
  {
    modelCreate.css('display','block')
    overlay.css('z-index','1')
  }

  const [withdraw, Setwithdraw] = useState(false)
  const [id,setId]=useState("")
  const WithdrawBox = (newId) => {
    setId(newId)
    console.log(newId)
    Setwithdraw(!withdraw)
  }
  if (withdraw===false)
  {
    modelWithdraw.css('display','none')
  } 
  else
  {
    modelWithdraw.css('display','block')
  }

  const [fund, Setfund] = useState(false)
  const FundBox = (newId) => {
    setId(newId)
    console.log(newId)
    Setfund(!fund)
  }
  if (fund===false)
  {
    modelFund.css('display','none')
  } 
  else
  {
    modelFund.css('display','block')
  }

  // Cập nhật data
  
  const UpdateSaving = () =>
    {
      props.click();
    }
  let data=props.data.filter(saving => saving.CCCD===props.cccd)
  if(!data.length)
    {
      
      data=[{
        _id: "",
        name:"",
        Type:{
          name:""
        },
        createAt:"",
        Balance:""
    }]
    }
  return (
    <div className="Landing-Page">
      <Header></Header>

      <Container click={CreateBox} click1={WithdrawBox} click2={FundBox} data={data} cccd={props.cccd}></Container> 

      <div className="model-create">
        <Create click={CreateBox} update={UpdateSaving} length={dts.length} cccd={props.cccd}></Create>
      </div>

      <div className="model-withdraw">
        <Withdraw click={WithdrawBox} id={id} update={UpdateSaving}></Withdraw>
      </div>

      <div className="model-Fund" >
        <Fund click={FundBox} id={id} update={UpdateSaving}></Fund>
      </div>

      <div className="opacity"></div>


    </div>
    
  );
}

export default LandingPage;
