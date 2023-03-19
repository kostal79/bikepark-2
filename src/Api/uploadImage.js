import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase";

export default async function uploadImage(image) {
    const imageRef = ref(storage, `images/${image.name}`);
    try {
        await uploadBytes(imageRef, image);
        const imageURL = getDownloadURL(imageRef);
        return imageURL;
    } catch (error) {
        console.error(error)
    }

}

