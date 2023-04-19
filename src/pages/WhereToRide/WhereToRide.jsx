import React from "react";
import cityPhoto from "../../assets/city.png";
import classes from "./WhereToRide.module.css";

const WhereToRide = () => {
  return (
    <div data-testid="wheretoride-page" className={classes.container}>
      <h1 className={classes.title}>Где кататься</h1>
      <article className={classes.article}>
        <section className={`${classes.section} ${classes["section--1"]}`}>
          <h4 className={classes.subtitle}>Условия аренды</h4>
          <p className={classes.text}>
            Товарищи! постоянный количественный рост и сфера нашей активности
            позволяет выполнять важные задания по разработке направлений
            прогрессивного развития. Идейные соображения высшего порядка, а
            также постоянный количественный рост и сфера нашей активности играет
            важную роль в формировании позиций, занимаемых участниками в
            отношении поставленных задач.
            <br />
            <br />
            Таким образом дальнейшее развитие различных форм деятельности
            способствует подготовки и реализации позиций, занимаемых участниками
            в отношении поставленных задач.
          </p>
        </section>
        <section className={`${classes.section} ${classes["section--2"]}`}>
          <div className={classes.img}/>
          <div className={classes.img}/>
          <div className={classes.img}/>
        </section>
      </article>
      <article className={classes.article}>
        <section className={`${classes.section} ${classes["section--3"]}`}>
          <h4 className={classes.subtitle}>Условия аренды</h4>
          <p className={classes.text}>
            Товарищи! постоянный количественный рост и сфера нашей активности
            позволяет выполнять важные задания по разработке направлений
            прогрессивного развития. Идейные соображения высшего порядка, а
            также постоянный количественный рост и сфера нашей активности играет
            важную роль в формировании позиций, занимаемых участниками в
            отношении поставленных задач.
            <br />
            Таким образом дальнейшее развитие различных форм деятельности
            способствует подготовки и реализации позиций, занимаемых участниками
            в отношении поставленных задач.
          </p>
          <div className={classes.img} />
        </section>
      </article>
      <article className={classes.article}>
        <h4 className={classes.subtitle}>Заголовок</h4>
        <section className={`${classes.section} ${classes["section--4"]}`}>
          <div className={classes.img} />
          <p className={classes.text}>
            Товарищи! постоянный количественный рост и сфера нашей активности
            позволяет
          </p>
        </section>
        <section className={`${classes.section} ${classes["section--5"]}`}>
          <div className={classes.img} />
          <p className={classes.text}>
            Товарищи! постоянный количественный рост и сфера нашей активности
            позволяет
          </p>
        </section>
        <section className={`${classes.section} ${classes["section--6"]}`}>
          <div className={classes.img} />
          <p className={classes.text}>
            Товарищи! постоянный количественный рост и сфера нашей активности
            позволяет
          </p>
        </section>
        <section className={`${classes.section} ${classes["section--7"]}`}>
          <div className={classes.img} />
          <p className={classes.text}>
            Товарищи! постоянный количественный рост и сфера нашей активности
            позволяет
          </p>
        </section>
      </article>
    </div>
  );
};

export default WhereToRide;
