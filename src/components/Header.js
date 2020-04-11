import React, {Component} from "react"

const headerStyle = {fontSize: "25px", marginBottom: "15px"};

class Header extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.headerSpan !== this.props.headerSpan) {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const bgColor = `rgb(${red},${green},${blue})`;

            document.getElementById("inH1").innerHTML = "clicked";
            document.getElementById("inH1").style.backgroundColor = bgColor;
        }
    }

    render() {
        return (
            <header>
                <h1 style={headerStyle}>Simple Todo App <span id="inH1"></span></h1>
                <p style={{fontSize: "19px"}}>Please add to-dos item(s) through the input field</p>
            </header>
        )
    };
}

export default Header
