import { collection, getCountFromServer, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import clearObjectFromEmptyValues from "../utils/clearObjectFromEmptyValues/clearObjectFromEmptyValues";

export async function getCountOrders (filterParams)  {
    filterParams = clearObjectFromEmptyValues(filterParams);
    const collectionRef = collection(db, "orders");

    const constraints = (() => {
        const filters = [];
        for (let [key, value] of Object.entries(filterParams)) {
            filters.push(where(key, "==", value))
        }
        return filters
    })();

    try {
        const q = query(collectionRef, ...constraints);
        const countSnapshot = await getCountFromServer(q);
        return countSnapshot.data().count;  
    } catch (error) {
        console.error(error)
    }
}