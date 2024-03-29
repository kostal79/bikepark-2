
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDocument } from "@api/getDocument";
import CurrentOrders from "@components/CurrentOrders/CurrentOrders";
import { db } from "../../config/firebase";

export function useUserOrders(uid) {
    const [ordersCurrent, setOrdersCurrent] = useState([]);
    const [ordersComplited, setOrdersComplited] = useState([])
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        const userRef = doc(db, 'users', uid);

        const userListener = async () => {
            onSnapshot(userRef, (snapshot) => getOrders(snapshot))
        }

        async function getOrders(userDocument) {
            if (userDocument.data().user_orders !== undefined && userDocument.data().user_orders.length > 0) {
                const ordersIds = userDocument.data().user_orders;
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
        userListener()
    }, [uid])




    return [ordersCurrent, ordersComplited, loaded, ]
}