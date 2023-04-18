import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUserData } from "../../redux/slices/authSlice";
import classes from "./AccountProfile.module.css";
import BlueButton from "../BlueButton/BlueButton";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import RegistrationPassword from "../RegistrationPassword/RegistrationPassword";
import RegistrationName from "../RegistrationName/RegistrationName";
import RegistrationEmail from "../RegistrationEmail/RegistrationEmail";
import RegistrationPhone from "../RegistrationPhone/RegistrationPhone";

const AccountProfile = () => {
  const [isUpdating, setIsUpdating] = useState(true);
  const userData = useSelector(getUserData);
  const { user_name, user_email, user_phone } = userData;
  const initialValues = {
    user_name: user_name,
    user_email: user_email,
    user_phone: user_phone,
    user_password: "",
    user_confirm_password: "",
  };

  if (!isUpdating) {
    return (
      <div className={classes.container}>
        <section className={classes.section}>
          <label className={classes.label}>Имя</label>
          <p className={classes.text}>{user_name}</p>
        </section>
        <section className={classes.section}>
          <label className={classes.label}>E-mail</label>
          <p className={classes.text}>{user_email}</p>
        </section>
        <section className={classes.section}>
          <label className={classes.label}>Номер телефона</label>
          <p className={classes.text}>{user_phone}</p>
        </section>
        <section className={classes.section}>
          <label className={classes.label}>Пароль</label>
          <p className={classes.text}>*****</p>
        </section>
        <BlueButton
          width="332"
          height="60"
          fontSize="18"
          text="Редактировать"
          onClick={() => setIsUpdating(!isUpdating)}
        />
      </div>
    );
  }

  return (
    <Formik
      enableReinitialize={true}
      onSubmit={(values) => console.log(values)}
      initialValues={initialValues}
    >
      {(formikProps) => (
        <Form>
          <div className={classes.block}>
            <RegistrationName classes={classes} />
            <RegistrationEmail classes={classes} />
            <RegistrationPhone classes={classes} />
            <h2 className={classes.subtitle}>Изменение пароля</h2>
            <RegistrationPassword classes={classes} formikprops={formikProps} />
            <div className={classes.button}>
              <ConfirmButton text="Сохранить" type="submit" />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AccountProfile;
