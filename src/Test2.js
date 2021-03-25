import React,  {useState, useEffect} from "react";


function Test2(props) {
    const[s1, setS1]= useState(props.argu)

    const buttonHandler = () => {
        let value = s1;
        value++;
        setS1(value)
    }

    useEffect(()=> {
        console.log("use effect")
    })
        
    
    console.log("render 1")

    return (
        <>
            { console.log("render 2") }
            < button onClick = { buttonHandler } > Push</button >
            <p>{s1}</p>
        
        </>
    )
}

export default Test2;