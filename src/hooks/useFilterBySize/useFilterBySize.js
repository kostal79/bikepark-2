import { useEffect, useState } from "react";


export default function useFilterBySize(allResults) {
    const [filteredBySize, setFilteredBySize] = useState();

    useEffect(() => setFilteredBySize(allResults), [allResults]);

    const handleSize = (event) => {
        let filteredArray;
        if (event.target.innerText === "Все") {
            filteredArray = allResults;

        } else {
            filteredArray = allResults.filter(
                (item) =>
                    item.size === event.target.innerText
            );
        }
        setFilteredBySize(filteredArray);
    }


    return ({
        filteredBySize,
        handleSize,
    })
}