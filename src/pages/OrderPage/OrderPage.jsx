import React from "react";
import OrderForm from "../../components/orderForm/OrderForm";
import Bridge from "../../components/Bridge/Bridge";
import UserSurvey from "../../components/UserSurvey/UserSurvey";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { deliveryState } from "../../redux/slices/deliverySlice";
import {
  selectedDateFinish,
  selectedDateStart,
  selectedTimeStart,
  selectedTimeFinish,
} from "../../redux/slices/calendarSlice";
import { getUserData, getUserId } from "../../redux/slices/authSlice";
import makeNewOrder from "../../Api/makeNewOrder";
import { useNavigate } from "react-router-dom";
import { getRentType } from "../../redux/slices/rentTypeSlice";
import { setOrder } from "../../redux/slices/orderSlice";
import dayBetween from "../../utils/dayBetween/dayBetween";

const OrderPage = () => {
  const userId = useSelector(getUserId);
  const orderedBikes = useSelector((state) => state.orderedBikes.bikeForOrder);
  const deliveryType = useSelector(deliveryState);
  const dateStart = useSelector(selectedDateStart);
  const dateFinish = useSelector(selectedDateFinish);
  const timeStart = useSelector(selectedTimeStart);
  const timeFinish = useSelector(selectedTimeFinish);
  const navigate = useNavigate();
  const rentType = useSelector(getRentType);
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();

  const initialValues = {
    dateOfOrder: new Date().toString(),
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
    isPaid: false,
    rentType: rentType,
    returns_date: "",
    returns_time: "",
    returns_addres: "",
  };

  const makeOrder = async (orderInfo) => {
    try {
      const amountOfDays = dayBetween(orderInfo.dateStart, orderInfo.dateFinish);
  
      const orderSum = orderInfo.bikes?.reduce((acc, bike) => {
        return Number(bike.price) * amountOfDays + acc;
      }, 0);
  
      orderInfo = { ...orderInfo, orderSum: orderSum };
      await makeNewOrder(orderInfo);
      dispatch(setOrder(orderInfo));
      navigate("/processed");
    } catch (error) {
      console.error(error)
      navigate("/error")
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          makeOrder(values);
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
};

export default OrderPage;
