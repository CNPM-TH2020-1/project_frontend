import Header from "../Header/Header";
import $ from "jquery"
import "./style.css";
import Container from "../Container/Container";
import Create from "../Create/Create";
import * as ReactDOM from 'react-dom';
import { useState } from "react";
function LandingPage() {
  const modelbox=$(".model")
  const overlay=$(".opacity")
  const [create, Setcreate] = useState(false)
  const CreateBox = () => {
    Setcreate(!create)
  }
  if (create===false)
  {
    modelbox.css('display','none')
    overlay.css('z-index','-1')
  } 
  else
  {
    modelbox.css('display','block')
    overlay.css('z-index','1')
  }
  return (
    <div className="Landing-Page">
      <Header></Header>

      <Container click={CreateBox}></Container> 
      <div className="model" onClick={CreateBox}>
        <Create></Create>
      </div>
      <div className="opacity" ></div>


    </div>
    
  );
}

export default LandingPage;
