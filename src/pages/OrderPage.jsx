import React from "react";
import OrderForm from "../components/orderForm/OrderForm";
import Bridge from "../components/Bridge/Bridge";
import UserSurvey from "../components/UserSurvey/UserSurvey";
import { Form, Formik } from "formik";

const OrderPage = () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <div>
      <Formik
        initialValues={{
          helmet: [],
          flashlighter: [],
          locker: [],
          name: "",
          phone: "",
          addres: "",
          "payment-type": ""
        }}
        onSubmit={async (values) => {
          await sleep(500);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(props) => (
          <Form>
            <OrderForm />
            <Bridge />
            <UserSurvey {...props}/>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderPage;
