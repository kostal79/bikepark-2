import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export async function makeNewReview(review) {
    const collectionRef = collection(db, "reviews");
    try {
        await addDoc(collectionRef, review);
    } catch (error) {
        console.error(error)
    }
}