/*import "./App.css";
import React from "react";
import { useState } from "react";
let adjustInterval;
function App() {
  const [watch, setWatch] = useState(0);
  const [start, setStart] = useState(false);

  const startwatch = () => {
    function calculate() {}
    adjustInterval = setInterval(() => {
      setWatch((x) => x + 1);
      setStart(true);
    }, 1000);
  };

  const stopwatch = () => {
    clearInterval(adjustInterval);
    setStart(false);
  };

  const resetwatch = () => {
    setWatch(0);
    setStart(false);
    clearInterval(adjustInterval);
  };
  return (
    <div className="App">
      <h1>Start Stop Watch</h1>
      <h1>
        <span className="show">{watch}</span>
      </h1>
      <button
        className="start"
        disabled={start}
        onClick={() => {
          startwatch();
        }}
      >
        Start
      </button>
      <button
        className="stop"
        onClick={() => {
          stopwatch();
        }}
      >
        Stop
      </button>
      <button
        className="reset"
        onClick={() => {
          resetwatch();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;*/

/*import React from "react";
import { useState } from "react";
let interval;
function App(){
  const [watch,setWatch]=useState(0);


  const startwatch=()=>{
  
    interval=setInterval(()=>
    {
  
      setWatch((x)=>x+1);
      
    },1000);
  };

  const stopwatch=()=>{
    clearInterval(interval);
    
  };

  const resetwatch=()=>{
    setWatch(0);
    
    clearInterval(interval);

  };

  return (
    <div className="App">
      <h1>Start Stop watch</h1>
      <h1><span className="show">{watch}</span></h1>
      <button className="start"
      disabled={false}
      onClick={()=>{
        startwatch();
      } }
      >
      start
   </button>
   <button className="stop"  onClick={()=>{
 stopwatch();
   }}>

stop
   </button>

   <button className="reset" onClick={()=>{
  resetwatch();
}}>reset
   </button>

 </div>
  )
}
export default App;*/

import React from "react";
import { useState } from "react";
let interval;
function App() {
  const[watch,setwatch]=useState(0);

  const startwatch=() =>{
    interval=setInterval(()=>{
      setwatch((x)=>x+1);
    },1000)
  };

  const stopwatch =() =>{
    clearInterval(interval);
  };

  const resetwatch=()=>{
    setwatch(0);
    clearInterval(interval);
  };
  return(
    <div className="App">
      <h1>Start stop watch</h1>
      <h1><span className="show">{watch}</span></h1>
      <button className="start" disabled={false} onClick={()=>{startwatch();}}>start</button>
      <button className="stop" onClick={()=>{
        stopwatch();
      }}>stop</button>
      <button className="reset"  onClick={()=>{ resetwatch();}}>Reset</button>
    </div>
  )
}

export default App;