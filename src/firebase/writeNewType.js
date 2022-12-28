import { set, ref } from "firebase/database";
import { database } from "./firebase";

function writeNewType(type, text, price, image) {
    set(ref(database, `all_types/${type}/`), {
        text: text,
        price: price,
        image: image,
    });
}

export default writeNewType