import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUserData } from "@redux/slices/authSlice";
import classes from "./AccountProfile.module.css";
import BlueButton from "@components/BlueButton/BlueButton";
import ConfirmButton from "@components/ConfirmButton/ConfirmButton";
import RegistrationPassword from "@components/RegistrationPassword/RegistrationPassword";
import RegistrationName from "@components/RegistrationName/RegistrationName";
import RegistrationEmail from "@components/RegistrationEmail/RegistrationEmail";
import RegistrationPhone from "@components/RegistrationPhone/RegistrationPhone";
// import { doc } from "firebase/firestore";
// import { db } from "../../config/firebase";
// import { getUserId } from "@redux/slices/authSlice";
// import { updateDocumentNested } from "@api/update_document_nested";
// import { authUpdateUserEmail } from "@api/auth_update_user_email";
// import { authUpdatePassword } from "@api/auth_update_password";
// import { authUpdateUserName } from "@api/auth_update_user_name";

const AccountProfile = () => {
  const [isUpdating, setIsUpdating] = useState(true);
  // const userId = useSelector(getUserId);
  const userData = useSelector(getUserData);
  const { user_name, user_email, user_phone } = userData;
  const initialValues = {
    user_name: user_name,
    user_email: user_email,
    user_phone: user_phone,
    user_password: "",
    user_confirm_password: "",
  };

  const updateProfile = async (values) => {
    alert("TODO")
    // const email = values.user_email;
    // const password = values.user_password;
    // const docRef = doc(db, "users", userId);
    // const updatedInfo = { user_phone: values.user_phone };
    // const newName = values.user_name;
    // if (values.user_phone !== user_phone){
    //   await updateDocumentNested(docRef, updatedInfo)
    // }
    // if (values.user_email !== user_email) {
    //   await authUpdateUserEmail(email, docRef)
    // }
    // if (values.user_name !== user_name) {
    //   await authUpdateUserName(docRef, newName)
    // }
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
      onSubmit={(values) => updateProfile(values)}
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
