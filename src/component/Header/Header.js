import React, { useState } from 'react';
import "./Header.css"


const Header =(props) =>
{
    const more= <div className='More'>
    <a href="http://localhost:3000/login" className='bt-Logout'>Log Out</a>
    </div>
    const [hidden,SetHidden]=useState(false)

    const Ishidden=()=>
    {
        SetHidden(!hidden)
    }
    return(
        <div className='Header'>
            <div className='Header-left'>
                <h2>Saving</h2>
            </div>

            <div className='Menu'>
                <div className='bt-Home'>Home</div>
                <div className='bt-Saving'>Saving</div>
                <div className='bt-About'>About Us</div>
            </div>


            <div className='Header-right'>
                <div className='infor'>
                    <img src='https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet-700x695.jpg' alt="khong co" className='Avt'></img>
                    <h2 className='Name'>{props.user}</h2>
                    <div className='bt-More' onClick={Ishidden}>V</div>
                    {hidden===true?more:null}
                </div>
                
            </div>
        </div>
    )
}

export default Header;