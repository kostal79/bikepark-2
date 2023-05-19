import { addDoc } from "firebase/firestore";

export default async function makeNewBike(bike, collectionRef) {
    try {
        await addDoc(collectionRef, bike);
    } catch (error) {
        console.error(error)
    }
}