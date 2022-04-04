import React from 'react';
import './App.css';
import Button from './components/Button/Button';


function App() { 
  return (
    <div className="App"> 
      hello world
      <Button text="Texte bouton"
       bgcolor="red"
        lorsqueLeButtonEstClicked={(arg:any)=> {
        console.log(arg);
        }
      }
        />
      <Button text="benjamin" />
      <Button text="button"/> 
    </div>
  );
}

export default App;
