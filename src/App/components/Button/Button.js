import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

function Button(props) {
  console.log(props);
  return (
    <button
      onClick={(evt) => {
        props.lorsqueLeButtonEstClicked("Hello");
      }}
      className={style.Button}
      style={{ ...props.style, backgroundColor: props.bgcolor, color: props.color }}
      type={props.type}
    >
      {props.children}
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
  bgcolor: "red",
  color: "white",
};
export default Button;
