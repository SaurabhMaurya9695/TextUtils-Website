import React , {useState} from 'react'


export default function TextForm(props) {

    //handleclickfun
    const handleUppercase = ()=>{
        console.log("uppercase was click" + text);
        let newtext = text.toUpperCase();
        setText(newtext);

    }
    const handleLowercase = ()=>{
        console.log("uppercase was click" + text);
        let newtext = text.toLowerCase();
        setText(newtext);

    }
    const handleClearcase = ()=>{
        console.log("uppercase was click" + text);
        let newtext = "";
        setText(newtext);

    }
    const handlespaces =()=>{
        console.log("uppercase was click" + text);

        let newtext = text.trim();
        setText(newtext);
        
    };
    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        }
        
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);

    }
    const [text, setText] = useState('');
    return (
        <>
        <div className= "Container">
            <h1> {props.heading}</h1>
            <div className="my-3">
            <label for="mybox" class="form-label"></label>
            <textarea className="form-control"  value={text} onChange= {handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUppercase}>Convert To UpperCase</button>
            <br />
            <button className="btn btn-danger my-3 " onClick={handleLowercase}>Convert To LowerCase</button>
            {/* <br/> */}
            <button className="btn btn-success mx-3 " onClick={handleClearcase}>Clear Text</button>
            <button className="btn btn-success mx-3 " onClick={handlespaces}>Handle spaces</button>
            <button className="btn btn-danger mx-3 " onClick={handleCopy}> Copy Text</button>




        </div>

        <div className="container">
            <h1>Your Text Summery Here!!</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minuits to read</p>

        </div>
        </>

            
        
    )
}
