import Header from "../Header/Header";
import $ from "jquery"
import "./style.css";
import Container from "../Container/Container";
import Create from "../Create/Create";
import Withdraw from "../Withdraw";
import { useState } from "react";


const LandingPage=()=> {
  const modelCreate=$(".model-create")
  const overlay=$(".opacity")
  const modelWithdraw=$(".model-withdraw")
  const modelFund=$(".model-Fund")

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
  const WithdrawBox = () => {
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
  const FundBox = () => {
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

  return (
    <div className="Landing-Page">
      <Header></Header>

      <Container click={CreateBox} click1={WithdrawBox} click2={FundBox}></Container> 

      <div className="model-create" onClick={CreateBox}>
        <Create></Create>
      </div>

      <div className="model-withdraw" onClick={WithdrawBox}>
        <Withdraw type="Withdraw"></Withdraw>
      </div>

      <div className="model-Fund" onClick={FundBox}>
        <Withdraw type="Fund"></Withdraw>
      </div>

      <div className="opacity" ></div>


    </div>
    
  );
}

export default LandingPage;
