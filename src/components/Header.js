import React from "react"

const headerStyle = {fontSize: "25px", marginBottom: "15px"};

const Header = () => {
    return (
        <header>
            <h1 style={headerStyle}>Simple Todo App</h1>
            <p style={{fontSize: "19px"}}>Please add to-dos item(s) through the input field</p>
        </header>
    )
};

export default Header
