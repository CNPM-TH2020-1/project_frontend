import React from "react";
import axios from "axios";
import $ from "jquery";
const Saving = (props) => {
    const widtdraw = () =>
    {
        props.click1(props.STT)
    }
    const fund = () =>
    {
        props.click2(props.STT)
    }
    return (
        <tr className={props.STT}>
            <td className="col-Name">{props.Name}</td>
            <td className="col-Type">{props.Type}</td>
            <td className="col-Expr">{props.Expr}</td>
            <td className="col-Funding">{props.Deposit}</td>
            <td className="col-Profit">{props.Profit}</td>
            <td>
                <button className="bt-Fund" onClick={fund}>Deposit</button>
            </td>
            <td>
                <button className="bt-Withdraw" onClick={widtdraw}>Withdraw</button>
            </td>
        </tr>
    )
}

export default Saving;