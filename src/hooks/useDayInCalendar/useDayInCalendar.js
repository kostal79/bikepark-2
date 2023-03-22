import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedDateFinish, selectedDateStart, setDateFinish, setDateStart, setIsClicked } from "../../redux/slices/calendarSlice";

export default function useDayInCalendar(currentMonth, item) {
    const start = useSelector(selectedDateStart)
    const finish = useSelector(selectedDateFinish)
    const clicked = useSelector((state) => state.calendar.isClicked)
    const dispatch = useDispatch();

    const [className, setClassName] = useState('')

    const saveStartDate = (date) => {
        dispatch(setDateFinish(undefined))
        dispatch(setDateStart(date.toString()))
        dispatch(setIsClicked())
    }

    const saveFinishDate = (date) => {
        const startDate = new Date(start)
        if (date.valueOf() < startDate) {
            dispatch(setDateStart(undefined))
            dispatch(setDateFinish(undefined))
        };
        dispatch(setDateFinish(date.toString()))
        dispatch(setIsClicked())
    }

    function selectDate() {
        if (!clicked) {
            dispatch(setDateStart(undefined))
            dispatch(setDateFinish(undefined))
            saveStartDate(item);
        } else {
            saveFinishDate(item);
        }
    }

    useEffect(() => {
        function makeClassName() {
            if (start && (item.toString() === start)) {
                setClassName("activeDateStart");
            } else if (item.toString() === finish) {
                setClassName("activeDateFinish");
            } else if (
                start &&
                finish &&
                (item.valueOf() > (new Date(start)).valueOf()) &&
                (item.valueOf() < (new Date(finish)).valueOf())
            ) {
                setClassName("activePeriod");
            } else if (
                item.getMonth() !== currentMonth ||
                item.valueOf() < Date.now() - 86400000
            ) {
                setClassName("disabled");
            } else {
                setClassName("day");
            }
        }

        makeClassName();
    }, [finish, start, item, currentMonth]);

    const onClickDate = () => {
        if (className === "disabled") {
            return
        } else {
            selectDate()
        }
    }

    return ({
        date: item.getDate(),
        onClick: onClickDate,
        className
    })
}