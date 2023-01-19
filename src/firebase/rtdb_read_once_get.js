import { child, get, ref } from "firebase/database";
import { database } from "./firebase";

async function readOnce(basePath) {
    console.log("readOnce started")
    const dbRef = ref(database)
    get(child(dbRef, basePath)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log("readOnce finished")
           console.log(snapshot.val())
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

export default readOnce