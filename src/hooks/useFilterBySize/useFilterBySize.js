import { useEffect, useState } from "react";


export default function useFilterBySize(allResults) {
    const [size, setSize] = useState("Все");
    const [filteredBySize, setFilteredBySize] = useState();

    useEffect(() => setFilteredBySize(allResults), [allResults]);

    const handleSize = (event) => {
        let filteredArray;
        if (event.target.value === "Все") {
            filteredArray = allResults;

        } else {
            filteredArray = allResults.filter(
                (item) =>
                    item.size === event.target.value
            );
        }
        setFilteredBySize(filteredArray);
    }


    return ({
        filteredBySize,
        size,
        setSize,
        handleSize,
    })
}