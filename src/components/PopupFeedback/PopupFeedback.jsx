import React from "react";
import Modal from "../Modal/Modal";
import classes from "./PopupFeedback.module.css";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import {ReactComponent as CloseSvg} from "../../assets/close.svg"
import { useDispatch } from "react-redux";
import { setPopupFeedback } from "../../redux/slices/popupSlice";

const PopupFeedback = () => {
    const dispatch = useDispatch();
    const closePopup = () => {
        dispatch(setPopupFeedback(false))
    }
  return (
    <Modal>
      <div className={classes.underlay}>
        <div className={classes.container}>
          <FeedbackForm />
          <CloseSvg className={classes.close} onClick={closePopup}/>
        </div>
      </div>
    </Modal>
  );
};

export default PopupFeedback;
