import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

function Button(props) {
  const [clicked, setClicked] = useState(false);
  //observation des changement / montage de la valeur
  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 500);
    }
  }, [clicked]);

  // cmp dit mount
  useEffect(() => {
      console.log('le composant est monté')
  }, []);

  console.log(props);
  return (
    <button
      onClick={(evt) => {
          // modif async d une valeur d'état
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 1000);
        props.lorsqueLeButtonEstClicked();
      }}
      //une ternaire
      //className={style.Button+(clicked?' '+style.clicked:'')}
      className={`${style.Button}${clicked ? " " + style.clicked : ""}`}
      //className={style.Button}
      style={{
        ...props.style,
        backgroundColor: props.bgcolor,
        color: props.color,
      }}
      type={props.type}
    >
      {props.children}
      <br />
    </button>
  );
}
Button.propTypes = {
  //text: PropTypes.string,
  lorsqueLeButtonEstClicked: PropTypes.func.isRequired,
  style: PropTypes.object,
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
