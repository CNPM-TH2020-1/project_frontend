import React, { useState } from "react";
import './style.css'
import $ from "jquery"
import axios from "axios";

const Fund = (props) => {
    const [newmoney, SetNewmoney] = useState(1000000)
    const withdraw= () =>
    {
        console.log(Number($(".p-fund-input").val()))
        axios.patch('http://localhost:4000/saving/deposit', {
            _id:props.id,
            money:Number($(".p-fund-input").val())
        })
            .then(response => SetNewmoney({
                id:props.id,
                money:Number($(".p-fund-input").val())
            }));
        props.update()
        props.click(props.id)
    }
    return (
        <div className="p-fund">
            <div className="p-fund-name">
                <h2>Amount</h2>
                <input className="p-fund-input"></input>
            </div>
            <div className="p-bt-fund-dialog">
                <button className="fund-dialog-cancel" onClick={props.click}>Cancel</button>
                <button className="fund-dialog-fund" onClick={withdraw}>Fund</button>
            </div>
        </div>
    )
}

export default Fund;