import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css"


const GHeader =() =>
{
    const history=useNavigate()
    return(
        <div className='GHeader'>
            <div className='GHeader-left'>
                <h2>Saving</h2>
            </div>

            <div className='GMenu'>
                <div className='G-bt-Home'>Home</div>
                <div className='G-bt-Saving'>Saving</div>
                <div className='G-bt-About'>About Us</div>
            </div>


            <div className='GHeader-right'>
                <button className='G-bt-login' onClick={()=>{history("/login")}}>Login</button>
                <button className='G-bt-register' onClick={()=>history("/register")}>Register</button>
            </div>
        </div>
    )
}

export default GHeader;