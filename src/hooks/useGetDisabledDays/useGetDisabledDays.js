import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDocument } from "../../api/getDocument";

export default function useGetDisabledDays(bikeId) {
    const [disabledDays, setDisabledDays] = useState([])
    const bikeRef = doc(db, "bikes", bikeId)

    useEffect(() => {
        async function getDateArray() {
            const info = await getDocument(bikeRef);
            setDisabledDays(info.bookedDates);
        }
        getDateArray();
    }, [bikeRef]);


    return disabledDays
}