import { useEffect, useState } from "react";


export default function useFilterByBrend(allResults) {
    const [filteredByBrend, setFilteredByBrend] = useState([]);

    useEffect(() => setFilteredByBrend(allResults), [allResults]);

    const handleBrend = (event) => {
        let filteredArray;
        if (event.target.innerText === "Все") {
            filteredArray = allResults;
        } else {
            filteredArray = allResults.filter(
                (item) =>
                    item.brend === event.target.innerText
            );
        }
        setFilteredByBrend(filteredArray);
    };

    return ({
        filteredByBrend,
        handleBrend,
    })
}