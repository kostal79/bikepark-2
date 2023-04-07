import React, { useState } from "react";
import OrderForm from "../components/orderForm/OrderForm";
import Bridge from "../components/Bridge/Bridge";
import UserSurvey from "../components/UserSurvey/UserSurvey";
import { Form, Formik } from "formik";
import Registration from "../components/Registration/Registration";
import { useDispatch, useSelector } from "react-redux";
import { setSignIn } from "../redux/slices/modalSlice";
import useGetAuth from "../hooks/useGetAuth/useGetAuth";
import { deliveryState } from "../redux/slices/deliverySlice";
import { selectedDateFinish, selectedDateStart, selectedTimeStart, selectedTimeFinish } from "../redux/slices/calendarSlice";
import getStringDate from "../utils/getStringDate";

const OrderPage = () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const [isAuth, error, userId] = useGetAuth();
  const dispatch = useDispatch();
  const orderedBikes = useSelector((state) => state.orderedBikes.bikeForOrder);
  const deliveryType = useSelector(deliveryState)
  const [submited, setSubmited] = useState(false);
  const dateStart = getStringDate(useSelector(selectedDateStart));
  const dateFinish = getStringDate(useSelector(selectedDateFinish));
  const timeStart = useSelector(selectedTimeStart);
  const timeFinish = useSelector(selectedTimeFinish);

  const initialValues = {
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
  }

  if (isAuth && !submited) {
    dispatch(setSignIn(false))

    return (
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await sleep(500);
            console.log(values);
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
  } else if (isAuth && submited){
    //TODO
  } else {
    dispatch(setSignIn(true));
    return <Registration />;

  }
};

export default OrderPage;
