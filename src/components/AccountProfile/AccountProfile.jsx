import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUserData } from "../../redux/slices/authSlice";
import classes from "./AccountProfile.module.css";
import { validateEmail } from "../../utils/validateEmail/validateEmail";
import BlueButton from "../BlueButton/BlueButton";

const AccountProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const userData = useSelector(getUserData);
  console.log(userData)
  const {user_name, user_email, user_phone} = userData;


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
        <BlueButton height="60" fontSize="18" text="Редактировать" />
      </div>
    );
  }

  return (
    <Formik
      enableReinitialize={true}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <section className={classes.section}>
          <label htmlFor="name_first">Имя</label>
          <Field type="text" name="name_first" />
        </section>
        <section className={classes.section}>
          <label htmlFor="email">E-mail</label>
          <Field type="email" name="email" validate={validateEmail} />
        </section>
        <section className={classes.section}>
          <label htmlFor="phone_number">Номер телефона</label>
          <Field id="phone" type="tel" name="phone_number" />
        </section>
        <section className={classes.section}>
          <label htmlFor="password">Пароль</label>
          <Field name="user_password" />
        </section>
        <Field className={classes.button} type="submit" />
      </Form>
    </Formik>
  );
};

export default AccountProfile;
