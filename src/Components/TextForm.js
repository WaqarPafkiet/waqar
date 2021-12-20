import React from 'react'
import { useState,useRef } from 'react';

export default function TextForm(props) {
    
    const handleUpclick=()=>{
        console.log("uppercase button is clicked!"+text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Upper Case is enabled!","success");
    }
    const handlelowclick=()=>{
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert("Lower Case is enabled!","success");
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const clear=()=>{
        
        setText("");
    }

    const [text, setText] = useState('Enter Text here!');
    
    const textAreaRef = useRef(null);

    let copyToClipboard=()=> {

        textAreaRef.current.select();
        document.execCommand('copy');
        props.showAlert("Text copied!","success");
      };
      
      const formatString=()=>{
    
        let temp= text;
        temp=temp.replace(/\s+/g, ' ');
        setText(temp);
        props.showAlert("String formatted!","success");
      }

    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>           
        <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} 
                ref={textAreaRef} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to lowerCase</button>
            <button className="btn btn-primary mx-1" onClick={clear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={copyToClipboard}>Copy</button>
            <button onClick={formatString} className="btn btn-primary mx-1" >Format String</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(' ').length} Words and {text.length} charachters</p>
            <p>{0.008*text.split(' ').length} minutes to read</p>
            <h4>Preview</h4>
            <p>{text.length > 0? text:'write something to preview here!'}</p>
        </div>
        </>
    )   
}
