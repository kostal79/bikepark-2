import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

export async function getReviews() {
    try {
        const collectionRef = collection(db, "reviews");
        const q = query(collectionRef, where("is_published", "==", true));
        const data = await getDocs(q);
        return data.docs.map(((doc) => ({ ...doc.data(), id: doc.id })))

    } catch (error) {
        console.error(error)
    }
}