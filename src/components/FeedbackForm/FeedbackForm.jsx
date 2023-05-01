import React from "react";
import classes from "./FeedbackForm.module.css";
import { Form, Formik } from "formik";
import AgreementConfirmation from "../AgreementConfirmation/AgreementConfirmation";
import RegistrationName from "../RegistrationName/RegistrationName";
import RegistrationPhone from "../RegistrationPhone/RegistrationPhone";
import BlueButton from "../BlueButton/BlueButton";
import { useDispatch } from "react-redux";
import { setPopupFeedback } from "../../redux/slices/popupSlice";

const FeedbackForm = () => {
  const initialValues = {
    user_name: "",
    user_phone: "",
    isConfirmed: false,
  };

  const dispatch = useDispatch();

  return (
    <div>
      <h6 className={classes.title}>Оставить заявку</h6>
      <p className={classes.text}>Остались вопросы? Свяжитесь с нами</p>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          dispatch(setPopupFeedback(false));
          actions.resetForm();
        }}
        handleReset={() => console.log("reset")}
      >
        <Form>
          <RegistrationName classes={classes} />

          <RegistrationPhone classes={classes} />

          <AgreementConfirmation />

          <BlueButton
            type="submit"
            text="Отправить"
            fontSize={18}
            height={60}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default FeedbackForm;
