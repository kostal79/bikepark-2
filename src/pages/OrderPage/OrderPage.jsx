import React, { useState } from "react";
import OrderForm from "./orderForm/OrderForm";
import Bridge from "@components/Bridge/Bridge";
import UserSurvey from "./UserSurvey/UserSurvey";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { deliveryState } from "@redux/slices/deliverySlice";
import { getOrderDates } from "@redux/slices/calendarSlice";
import { getUserData, getUserId } from "@redux/slices/authSlice";
import makeNewOrder from "@api/makeNewOrder";
import { getRentType } from "@redux/slices/rentTypeSlice";
import { setOrder } from "@redux/slices/orderSlice";
import dayBetween from "@utils/dayBetween/dayBetween";
import OrderProcessedTable from "./OrderProcessedTable/OrderProcessedTable";
import { clearOrder } from "@redux/slices/orderBikeSlice";
import { setResultList } from "@redux/slices/searchResultsSlice";

const OrderPage = () => {
  const userId = useSelector(getUserId);
  const orderedBikes = useSelector((state) => state.orderedBikes.bikeForOrder);
  const deliveryType = useSelector(deliveryState);
  const { dateStart, dateFinish, timeStart, timeFinish } =
    useSelector(getOrderDates);
  const rentType = useSelector(getRentType);
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();
  const [newOrderId, setNewOrderId] = useState();

  const initialValues = {
    dateOfOrder: new Date().toISOString().slice(0, 10),
    dateStart: dateStart,
    dateFinish: dateFinish,
    timeStart: timeStart,
    timeFinish: timeFinish,
    bikes: orderedBikes,
    deliveryType: deliveryType,
    helmet: [],
    flashlighter: [],
    locker: [],
    name: userData?.user_name,
    phone: userData?.user_phone,
    addres: "",
    payment_type: "",
    id: userId,
    status: "в обработке",
    isPaid: "не оплачен",
    rentType: rentType,
    returns_date: "",
    returns_time: "",
    returns_addres: "",
  };

  const makeOrderHandler = async (orderInfo) => {
    try {
      const amountOfDays = dayBetween(
        orderInfo.dateStart,
        orderInfo.dateFinish
      );

      const orderSum = orderInfo.bikes?.reduce((acc, bike) => {
        return Number(bike.price) * amountOfDays + acc;
      }, 0);

      orderInfo = { ...orderInfo, orderSum: orderSum };
      const DocId = await makeNewOrder(orderInfo);
      dispatch(setOrder(orderInfo));
      setNewOrderId(DocId);
      dispatch(clearOrder());
      dispatch(setResultList([]));
    } catch (error) {
      console.error(error);
    }
  };

  if (newOrderId) {
    return <OrderProcessedTable newOrderId={newOrderId} />;
  } else {
    return (
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            makeOrderHandler(values);
          }}
        >
          {(props) => (
            <Form>
              <OrderForm />
              <Bridge />
              <UserSurvey {...props} />
            </Form>
          )}
        </Formik>
      </div>
    );
  }
};

export default OrderPage;
