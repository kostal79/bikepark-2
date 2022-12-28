import { child, get, ref } from "firebase/database";
import { database } from "./firebase";

async function readOnce(basePath) {
    console.log("readOnce started")
    const dbRef = ref(database)
    get(child(dbRef, basePath)).then((snapshot) => {
        if (snapshot.exists()) {
            let result = []
             for (let item of snapshot.val()) {
                console.log(item)
             };
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

export default readOnce