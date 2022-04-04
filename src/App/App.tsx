import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      hello world
      <Button
        bgcolor="red"
        lorsqueLeButtonEstClicked={(arg: any) => {
          console.log(arg);
        }}
      >
        hello
      </Button>
      <Button
        bgcolor="blue"
        color="white"
        lorsqueLeButtonEstClicked={(arg: any) => {
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
