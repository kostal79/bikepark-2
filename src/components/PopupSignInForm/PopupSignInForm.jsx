import React from "react";
import Registration from "../Registration/Registration";
import classes from "./PopupSignIn.module.css"
import Modal from "../Modal/Modal";

const PopupSignInForm = () => {
  return (
    <Modal>
      <div className={classes.underlay}>
        <Registration />
      </div>
    </Modal>
  );
};

export default PopupSignInForm;
