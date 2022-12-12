import React from "react";
import './style.css'

const Create = () => {
    return (
        <div className="create">
            <div className="create-name">
                <h2>Name</h2>
                <input className="create-input"></input>
            </div>
            <div className="create-TaF">
                <div className="create-type">
                    <h2>Type</h2>
                    <select>
                        <option>1 tháng</option>
                        <option>3 tháng</option>
                        <option>6 tháng</option>
                        <option>12 tháng</option>
                        <option>Web đẹp quá cho tiền luôn ó</option>
                    </select>
                </div>
                <div className="create-fund">
                    <h2>Fund</h2>
                    <input className="create-input"></input>

                </div>
            </div>
            <div className="create-subcribe">
                <h2>Auto-Subcribe</h2>
                <input type="checkbox" name="" class="switch-toggle" />
            </div>
            <div className="bt-dialog">
                <button className="dialog-cancel">Cancel</button>
                <button className="dialog-create">Create</button>
            </div>
        </div>
    )
}

export default Create;