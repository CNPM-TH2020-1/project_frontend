import React from "react";
import './style.css'
import Header from "../Header/Header";
const Savingdetail = () => {
    return (
        <div className="Savingdetail">
            <Header></Header>
            <div className="Savingdetail-body">
                <h1 className="Savingdetail-name">Saving/Đi chơi</h1>
                <div className="Savingdetail-money">
                    <div className="Savingdetail-balance">
                        <h3>Balance</h3>
                        <h2>10.000.000 VND</h2>
                    </div>
                    <div className="Savingdetail-button">
                        <button className="Saving-bt">Fund</button>
                        <button className="Saving-bt">Withdraw</button>
                    </div>
                </div>
                <div className="Savingdetail-detail">
                    <div className="detail-left">
                        <h2>Principal: </h2>
                        <h2>Type: </h2>
                        <h2>Starting date: </h2>
                        <h2>Ending date: </h2>
                    </div>
                    <div className="detail-left">
                        <h2>Total Fund: </h2>
                        <h2>Total Withdraw: </h2>
                        <h2>Profit: </h2>
                        <h2>Auto-Subscribe: </h2>
                    </div>
                </div>
                <div className="Savingdetail-history">
                    <h2>HISTORY</h2>
                </div>
            </div>
        </div>
    )
}

export default Savingdetail;