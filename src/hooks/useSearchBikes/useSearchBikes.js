import { collection, limit, query, where } from "firebase/firestore";
import getAllCollection from "../../Api/getAllCollection";
import { useDispatch, useSelector } from "react-redux";
import { bikesTypes } from "../../redux/slices/bikeSlice";
import { db } from "../../config/firebase";
import { useCallback, useState } from "react";
import { setResultList } from "../../redux/slices/searchResultsSlice";

export default function useSearchBikes() {
    const selectedBikeTypes = useSelector(bikesTypes);
    const [isLoading, setIsLoading] = useState(false);
    const collectionRef = collection(db, "bikes");
    const dispatch = useDispatch();

    const getBikes = useCallback(async (amount, brend = "Все", size = "Все") => {
        setIsLoading(true)
        if (selectedBikeTypes.length > 0) {
            let q;
            if (brend === "Все" && size === "Все") {
                q = query(collectionRef,
                    where("type", "in", selectedBikeTypes),
                    limit(amount));
            } else if (brend === "Все" && size !== "Все") {
                q = query(collectionRef,
                    where("type", "in", selectedBikeTypes),
                    where("size", "==", size),
                    limit(amount));

            } else if (brend !== "Все" && size === "Все") {
                q = query(collectionRef,
                    where("type", "in", selectedBikeTypes),
                    where("brend", "==", brend),
                    limit(amount));

            } else {
                q = query(collectionRef,
                    where("type", "in", selectedBikeTypes),
                    where("brend", "==", brend),
                    where("size", "==", size), limit(amount));

            }
            const searchResults = await getAllCollection(q);
            dispatch(setResultList(searchResults));
        }
        setIsLoading(false)
    }, [selectedBikeTypes, collectionRef, dispatch]);

    return [isLoading, getBikes]
}