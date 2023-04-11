import { addDoc, collection, doc, getCountFromServer, getDoc, setDoc, } from "firebase/firestore";
import { db } from "../config/firebase";

export default async function makeNewOrder(orderInfo) {
    const collectionRef = collection(db, "orders");
    try {
        const snapshot = await getCountFromServer(collectionRef);
        const docNumber =  snapshot.data().count;
        const docRef = await addDoc(collectionRef, {...orderInfo, docNumber: docNumber});
        const userRef = doc(db, "users", orderInfo.id);
        //get collection length and make a number

        const userSnap = await getDoc(userRef);
        const data = userSnap.data();
        data.user_orders = data.user_orders ? [...data.user_orders, docRef.id] : [docRef.id]
        await setDoc(userRef, data)
        console.log("new order created")
    } catch (error) {
        console.error(error)
    }
}