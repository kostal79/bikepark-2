import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import ReAuthForm from "@components/ReAuthForm/ReAuthForm";
import { setPopupReauthenticateUser } from "@redux/slices/popupSlice";
import PopupWithCloseCross from "@components/PopupWithCloseCross/PopupWithCloseCross";
import classes from "./PopupReautenticateUser.module.css";

const PopupReautenticateUser = (props) => {
  const dispatch = useDispatch();

  const closePopup = useCallback(() => {
    dispatch(setPopupReauthenticateUser(false));
  }, [dispatch]);

  return (
    <PopupWithCloseCross closePopup={closePopup}>
      <ReAuthForm />
    </PopupWithCloseCross>
  );
};

export default PopupReautenticateUser;
