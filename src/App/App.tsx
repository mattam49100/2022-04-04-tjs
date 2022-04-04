import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [state, setstate] = useState(0)
 // let nbClicked=0;
  return (
    <div className="App">
      hello world : {state}
      <Button
        bgcolor="red"
        lorsqueLeButtonEstClicked={(arg: any) => {
          setstate(state+1)
         // console.log(arg);
          console.log(state); 
        }}
      >
        hello {state}
      </Button>
      <Button
        bgcolor="blue"
        color="white"
        lorsqueLeButtonEstClicked={(arg: any) => {
          setstate(state+1)
          console.log(arg); 
        }}
      >
        <div>hello avec div</div>
      </Button>
      <Button style={{border:'1px solid #000'}}>
        <div>div 1</div>
        <div>div 2</div> 
      </Button>
    </div>
  );
}

export default App;
