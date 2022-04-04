import React, { useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

function Button(props) {
  console.log(props);
  const [clicked, setClicked] = useState(false)
  return (
    <button
      onClick={(evt) => {
          setClicked(true);
          setTimeout(()=>{
              setClicked(false);
          },1000)
        props.lorsqueLeButtonEstClicked();
      }}
      className={style.Button}
      style={{ ...props.style, backgroundColor: props.bgcolor, color: props.color }}
      type={props.type}
    >
      {props.children}
      <br/>
      {clicked?'clicked':'unclicked'}
    </button>
  );
}
Button.propTypes = {
  //text: PropTypes.string,
  lorsqueLeButtonEstClicked: PropTypes.func.isRequired,
  style : PropTypes.object,
  bgcolor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
  lorsqueLeButtonEstClicked: () => {
    console.warn("fonction du button undefined");
  },
  bgcolor: "green",
  color: "white",
};
export default Button;
