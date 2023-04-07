import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSignIn } from "../../redux/slices/modalSlice";
import CloseButton from "../Close-button/CloseButton";
import classes from "./Registration.module.css";
import ErrorPage from "../../pages/ErrorPage";
import SigninForm from "../SigninForm/SignInForm";
import NewMemberForm from "../NewMemberForm/NewMemberForm";
import { setActiveWindow } from "../../redux/slices/regFormSlice";
import Modal from "../Modal/Modal";

const Registration = () => {
  const activeForm = useSelector((state) => state.regform.activeWindow);
  const isModalActive = useSelector((state) => state.modal.isSignInIsActive);
  const dispatch = useDispatch();

  const tabHandler = (event) => {
    dispatch(setActiveWindow(event.target.value));
  };

  const closeModal = (event) => {
    if (event.target.className === `sign`) {
      dispatch(setSignIn(false));
    }
  };

  const closeButton = () => {
    dispatch(setSignIn(false));
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
  if (isModalActive) {
    return (
      <Modal>
        <div
          className="sign"
          onClick={(event) => closeModal(event)}
          style={{
            display: "flex",
            position: "fixed",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            justifyContent: "center",
            alignItems: "flex-start",
            overflow: "auto",
            padding: "3vh 0",
            zIndex: "2",
          }}
        >
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
        </div>
      </Modal>
    );
  }
};

export default Registration;
