import React from "react";
import AboutPng from "../../../assets/about.png"
import classes from "./AboutArticle.module.css"

const AboutArticle = () => {
  return (
    <article className={classes.container}>
      <h1 className={classes.header}>О нас</h1>
      <section className={classes.section}>
        <p className={classes.text}>
          Товарищи! постоянный количественный рост и сфера нашей активности
          позволяет выполнять важные задания по разработке направлений
          прогрессивного развития. Идейные соображения высшего порядка, а также
          постоянный количественный рост и сфера нашей активности играет важную
          роль в формировании позиций, занимаемых участниками в отношении
          поставленных задач. Таким образом дальнейшее развитие различных форм
          деятельности способствует подготовки и реализации позиций, занимаемых
          участниками в отношении поставленных задач.
        </p>
        <img className={classes.image} src={AboutPng} alt="bike race" />
      </section>
    </article>
  );
};

export default AboutArticle;
