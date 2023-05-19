import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedDateFinish, selectedDateStart, setDateFinish, setDateStart, setIsClicked } from "../../redux/slices/calendarSlice";

export default function useDayInCalendar(currentMonth, item, disabledDays) {
    const start = useSelector(selectedDateStart)
    const finish = useSelector(selectedDateFinish)
    const clicked = useSelector((state) => state.calendar.isClicked)
    const dispatch = useDispatch();

    const saveStartDate = (date) => {
        dispatch(setDateFinish(undefined))
        dispatch(setDateStart(date.toISOString().slice(0, 10)))
        dispatch(setIsClicked())
    }

    const saveFinishDate = (date) => {
        const startDate = new Date(start)
        if (date.valueOf() < startDate) {
            dispatch(setDateStart(undefined))
            dispatch(setDateFinish(undefined))
        };
        dispatch(setDateFinish(date.toISOString().slice(0, 10)))
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

    const makeClassName = useMemo(() => {
        if (!disabledDays && start && (item.toISOString().slice(0, 10) === start)) {
            return "activeDateStart";
        } else if (!disabledDays && start && item.toISOString().slice(0, 10) === finish) {
            return "activeDateFinish";
        } else if (
            !disabledDays &&
            start &&
            finish &&
            (item.valueOf() > (new Date(start)).valueOf()) &&
            (item.valueOf() < (new Date(finish)).valueOf())
        ) {
            return "activePeriod";
        } else if (
            item.getMonth() !== currentMonth ||
            item.valueOf() < Date.now() - 86400000
        ) {
            return "disabled";
        } else {
            return "day";
        }
    }, [finish, start, item, currentMonth, disabledDays]);

    const onClickDate = () => {
        if (makeClassName === "disabled") {
            return
        } else {
            selectDate()
        }
    };

    const checkMatching = (array, current) => {
        current = current.toISOString().slice(0, 10)
        for (let dateInterval of array) {
          if (current >= dateInterval.start.slice(0, 10) && current <= dateInterval.finish.slice(0, 10)) {
            return true
          }
        }
        return false
      }

    if (disabledDays && checkMatching(disabledDays, item)) {

        return ({
            date: item.getDate(),
            onClick: onClickDate,
            className: "disabled",
        });
    }

    return ({
        date: item.getDate(),
        onClick: onClickDate,
        className: makeClassName,
    });
}