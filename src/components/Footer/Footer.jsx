import React from "react";
import classes from "./Footer.module.css";
import instagram__logo from "../../assets/instagram.svg";
import facebook__logo from "../../assets/facebook.svg";
import { Link } from "react-router-dom";

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
          <Link to="/rules" className={classes.title}>Правила</Link>
          <div className={classes.title}>Отзывы</div>
          <Link to="/contacts" className={classes.title}>Контакты</Link>
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
