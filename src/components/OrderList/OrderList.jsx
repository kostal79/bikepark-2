import React from "react";
import { useSelector } from "react-redux";
import BikeInOrderList from "../BikeInOrderList/BikeInOrderList";
import classes from "./OrderList.module.css";
import { ReactComponent as Scroller } from "../../assets/scroller.svg";
import { useRef } from "react";
import BackArrow from "../back-arrow/BackArrow";
import dayBetween from "../../utils/dayBetween/dayBetween";

const OrderList = () => {
  const orderedBikesIds = useSelector(
    (state) => state.orderedBikes.bikeForOrder
  );
  const bikesList = useSelector((state) => state.searchResults.resultList);

  const dateFinish = useSelector((state) => state.calendar.dateFinish);
  const dateStart = useSelector((state) => state.calendar.dateStart);

  // eslint-disable-next-line
  const orderSum = orderedBikesIds.reduce((acc, id) => {
    for (let bike of bikesList) {
      if (id === bike.id) {
        return bike.price*dayBetween(dateStart, dateFinish) + acc;
      }
    }
  }, 0);

  const getBikeForId = (bikeList, id) => {
    // eslint-disable-next-line
    for (let [key, value] of Object.entries(bikeList)) {
      if (value.id === id) {
        return <BikeInOrderList {...value} />;
      }
    }
  };

  const orderedBikesList = orderedBikesIds.map((id) =>
    getBikeForId(bikesList, id)
  );

  const scrollRef = useRef(0);

  const scrollFunc = () => {
    const scrollField = document.querySelector(`.${classes.tableblock}`);
    const maxScroll = scrollField.scrollLeftMax;
    const shift = scrollField.scrollWidth / 4;
    scrollRef.current =
      scrollRef.current < maxScroll ? scrollRef.current + shift : 0;
    scrollField.scrollLeft = scrollRef.current;
  };

  return (
    <div className={classes.container}>
      <div className={classes.scroll} onClick={scrollFunc}>
        <Scroller />
      </div>
      <div className={classes.tableblock}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th className={classes.title}></th>
              <th className={classes.title}>Название велосипедов</th>
              <th className={classes.title}>Шлем</th>
              <th className={classes.title}>Фонарик</th>
              <th className={classes.title}>Замок</th>
              <th className={classes.title}>Стоимость</th>
            </tr>
          </thead>
          <tbody>{orderedBikesList}</tbody>
        </table>
      </div>
        <div className={classes.foot}>
          <div>
            <div className={classes.total}>
              <h4 className={classes.category}>Доставка</h4>
              <div className={classes["total-delivery"]}>0 AED</div>
            </div>
            <div className={classes.total}>
              <h4 className={classes.category}>Итого</h4>
              <div className={classes["total-price"]}>{orderSum} AED</div>
            </div>
          </div>
        <BackArrow />
        </div>
    </div>
  );
};

export default OrderList;
