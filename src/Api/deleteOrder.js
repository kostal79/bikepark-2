import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export async function deleteOrder(orderId, userId){
    const orderRef = doc(db, "orders", orderId);
    const userRef = doc(db, "users", userId);
    try {
        await deleteDoc(orderRef);
        await updateDoc(userRef, {
            user_orders: arrayRemove(orderId)
        });
        console.log(`Order ${orderId} was deleted`)
    } catch (error) {
        console.error(error)
    }
}