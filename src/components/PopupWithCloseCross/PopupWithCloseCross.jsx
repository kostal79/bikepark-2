import React from "react";
import Modal from "../Modal/Modal";
import classes from "./PopupWithCloseCross.module.css";
import {ReactComponent as CloseSvg} from "../../assets/close.svg"

const PopupWithCloseCross = (props) => {

  return (
    <Modal>
      <div className={classes.underlay}>
        <div className={classes.container}>
          {props.children}
          <CloseSvg className={classes.close} onClick={props.closePopup}/>
        </div>
      </div>
    </Modal>
  );
};

export default PopupWithCloseCross;