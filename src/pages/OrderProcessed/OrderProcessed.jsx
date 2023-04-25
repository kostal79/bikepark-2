import React from 'react'
import classes from "./OrderProcessed.module.css"
import OrderProcessedTable from '../../components/OrderProcessedTable/OrderProcessedTable';

const OrderProcessed = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Ваш заказ успешно<br />оформлен</h1>
            <OrderProcessedTable />
        </div>
    );
};

export default OrderProcessed