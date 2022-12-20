import React from "react";
import './style.css'

const Withdraw = (props) => {
    return (
        <div className="p-create">
            <div className="p-create-name">
                <h2>Amount</h2>
                <input className="p-create-input"></input>
            </div>
            <div className="p-bt-dialog">
                <button className="p-dialog-cancel">Cancel</button>
                <button className="p-dialog-create">{props.type}</button>
            </div>
        </div>
    )
}

export default Withdraw;