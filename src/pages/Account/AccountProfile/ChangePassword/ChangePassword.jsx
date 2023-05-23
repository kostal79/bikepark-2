import React, { useState } from "react";
import RegistrationPassword from "@components/RegistrationPassword/RegistrationPassword";

const ChangePassword = ({ classes, formikProps }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {isActive ? (
        <RegistrationPassword classes={classes} formikprops={formikProps} />
      ) : (
        <p className={classes.text} onClick={() => setIsActive(true)}>Изменить пароль</p>
      )}
    </>
  );
};

export default ChangePassword;
