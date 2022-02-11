import React from 'react'
// import Button from './Button';

export default function About(props) {

    // const [style, setStyle] = useState({color:"black", backgroundColor:"white", borderColor:"black"});
    // const [btnClass, setBtnClass] = useState("dark");
    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    
    // const darkOn = ()=>{
        // if(props.aboutMode === "dark"){
        //     setStyle({color:"white",backgroundColor:"black", borderColor:"white"});
        //     // setBtnClass("light");
        //     // setBtnText("Enable Light Mode");
        // }
        // else{
        //     setStyle({color:"black",backgroundColor:"white"});
        //     // setBtnClass("dark");
        //     // setBtnText("Enable Dark Mode");
        // }
        // setBtnFun({lightOn});
    // }

    let textcolor,bgcolor,bordercolor;

    if(props.mode === "dark"){
            // setStyle({color:"white",backgroundColor:"black", borderColor:"white"});
            textcolor = "light";
            bgcolor = "dark";
            bordercolor = "light";
    }
    else if(props.mode === "light"){
            // setStyle({color:"black",backgroundColor:"white", borderColor:"black"});
            textcolor = "dark";
            bgcolor = "light";
            bordercolor = "dark";
    }

    return (
        <>
        <div className={`container ${props.mode==="light"?"modeShadowDark":"modeShadowLight"} my-4 text-${textcolor} bg-${bgcolor} border border-${bordercolor}`}>
            <h2 className="my-3">About Us</h2>  
            <div className={`accordion my-3 text-${textcolor} bg-${bgcolor} border border-${bordercolor}`} id="accordionExample" >
                <div className={`accordion-item text-${textcolor} bg-${bgcolor} border border-${bordercolor}`} >
                    <h2 className="accordion-header" id="headingOne">
                    <button className={`accordion-button collapsed text-${textcolor} bg-${bgcolor} border border-${bordercolor}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className={`accordion-item text-${textcolor} bg-${bgcolor} border border-${bordercolor}`} >
                    <h2 className="accordion-header" id="headingTwo">
                    <button className={`accordion-button collapsed text-${textcolor} bg-${bgcolor} border border-${bordercolor}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className={`accordion-item text-${textcolor} bg-${bgcolor} border border-${bordercolor}`} >
                    <h2 className="accordion-header" id="headingThree">
                    <button className={`accordion-button collapsed text-${textcolor} bg-${bgcolor} border border-${bordercolor}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
{/* 
            <div className="container">
                <Button class={btnClass} fun={darkOn} text={btnText}/>
            </div> */}

        </div>

        </>
    )
}
