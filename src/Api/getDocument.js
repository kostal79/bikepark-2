import { getDoc } from "firebase/firestore";


export async function getDocument(docRef) {
    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            throw new Error("No such document")
        }
    } catch (error) {
        console.error(error)
    }
}

