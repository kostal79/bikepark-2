import { doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { getDocument } from '../Api/getDocument';
import CurrentOrders from '../components/CurrentOrders/CurrentOrders';
import { db } from '../config/firebase';

const Account = () => {
    const docRef = doc(db, "orders", "7Yt6iiiUOPwJbnv1EKaq")
    const [orderData, setOrderData] = useState();
    useEffect( () => {
        async function getOrder(){
            const order = await getDocument(docRef);
            setOrderData(order)
        }
        getOrder()
    },[])

    if (orderData) {
        return (
            <div data-testid="account-page">
                <CurrentOrders {...orderData}/>
            </div>
        );
    }
};

export default Account