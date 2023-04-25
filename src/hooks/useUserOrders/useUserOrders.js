
import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDocument } from "../../Api/getDocument";
import CurrentOrders from "../../components/CurrentOrders/CurrentOrders";
import { db } from "../../config/firebase";

export function useUserOrders(uid) {
    const userRef = doc(db, 'users', uid);
    const [ordersCurrent, setOrdersCurrent] = useState([]);
    const [ordersComplited, setOrdersComplited] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        async function getOrders() {
            const user = await getDocument(userRef);
            if (user.user_orders !== undefined && user.user_orders.length > 0) {
                const ordersIds = user.user_orders;
                const tempCurrent = [];
                const tempComplited = [];
                for (let id of ordersIds) {
                    const orderRef = doc(db, "orders", id);
                    const order = await getDocument(orderRef);
                    if (order.status === "завершен") {
                        tempComplited.push(<CurrentOrders {...order} orderId={id} key={id} />)
                    } else {
                        tempCurrent.push(<CurrentOrders {...order} orderId={id} key={id} />)
                    }
                }
                setOrdersCurrent(tempCurrent.reverse());
                tempComplited.length > 0 ?
                setOrdersComplited(tempComplited.reverse()) :
                setOrdersComplited(<p style={{ textAlign: "center", marginTop: "20px", fontWeight: "600" }}>У вас еще нет завершенных заказов</p>);
            } else {
                setOrdersCurrent(<p style={{ textAlign: "center", marginTop: "20px", fontWeight: "600" }}>У вас еще нет заказов</p>)
                setOrdersComplited(<p style={{ textAlign: "center", marginTop: "20px", fontWeight: "600" }}>У вас еще нет завершенных заказов</p>);
            }
            setLoaded(true);
        }
        getOrders();
    }, []);

    return [ordersCurrent, ordersComplited, loaded]
}