import React from "react";
import Menu from "../Menu/Menu";
import Content from "../Content/Content";

const Container = () => {
    return (
        <div className="Container">
            <Menu className="Menu"></Menu>
            <Content className="Content"></Content>
        </div>
    )
}

export default Container;