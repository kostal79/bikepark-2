import { useEffect, useState } from "react";


export default function useFilterByBrend(allResults) {
    const [brend, setBrend] = useState("Все");
    const [filteredByBrend, setFilteredByBrend] = useState();

    useEffect(() => setFilteredByBrend(allResults), [allResults]);

    const handleBrend = (event) => {
        let filteredArray;
        if (event.target.value === "Все") {
            filteredArray = allResults;
        } else {
            filteredArray = allResults.filter(
                (item) =>
                    item.brend === event.target.value
            );
        }
        setFilteredByBrend(filteredArray);
    };

    return ({
        filteredByBrend,
        brend,
        setBrend,
        handleBrend,
    })
}