import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Container.css"
import Saving from "../Saving/Saving";
const Container = (props) => {
    
    const news=
    <tr>
        <td className="col-Name">Học lại</td>
        <td className="col-Type">3 tháng</td>
        <td className="col-Expr">01-03-2023</td>
        <td className="col-Funding">1M</td>
        <td className="col-Profit">0</td>
        <td>
            <button className="bt-Fund">Fund</button>
        </td>
        <td>
            <button className="bt-Withdraw">Withdraw</button>
        </td>
    </tr>
    const history=useNavigate()
    const a=props.data
    console.log(a)
    var sum=0

    a.map((saving)=>{
        sum+=Number(saving.Balance)
        console.log(saving.Balance)
        return(sum)}
    )


    
    return (
        <div className="Container">
            <div className="My-money">
                <div className="money">
                    <h3>Total Balance</h3>
                    <h2>{sum} VND</h2>
                </div>
                <button className="bt-create" onClick={props.click}>Create</button>
            </div>
            <div className="Statistics">
                <div className="Search">
                    <input type="text" class="searchTerm" placeholder="Bạn muốn tìm gì?" />
                    <img src='https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-magnifying-glass-icon-image_1128382.jpg' alt='sai' className="img-search"></img>
                </div>
                <table className="Statistics-table">
                    <tr>
                        <th className="col-tbl">Name</th>
                        <th className="col-tbl">Type</th>
                        <th className="col-tbl">Expr</th>
                        <th className="col-tbl">Deposit</th>
                        <th className="col-tbl">Profit</th>
                        <th> </th>
                        <th> </th>
                    </tr>
                    {a.map((saving)=>{
                        return(
                            <Saving
                            STT={saving._id}
                            Name={saving.Name}
                            Type={saving.Type.name}
                            Expr={saving.createAt}
                            Deposit={saving.Balance}
                            Profit="0"
                            click1={props.click1}
                            click2={props.click2}></Saving>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default Container;