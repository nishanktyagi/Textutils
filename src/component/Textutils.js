import React, { useState } from 'react'

export default function Textutils(props) {
    const [text, setText] = useState("");

    const handleUppercase = () => {
        let a = text.toUpperCase()
        setText(a);
        props.showAlert("Converted to uppercase", "success")
    }

    const handlelowercase = () => {
        let a = text.toLowerCase()
        setText(a);
        props.showAlert("Converted to lowercase", "success")
    }

    const handleclear = () => {
        let a = text
        setText("");
        props.showAlert("text cleared", "success")
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = (event) => {
        let a = document.getElementById("textarea");
        a.select();
         navigator.clipboard.writeText(a.value);
        //  alert("Copied Text : "+text)
        props.showAlert("text copied to clipboard", "success")
    }

    const trim = (event) => {
        let a = text.trim()
        setText(a);
        props.showAlert("Space Cleared", "success")
    }
    return (
        <div className='container my-5' style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
            <h1>{props.heading}</h1>
            <textarea id="textarea" rows="8" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}></textarea>
            <div className="buttons mt-4">
                <button className="btn mx-1 btn-primary" onClick={handleUppercase}>Convert To Uppercase</button>
                <button className="btn mx-1 btn-primary" onClick={handlelowercase}>Convert To Lowercase</button>
                <button className="btn mx-1 btn-primary" onClick={trim}>Remove Space</button>
                <button className="btn mx-1 btn-primary" onClick={handleCopy} >Copy Text</button>
                <button className="btn mx-1 btn-danger" onClick={handleclear}>Clear</button>
                {/* <button className="btn btn-primary"></button> */}
            </div>
            <p className='mt-4'>Your Text contain : {text.split(" ").filter((element) => { return element.length !== 0; }).length} Words {text.length} Character</p>
            <p> Text Preview: {text.length>'0'?text:'Enter some text in Textbox for preview'}</p>

        </div>
    )
}
