import React from "react";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import PopupWithCloseCross from "../PopupWithCloseCross/PopupWithCloseCross";
import { useDispatch } from "react-redux";
import { setPopupFeedback } from "../../redux/slices/popupSlice";

const PopupFeedback = () => {
  const dispatch = useDispatch();
  const closePopup = () => {
      dispatch(setPopupFeedback(false))
  }
  return (
    <PopupWithCloseCross closePopup={closePopup}>
      <FeedbackForm />
    </PopupWithCloseCross>
  );
};

export default PopupFeedback;
