import React from 'react'
import OrderManagementFilters from '../../components/OrderManagementFilters/OrderManagementFilters';
import classes from "./Admin.module.css"

const Admin = () => {
    return (
        <div className={classes.container}>
            <div className={classes.container__upper}>
                <h1 className={classes.title}>Управление заказами</h1>
                <OrderManagementFilters />
            </div>
        </div>
    );
};

export default Admin