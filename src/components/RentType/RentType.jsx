import React from "react"
import "./RentType.css"
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../../redux/slices/rentTypeSlice";

const RentType = () => {

    const rentType = useSelector((state) => state.rentType.type)
    const dispatch = useDispatch();


    function handleType(event) {
        if (rentType === "days") {
            dispatch(setType("hours"));

        } else {
            dispatch(setType("days"));
        }
    }

    return (
        <div className="rentType__wrapper">
            <p className="rentType__title">Тип аренды</p>
            <div className="rentType__container">
                <div
                    className={"rentType__button"}
                    onClick={handleType}
                >
                    по дням
                </div>
                <div
                    className={rentType === "days" ? "rentType__toggler" : "rentType__toggler rentType__toggler--shifted"}
                >
                    {rentType === "days" ? "по дням" : "2 часа"}</div>
                <div
                    className={"rentType__button"}
                    onClick={handleType}
                >
                    2 часа
                </div>
            </div>
        </div>
    );
};

export default RentType