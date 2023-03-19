import { addDoc, collection } from "firebase/firestore";

export default async function makeNewBike(bike, collectionRef) {
    try {
        const docRef = await addDoc(collectionRef, bike);
    } catch (error) {
        console.error(error)
    }
}