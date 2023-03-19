import { getDocs } from "firebase/firestore"


export default async function getAllCollection(collection) {
    try {
        const data = await getDocs(collection);
        console.log(data.docs)
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))  
        return filteredData;
    } catch (error) {
        console.error(error)
    }
}