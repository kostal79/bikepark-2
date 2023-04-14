import { Field } from "formik";
import React, { useEffect } from "react";
import classes from "./UserSurvey.module.css";
import ButtonSpechBubble from "../ButtonSpechBubble/ButtonSpeachBubble";
import validateName from "../../utils/validateName/validateName";
import validatePhoneNumber from "../../utils/validatePhoneNumber/validatePhoneNumber";
import validateNotEmpty from "../../utils/validateName/validateNotEmpty";
import IMask from "imask";

const UserSurvey = ({ errors, touched }) => {
  useEffect(() => {
    const element = document.querySelector("#phone");
    const maskOptions = {
      mask: "+7 000-000-00-00",
    };
    IMask(element, maskOptions);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.contacts}>
        <h4 className={classes.title}>Контактные данные</h4>
        <section className={classes["contacts_section"]}>
          <Field
            className={`${classes.input} ${classes["contacts__name"]}`}
            type="text"
            name="name"
            placeholder="Имя*"
            validate={validateName}
          />
          {errors.name && touched.name && (
            <div className={classes.error}>{errors.name}</div>
          )}
        </section>
        <section className={classes["contacts_section"]}>
          <Field
            id="phone"
            className={`${classes.input} ${classes["conatacts__tel"]}`}
            type="tel"
            name="phone"
            placeholder="+7 XXX-XXX-XX-XX*"
            validate={validatePhoneNumber}
          />
          {errors.phone && touched.phone && (
            <div className={classes.error}>{errors.phone}</div>
          )}
        </section>
      </div>
      <div className={classes["delivery"]}>
        <h4 className={classes.title}>Информация о доставке</h4>
        <Field
          className={`${classes.input} ${classes["delivery__addres"]}`}
          type="text"
          name="addres"
          placeholder="Адрес*"
          validate={validateNotEmpty}
        />
        {errors.addres && touched.addres && (
          <div className={classes.error}>{errors.addres}</div>
        )}
      </div>
      <div className={classes["payment-type"]}>
        <h4 className={classes.title}>Форма оплаты</h4>
        <div
          className={classes["payment-button-group"]}
          role="group"
          aria-labelledby="payment-radio-group"
        >
          <label className={classes["radio-button"]}>
            <Field
              className={`${classes.input} ${classes["payment-radio"]}`}
              type="radio"
              name="payment-type"
              value="online"
              checked
            />
            Онлайн
          </label>
          <label className={classes["radio-button"]}>
            <Field
              className={`${classes.input} ${classes["payment-radio"]}`}
              type="radio"
              name="payment-type"
              value="on delivery"
            />
            На месте
            <div className={classes.bubble}>
              <ButtonSpechBubble description={"how to pay?"} />
            </div>
          </label>
        </div>
      </div>
      <div className={classes.returns}>
        <h4 className={classes.title}>Фактическая дата возврата велосипеда</h4>
        <Field
          className={`${classes.input} ${classes["returns__date"]}`}
          type="date"
          name="returns date"
        />
        <Field
          className={`${classes.input} ${classes["returns__time"]}`}
          type="time"
          name="returns time"
        />
        <Field
          className={`${classes.input} ${classes["returns__addres"]}`}
          type="text"
          name="returns addres"
          placeholder="Возврат по адресу"
        />
      </div>
      <article className={classes.infoblock}>
        <section className={classes.section}>
          <h4 className={classes.title}>Возвращение велосипеда</h4>
          <p className={classes.text}>
            На возвращение велосипеда даётся 1 час. Задача организации, в
            особенности же сложившаяся структура организации позволяет выполнять
            Важные задания по разработке позиций, занимаемых участниками в
            отношении поставленных задач.
          </p>
        </section>
        <section className={classes.section}>
          <h4 className={classes.title}>Выбор адреса для возврата</h4>
          <p className={classes.text}>
            Вы также можете ввести адрес другого места, где мы заберем у вас
            велосипед.
          </p>
        </section>
      </article>
      <button className={classes.button} type="submit">
        Забронировать
      </button>
    </div>
  );
};

export default UserSurvey;
