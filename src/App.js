import './App.css';
import React from "react";
import {useState} from "react"  // стейт через хуки

function App() {

  let textInput = React.createRef()
  let textOut = React.createRef()


  const [output, setOutput] = useState("hello") // хук, метод, внутри usestate можно ввести значение по умолчанию, нам пример Hello


  function f1(arg) {
    console.log("f1 works" + arg)
  }

  function showInput(e) {
    // console.log( e.target.value)
    // console.log(textInput.current.value)
    // textOut.current.innerHTML = textInput.current.value
    setOutput(textInput.current.value)      //используем метод setOutput
  }
  
  return (
    <>
      <h1> События</h1>
      section
      <section>
        <h2>button</h2>
        <button onClick={()=>f1(" first")}>push</button>
      </section>

      <section>
        <h2>duble click + mouse move</h2>
        <div className="test" onDoubleClick={()=>f1(" second")} >

        </div>
      </section>
      <section>
        <h3>input</h3>
        <input type="text" onInput={showInput} ref={textInput} defaultValue="hi" />
        <p ref={textOut}></p>
        <h4>{output}</h4> {/* в h4 укакзано значение из стейт */}
        
      </section>
    </>
  );
}

export default App;
