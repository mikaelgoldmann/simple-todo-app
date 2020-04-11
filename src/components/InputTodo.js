import React, {useState} from "react"

const InputTodo = props => {
    const [inputText, setInputText] = useState({title: "",});

    const onTextChange = e => setInputText({...inputText, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        props.addTodo(inputText.title);
        setInputText({title: ""});
    };

    return (
        <form onSubmit={onSubmit} className="form-container">
            <input className="input-text"
                   type="text"
                   name="title"
                   placeholder="Add Todo..."
                   value={inputText.title}
                   onChange={onTextChange}/>
            <input type="submit" className="input-submit" value="Submit"/>
        </form>);

};

export default InputTodo
