import React, { useState } from 'react';
import "./style.css"


const GHeader =() =>
{
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
                <button className='G-bt-login'>Login</button>
                <button className='G-bt-register'>Register</button>
            </div>
        </div>
    )
}

export default GHeader;