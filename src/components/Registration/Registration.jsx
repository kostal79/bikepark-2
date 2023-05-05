import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseButton from "../Close-button/CloseButton";
import classes from "./Registration.module.css";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import SigninForm from "../SigninForm/SignInForm";
import NewMemberForm from "../NewMemberForm/NewMemberForm";
import { setActiveWindow } from "../../redux/slices/regFormSlice";
import { setPopupSignIn } from "../../redux/slices/popupSlice";

const Registration = () => {
  const activeForm = useSelector((state) => state.regform.activeWindow);
  const dispatch = useDispatch();

  const tabHandler = (event) => {
    dispatch(setActiveWindow(event.target.value));
  };

  const closeModal = (event) => {
    if (event.target.className === `sign`) {
      dispatch(setPopupSignIn(false));
    }
  };

  const closeButton = () => {
    dispatch(setPopupSignIn(false));
  };

  const loadForm = () => {
    if (activeForm === "signin") {
      return <SigninForm />;
    } else if (activeForm === "register") {
      return <NewMemberForm />;
    } else if (activeForm === "recovery") {
      return <div>TODO RECOVERY FORM</div>;
    } else {
      return <ErrorPage />;
    }
  };
  return (
    <div className={classes.container}>
      <CloseButton onClick={closeButton} />
      <div className={classes.tabs}>
        <button
          className={
            activeForm === "signin"
              ? `${classes.tab} ${classes["tab--active"]}`
              : `${classes.tab}`
          }
          value="signin"
          onClick={tabHandler}
        >
          Вход
        </button>
        <button
          className={
            activeForm === "register"
              ? `${classes.tab} ${classes["tab--active"]}`
              : `${classes.tab}`
          }
          value="register"
          onClick={tabHandler}
        >
          Регистрация
        </button>
      </div>
      {loadForm()}
    </div>
  );
};

export default Registration;
