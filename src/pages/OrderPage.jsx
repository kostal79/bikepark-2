import React from "react";
import OrderForm from "../components/orderForm/OrderForm";
import Bridge from "../components/Bridge/Bridge";
import UserSurvey from "../components/UserSurvey/UserSurvey";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { deliveryState } from "../redux/slices/deliverySlice";
import {
  selectedDateFinish,
  selectedDateStart,
  selectedTimeStart,
  selectedTimeFinish,
} from "../redux/slices/calendarSlice";
import { getUserId } from "../redux/slices/authSlice";
import makeNewOrder from "../Api/makeNewOrder";
import { useNavigate } from "react-router-dom";
import { getRentType } from "../redux/slices/rentTypeSlice";

const OrderPage = () => {
  const userId = useSelector(getUserId);
  const orderedBikes = useSelector((state) => state.orderedBikes.bikeForOrder);
  const deliveryType = useSelector(deliveryState);
  const dateStart = useSelector(selectedDateStart);
  const dateFinish = useSelector(selectedDateFinish);
  const timeStart = useSelector(selectedTimeStart);
  const timeFinish = useSelector(selectedTimeFinish);
  const navigate = useNavigate();
  const rentType = useSelector(getRentType)

  const initialValues = {
    dateOfOrder: (new Date()).toString(),
    dateStart: dateStart,
    dateFinish: dateFinish,
    timeStart: timeStart,
    timeFinish: timeFinish,
    bikes: orderedBikes,
    deliveryType: deliveryType,
    helmet: [],
    flashlighter: [],
    locker: [],
    name: "",
    phone: "",
    addres: "",
    "payment-type": "",
    id: userId,
    status: "в обработке",
    isPaid: false,
    rentType: rentType,
  };

  const makeOrder = async (orderInfo) => {
    await makeNewOrder(orderInfo);
    navigate("/account");
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
