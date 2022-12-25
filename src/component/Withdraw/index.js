import React, { useState } from "react";
import './style.css'
import $ from "jquery"
import axios from "axios";

const Withdraw = (props) => {
    const [notify, SetNotify] = useState("")
    const withdraw= () =>
    {
        axios.patch('http://localhost:4000/saving/withdraw', {
            _id:props.id,
            money:Number($(".p-create-input").val())
        })
            .then((res) => {
                SetNotify(res.data.message)
                console.log(notify)
            });

                props.update()
                props.click(props.id)
                window.location.reload()

        
    }

    return (
        <div className="p-create">
            <div className="p-create-name">
                <h2>Amount</h2>
                <input className="p-create-input"></input>
            </div>
            {notify}
            <div className="p-bt-dialog">
                <button className="p-dialog-cancel" onClick={props.click}>Cancel</button>
                <button className="p-dialog-create" onClick={withdraw}>Withdraw</button>
            </div>
        </div>
    )
}

export default Withdraw;