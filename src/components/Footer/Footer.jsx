import React from "react";
import classes from "./Footer.module.css";
import instagram__logo from "../../assets/instagram.svg";
import facebook__logo from "../../assets/facebook.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.rentbike}>
          <h4 className={classes.title}>Аренда велосипедов</h4>
          <ul className={classes.rentbike__list}>
            <li className={classes.rentbike__item}>Алюминий</li>
            <li className={classes.rentbike__item}>Карбон</li>
            <li className={classes.rentbike__item}>Горные/городские</li>
            <li className={classes.rentbike__item}>Городские эконом</li>
          </ul>
        </div>
        <div className={classes.links}>
          <div className={classes.title}>Правила</div>
          <div className={classes.title}>Отзывы</div>
          <div className={classes.title}>Контакты</div>
          <div className={classes.title}>Обратная связь</div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.copyright}>© BikePark, 2021</div>
          <div className={classes.policy}>Политика конфиденциальности</div>
          <div className={classes.media}>
            <img
              className={classes.logo}
              src={instagram__logo}
              alt="instagram logo"
            ></img>
            <img
              className={classes.logo}
              src={facebook__logo}
              alt="facebook logo"
            ></img>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
