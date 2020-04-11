import React, {Component} from "react"

const headerStyle = {fontSize: "25px", marginBottom: "15px"};

class Header extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.headerSpan !== this.props.headerSpan) {
            console.log("props change");
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
