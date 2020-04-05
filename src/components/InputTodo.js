import React, {Component} from "react"

class InputTodo extends Component {
    state = {
        title: ""
    };

    onTextChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ""});
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form-container">
                <input className="input-text"
                       type="text"
                       name="title"
                       placeholder="Add Todo..."
                       value={this.state.title}
                       onChange={this.onTextChange}/>
                <input type="submit" className="input-submit" value="Submit"/>
            </form>);
    }
}

export default InputTodo
