import { collection, getDocs, query, where, orderBy, limit, getCountFromServer, startAt, startAfter } from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../../config/firebase";

export const useAllUserOrders = (searchParams, ordersPerPage) => {
    console.log(ordersPerPage)
    const collectionRef = collection(db, "orders");
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const queries = []
    for (let [key, value] of Object.entries(searchParams)) {
        queries.push(where(key, "==", value))
    }

    const getOrders = useCallback(async () => {
        setIsLoading(true)
        const all = [];
        console.log(ordersPerPage)
        const ordersQuery = query(collectionRef, ...queries, orderBy("docNumber", "desc"), limit(ordersPerPage));
        const ordersQuerySnapshots = await getDocs(ordersQuery);
        // const countSnapshot = await getCountFromServer(ordersQuery);
        // const lastVisible = ordersPerPage * (page - 1)
        // const countPages = Math.ceil(countSnapshot.data().count / ordersPerPage);
        ordersQuerySnapshots.forEach((doc) => {
            if (doc.id !== "orderNumberHandler") {
                all.push({ ...doc.data(), docId: doc.id })
            }
        });
        setOrders(all);
        setIsLoading(false)
    }, [searchParams])
    return [orders, getOrders, isLoading]
}