import { useEffect, useState } from "react";
import BikeCardSmall from "../components/BikeCardSmall/BikeCardSmall";


export default function useFilterResult(allResults) {

    const [brend, setBrend] = useState("Все");
    const [size, setSize] = useState("Все");
    const [filteredBikes, setFilteredBikes] = useState();

    function getResults(data) {
        return data.map((item) => {
            return (

                <BikeCardSmall
                    id={item.id}
                    image={item.imageRef}
                    bookedDates={item.bookedDates}
                    name={item.brend}
                    price={item.price}
                    size={item.size}
                    type={item.type}
                    model={item.model}
                    key={item.id}
                />

            );
        });
    }

    useEffect(() => setFilteredBikes(getResults(allResults)), [allResults]);


    const handleBrend = (event) => {
        let filteredArray;
        if (event.target.value === "Все" && size === "Все") {
            filteredArray = allResults;
        } else if (event.target.value !== "Все" && size === "Все") {
            filteredArray = allResults.filter(
                (item) => item.brend === event.target.value
            );
        } else if (event.target.value === "Все" && size !== "Все") {
            filteredArray = allResults.filter((item) => item.size === size);
        } else {
            filteredArray = allResults.filter(
                (item) =>
                    item.brend === event.target.value && item.size === size
            );
        }
        setFilteredBikes(getResults(filteredArray));
    };

    const handleSize = (event) => {
        let filteredArray;
        if (event.target.value === "Все" && brend === "Все") {
            filteredArray = allResults;
        } else if (event.target.value !== "Все" && brend === "Все") {
            filteredArray = allResults.filter(
                (item) => item.size === event.target.value
            );
        } else if (event.target.value === "Все" && brend !== "Все") {
            filteredArray = allResults.filter((item) => item.brend === brend);
        } else {
            filteredArray = allResults.filter(
                (item) =>
                    item.size === event.target.value && item.brend === brend
            );
        }
        setFilteredBikes(getResults(filteredArray));
    }


    return ({
        filteredBikes,
        brend,
        size,
        setBrend,
        setSize,
        handleBrend,
        handleSize,
    })
}