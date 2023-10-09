import React, { useState} from "react";
import './App.css';

function App() {
const[display , setDisplay] = useState('')
const handleClick = (value) =>{
    setDisplay(display + value)
}
const Result = () =>{
    try{
        const result = eval(display);
        setDisplay(result);
    }catch(error){
        setDisplay('ERROR')
    }
}
const allclear = () =>{

    setDisplay('')
}
const clear = () =>{
    setDisplay(display.slice(0, -1));
}
  return (
    <div className="App">
      <div className="App_calculator">
    
    
          
          <div className="display" id="display">{display}</div>
          <div className="buttons">
            <div className="row">
              <button className="col" onClick={()=>handleClick('1')}>1</button>
              <button className="col"onClick={()=>handleClick('2')}>2</button>
              <button className="col"onClick={()=>handleClick('3')}>3</button>
              <button className=" symbol"onClick={()=>handleClick('+')}>+</button>
            
            </div>
            <div className="row">
              <button className="col"onClick={()=>handleClick('4')}>4</button>
              <button className="col"onClick={()=>handleClick('5')}>5</button>
              <button className="col"onClick={()=>handleClick('6')}>6</button>
              <button className=" symbol"onClick={()=>handleClick('-')}>-</button>
            </div>
            <div className="row">
              <button className="col"onClick={()=>handleClick('7')}>7</button>
              <button className="col"onClick={()=>handleClick('8')}>8</button>
                  <button className="col"onClick={()=>handleClick('9')}>9</button>
              <button className=" symbol"onClick={()=>handleClick('*')}>*</button>
            </div>
            <div className="row">
              <button className="col"onClick={()=>handleClick('0')}>0</button>
              <button className="symbol"onClick={()=>handleClick('/')}>/</button>
              <button className="symbol"onClick={()=>handleClick('%')}>%</button>
              <button className=" symbol"onClick={()=>handleClick('1/X')}>1/x</button>
            </div>
            <div className="row">
              <button className=" allclear"onClick={allclear}>c</button>
              <button className="clear1"onClick={clear}>ce</button>
              <button className="delete"></button>
              <button className="symbol"onClick={Result}>=</button>

            </div>
            </div>
          </div>
        </div>
    
        
  );
}

export default App;
