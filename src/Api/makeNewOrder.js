import { addDoc, collection, doc, getDoc, increment, setDoc, updateDoc, } from "firebase/firestore";
import { db } from "../config/firebase";
import { getDocument } from "./getDocument";

export default async function makeNewOrder(orderInfo) {
    const collectionRef = collection(db, "orders");
    const numberRef = doc(db, "numbers", "In6f3UFw04qdikpdIQva")
    try {
        //get current number, save number in doc, increase number
        const snapshot = await getDocument(numberRef);
        const docNumber = snapshot.current_order_number;
        const docRef = await addDoc(collectionRef, { ...orderInfo, docNumber: docNumber });
        await updateDoc(numberRef, { current_order_number: increment(1) })

        //save doc number in user
        const userRef = doc(db, "users", orderInfo.id);
        const userSnap = await getDoc(userRef);
        const data = userSnap.data();
        data.user_orders = data.user_orders ? [...data.user_orders, docRef.id] : [docRef.id]
        await setDoc(userRef, data)
        return docRef.id
    } catch (error) {
        console.error(error)
    }
}