import React, { useCallback } from "react";
import classes from "./ErrorPage.module.css";
import BlueButton from "@components/BlueButton/BlueButton";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goBackHandler = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={classes.container} data-testid="errorPage-page">
      <h1 className={classes.title}>404</h1>
      <p className={classes.text}>
        The page does not exist or has not created yet
      </p>
      <BlueButton
        text="Back to main page"
        onClick={goBackHandler}
        height={60}
        width={260}
        fontSize={20}
      />
    </div>
  );
};

export default ErrorPage;
