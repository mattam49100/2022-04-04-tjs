import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./MemeForm.module.scss";
import { I_Image, I_Meme } from "../../interfaces/common";
import Button from "../Button/Button";

//const initialState={};
interface I_MemeFormProps {
  currentMeme: I_Meme;
  images: Array<I_Image>;
  onInputValueChange: Function;
}
const MemeForm: React.FC<I_MemeFormProps> = (props) => {
  //const [state, setstate] = useState(initialState)
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      <form onSubmit={(evt)=>{
        evt.preventDefault();
      }}>
        <input
          type="text"
          name="meme_text"
          id=""
          placeholder="texte du meme"
          value={props.currentMeme.text}
          onChange={(evt) => {
            props.onInputValueChange({ text: evt.target.value });
          }}
        />
        <div className="flexCol">
          <Button type="submit" bgcolor="skyblue">
            Valider
          </Button>
          <Button type="reset" bgcolor="tomato">
            Valider
          </Button>
        </div>
      </form>
    </div>
  );
};

//MemeForm.propTypes = {}
//MemeForm.defaultProps = {}

export default MemeForm;
