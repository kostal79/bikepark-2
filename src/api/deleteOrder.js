import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { getDocument } from "./getDocument";

export async function deleteOrder(orderId, userId){
    const orderRef = doc(db, "orders", orderId);
    const userRef = doc(db, "users", userId);
    try {
        //remove order from user
        await updateDoc(userRef, {
            user_orders: arrayRemove(orderId)
        });
        //remove booked period from bikes
        const orderData = await getDocument(orderRef);
        const bikesInOrder = orderData.bikes;
        for (let bike of bikesInOrder) {
            const bikeRef = doc(db, "bikes", bike.id)
            const bookedPeriod = bike.bookedDates;
            console.log(bookedPeriod)
            await updateDoc(bikeRef, {
                bookedDates: arrayRemove(...bookedPeriod)
            })
        }
        //remove order
        await deleteDoc(orderRef);
        console.log(`Order ${orderId} was deleted`)
    } catch (error) {
        console.error(error)
    }
}