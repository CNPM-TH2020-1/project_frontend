import React, { useState } from "react";
import Content from "../Content/Content";
import "./Container.css"

const Container = () => {
    const news = 
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

    const [create,CreateRow]=useState()

    return (
        <div className="Container">
            <div className="My-money">
                <div className="money">
                    <h3>Total Balance</h3>
                    <h2>100.000.000 VND</h2>
                </div>
                <button className="bt-create">Create</button>
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
                        <th className="col-tbl">Funding</th>
                        <th className="col-tbl">Profit</th>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td className="col-Name">Đi chơi</td>
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
                </table>
            </div>
        </div>
    )
}

export default Container;