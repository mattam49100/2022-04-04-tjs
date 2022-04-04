import React from 'react'; 
import style from './Button.module.css'

function Button(props) { 
    console.log(props);
    return (
    <button className="Button" style={{backgroundColor: props.bgcolor}}>{props.text}</button>
    );
}
export default Button; 
