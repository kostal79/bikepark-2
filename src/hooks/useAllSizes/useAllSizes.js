import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import getAllCollection from "../../Api/getAllCollection";

export function useAllSizes() {
    const [sizes, setSizes] = useState();
    const sizeCollection = collection(db, "sizes");
    useEffect(() => {
        getAllCollection(sizeCollection)
            .then((value) => value.map(doc => doc.size))
            .then((value) => value.sort((a, b) => Number(a) - Number(b)))
            .then((value) => ["Все"].concat(value))
            .then((value) => setSizes(value))
            .catch(error => console.error(error))
        // eslint-disable-next-line
    }, [])
    return sizes
}