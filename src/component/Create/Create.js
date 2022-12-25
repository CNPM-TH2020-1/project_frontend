import React, { useEffect, useState } from "react";
import './style.css'
import axios from "axios";
import $ from "jquery"

const Create = (props) => {
    const [notify, SetNotify] = useState(null)
    const AddnewSv = () => {
        console.log($(".create-input-type").val())
        axios.post('http://localhost:4000/saving/create/', {
            Name: $(".create-input-name").val(),
            Balance: Number($(".create-input-fund").val()),
            CCCD:props.cccd,
            Type: $(".create-input-type").val(),
        })
            .then((res) => SetNotify(res));

        props.update()
        props.click()
    }
    

    return (
        <div className="create">
            <div className="create-name">
                <h2>Name</h2>
                <input className="create-input-name"></input>
            </div>
            <div className="create-TaF">
                <div className="create-type">
                    <h2>Type</h2>
                    <select className="create-input-type">
                        <option>Không kì hạn</option>
                        <option>3 tháng kì hạn</option>
                        <option>6 tháng kì hạn</option>
                        <option>Web đẹp quá cho tiền luôn ó</option>
                    </select>
                </div>
                <div className="create-fund">
                    <h2>Fund</h2>
                    <input className="create-input-fund"></input>
                </div>
            </div>
            <div className="create-subcribe">
                <h2>Auto-Subcribe</h2>
                <input type="checkbox" name="" class="switch-toggle" />
            </div>
            {notify}
            <div className="bt-dialog">
                <button className="dialog-cancel" onClick={props.click}>Cancel</button>
                <button className="dialog-create" onClick={AddnewSv}>Create</button>
            </div>
        </div>
    )
}

export default Create;