
import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDocument } from "../../Api/getDocument";
import CurrentOrders from "../../components/CurrentOrders/CurrentOrders";
import { db } from "../../config/firebase";

export function useUserOrders(uid) {
    const userRef = doc(db, 'users', uid);
    const [userOrders, setUserOrders] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        async function getOrders() {
            const user = await getDocument(userRef);
            const ordersIds = user.user_orders;
            const t = []
            for (let id of ordersIds) {
                const orderRef = doc(db, "orders", id);
                const order = await getDocument(orderRef);
                t.push(<CurrentOrders {...order} key={order.id}/>) 
            }
            setUserOrders(t)
            setLoaded(true);
        }
        getOrders();
    }, []);

    return [userOrders, loaded]
}