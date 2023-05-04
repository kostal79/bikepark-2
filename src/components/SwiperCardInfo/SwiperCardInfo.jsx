import React from "react";
import classes from "./SwiperCardInfo.module.css";

const SwiperCardInfo = (props) => {
  const {
    frameSize,
    type,
    material,
    weight,
    size,
    speedsAmount,
    shockAbsorber,
  } = props;

  return (
    <table className={classes.table}>
      <caption className={classes.caption}>
        City bike Schwinn Traveler CI003M/L
      </caption>
      <tbody className={classes.body}>
        <tr className={classes.tr}>
          <th className={classes.th}>Размер</th>
          <td className={classes.td}>{frameSize}</td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>Тип</th>
          <td className={classes.td}>{type}</td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>Материал рамы</th>
          <td className={classes.td}>{material}</td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>Вес велосипеда</th>
          <td className={classes.td}>{`${weight}kg / ${Math.round(Number(weight) * 2.205)} lb`}</td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>Диаметр колес</th>
          <td className={classes.td}>{`${size}"`}</td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>Кол-во скоростей</th>
          <td className={classes.td}>{speedsAmount}</td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>Амортизация</th>
          <td className={classes.td}>{shockAbsorber}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SwiperCardInfo;
