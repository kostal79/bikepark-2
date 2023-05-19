import { updateDoc } from "firebase/firestore";

export async function updateDocumentNested(docRef, updatedInfo) {
    try {
        updateDoc(docRef, updatedInfo);
        console.log("document was updated")
    } catch (error) {
        console.error(ErrorEvent)
    }
}