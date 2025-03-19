import React, { useState } from 'react'
import Button from './Button'

function Textform(props) {
    const [text, settext] = useState("")

    const handleOnChange = (event) => {
        settext(event.target.value)
        // console.log("On change")
    }

    const handleUpClick = () => {
        // console.log("Upper-case was Clicked:") 
        settext(text.toUpperCase())
    }

    const handleLowClick = () => {
        // console.log("Lower-case was Clicked:")
        settext(text.toLowerCase())
    }
    const handleclrClick = () => {
        settext("")
    }

    const handlecopyClick = () =>{
        let copytxt = document.getElementById("exampleFormControlTextarea1");
        copytxt.select()
        document.execCommand("copy");
    }
    const handleExtraspace = () =>{
        let textarea = document.getElementById("exampleFormControlTextarea1");
        let cleanedText = textarea.value.trim().replace(/\s+/g, ' ');
        settext(cleanedText)
    }
    return (
        <div>
            <div className="container1-textform container-fluid bg-light">
                <div className="mb-3"> 
                    <h4 className="form-label">{props.heading}</h4>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="3"></textarea>
                    <div className='btn1'>
                        <Button title="Convert to Upper-case" onClick={handleUpClick} />
                        <Button title="Convert to Lower-case" onClick={handleLowClick} />
                        <Button title="Clear-Text" onClick={handleclrClick} />
                        <Button title="Copy-Text" onClick={handlecopyClick} />
                        <Button title="Remove-Extra Space" onClick={handleExtraspace} />
                    </div>
                </div>
                <div className="mb-3">
                    <h4 className="form-label">Text-Summary:</h4>            
                    <span>{text.length} : Alphabet</span><br />
                    <span>{text.split(" ").filter((e1) => { return e1.length !== 0 }).length} : Words</span> <br />
                    <h4 className="form-label">Preview:</h4> 
                    <p>{text.length > 0 ? text:"Enter Something to Preview:"}</p>
                </div>
            </div>
        </div>
    )
}

export default Textform