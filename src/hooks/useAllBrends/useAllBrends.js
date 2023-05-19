import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import getAllCollection from "../../api/getAllCollection";

export function useAllBrends() {
    const [brends, setBrends] = useState();
    const brendsCollection = collection(db, "brends");
    useEffect(() => {
        getAllCollection(brendsCollection)
            .then((value) => value.map(doc => doc.brend))
            .then((value) => value.sort())
            .then((value) => ["Все"].concat(value))
            .then((value) => setBrends(value))
            .catch(error => console.error(error))
        // eslint-disable-next-line
    }, [])

    return brends
}