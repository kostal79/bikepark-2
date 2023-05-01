import React from "react";
import classes from "./ContactsInfo.module.css"

const ContactsInfo = () => {
  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <h6 className={classes.title}>Номер телефона</h6>
        <p className={classes.text}>999 999 999 </p>
      </section>
      <section className={classes.section}>
        <h6 className={classes.title}>E-mail</h6>
        <p className={classes.text}>info@bikerental.ae</p>
      </section>
      <section className={classes.section}>
        <h6 className={classes.title}>Адрес шоурума</h6>
        <p className={classes.text}>Страна А, город Б, ул. АААА</p>
      </section>
    </div>
  );
};

export default ContactsInfo;
