import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    startAfter,
    where
} from "firebase/firestore";
import clearObjectFromEmptyValues from "../utils/clearObjectFromEmptyValues/clearObjectFromEmptyValues";
import { db } from "../config/firebase";

export default async function getOrdersData(filterParams, limitPerPage = 20, cursor) {
    filterParams = clearObjectFromEmptyValues(filterParams);
    const collectionRef = collection(db, "orders")
    const order = orderBy("docNumber", "desc");

    const constraints = (() => {
        const filters = [];
        for (let [key, value] of Object.entries(filterParams)) {
            filters.push(where(key, "==", value))
        }
        filters.push(order)
        filters.push(limit(limitPerPage))
        return filters
    })();

    if (cursor) {
        constraints.push(startAfter(cursor))
    };
    try {
        const q = query(collectionRef, ...constraints);
        const ordersData = await getDocs(q);
        return ordersData;
    } catch (error) {
        console.error(error)
    }
}