import React, {useState} from 'react'
import Button from './Button';

export default function Textform({heading,mode,buildAlert}) {

    const upperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        buildAlert("converted to upper case","success");
    }

    const lowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        buildAlert("converted to lover case","success");
    }

    const clearCase = ()=>{
        let newText = "";
        setText(newText);
        buildAlert("Text is cleared","warning");
    }

    const copyCase = ()=>{
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        buildAlert("text is copied","success");
    }



    const textChange = (event)=>{
        setText(event.target.value);
    }



    const [text , setText] = useState("");


    return (
        <>

        <div className={`container ${mode==="light"?"modeShadowDark":"modeShadowLight"} my-5 py-3 bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
            <h1>{heading}</h1> 
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={textChange}  style={{backgroundColor:mode==="dark"?"rgb(51, 51, 51)":"white", color:mode==="dark"?"white":"black"}}  placeholder="Enter Text here..." id="myBox" rows="6"></textarea>
            </div>

            <div className="d-flex flex-wrap">
                <Button class="primary" fun={upperCase} text="Convert to UpperCase" mode={mode==="dark"?"light":"dark"}/>
                <Button class="primary" fun={lowerCase} text="Convert to LowerCase" mode={mode==="dark"?"light":"dark"}/>
                <Button class="danger" fun={clearCase} text="Clear Text" mode={mode==="dark"?"light":"dark"}/>
                <Button class="light" fun={copyCase} text="Copy Text" mode={mode==="dark"?"light":"dark"}/>
            </div>
        </div>

        <div className={`container ${mode==="light"?"modeShadowDark":"modeShadowLight"} my-5 p-3 bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
            <h2>Your Text Summary</h2>
            <p><b>{(text === "")?0:text.split(" ").length + text.split(/\n/).length -1}</b> Words and <b>{text.length}</b> Characters</p>
            <p>Time Takes to Read is <b>{(text.split(" ").length + text.split(/\n/).length - 2)*0.008}</b> minutes </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something it the textbox above to Preview it here..."}</p>
        </div>

        </>
    )
}
