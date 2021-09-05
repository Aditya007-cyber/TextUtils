import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Upper case is invoked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClrClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState('');
    
    return (
        <>
        <div className = "container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick = {handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick = {handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-3" onClick = {handleClrClick}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick = {handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text:"Enter something in the textbox to preview"}</p>
        </div>
        </>
    )
}
