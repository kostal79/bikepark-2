import React from "react";
import classes from "./OrderProcessedTableBody.module.css";
import BlueButton from "../../BlueButton/BlueButton";
import WhiteButton from "../../WhiteButton/WhiteButton";
import { useNavigate } from "react-router-dom";

const OrderProcessedTableBody = ({order}) => {
  // const order = useSelector(orderState);
  const orderSum = order.orderSum || "0";
  const navigate = useNavigate();

  const orderInfo = order.bikes.map((bike) => {
    return (
      <tr key={bike.id}>
        <td className={classes.td}>
          <img className={classes.image} src={bike.imageRef[0]} alt="bike" />
        </td>
        <td
          className={classes.td}
        >{`${bike.type} ${bike.name} ${bike.model} ${bike.size}'`}</td>
        <td className={classes.td}>{`${bike.price} AED`}</td>
      </tr>
    );
  });

  return (
    <>
      <table className={classes.table}>
        <thead className={classes.head}>
          <tr className={classes.tr}>
            <th className={classes.th}></th>
            <th className={classes.th}>Название велосипедов</th>
            <th className={classes.th}>Стоимость</th>
          </tr>
        </thead>
        <tbody className={classes.tbody}>{orderInfo}</tbody>
        <tfoot className={classes.tfoot}>
          <tr>
            <th className={classes.th} colSpan={2}>
              Доставка
            </th>
            <td className={classes.td}>0 AED</td>
          </tr>
          <tr>
            <th className={classes.th} colSpan={2}>
              Итого
            </th>
            <td className={classes.td}>{`${orderSum} AED`}</td>
          </tr>
        </tfoot>
      </table>
      <div className={classes.buttons}>
        <BlueButton
          width={240}
          height={60}
          text={"В личный кабинет"}
          fontSize={18}
          onClick={() => navigate("/account")}
        />
        <WhiteButton
          width={240}
          height={60}
          text={"Назад на главную"}
          fontSize={18}
          onClick={() => navigate("/")}
        />
      </div>
    </>
  );
};

export default OrderProcessedTableBody;
