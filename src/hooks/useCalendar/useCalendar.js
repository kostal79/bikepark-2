import { useCallback, useState } from "react";
import getWeekDay from "../../utils/getWeekDay/GetWeekDay";

export default function useCalendar(initialYear, initialMonth) {
    const [currentYear, setCurrentYear] = useState(initialYear);
    const [currentMonth, setMonth] = useState(initialMonth);

    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];

    // const [currentArr, setArr] = useState([]);

    const datesArray = useCallback(() => {
        let arr = [];
        let date = new Date(Date.UTC(currentYear, currentMonth));

        for (let i = 0; i < getWeekDay(date); i++) {
            let prevDate = new Date(Date.UTC(
                currentYear,
                currentMonth,
                date.getDate() - getWeekDay(date) + i
            ));
            arr.push(prevDate);
        }

        while (date.getMonth() === currentMonth) {
            arr.push(date);
            let nextDay = new Date(Date.UTC(
                date.getFullYear(),
                date.getMonth(),
                date.getDate() + 1
            ));
            date = nextDay;
        }

        if (getWeekDay(date) !== 0) {
            let newDate = 1;
            for (let i = getWeekDay(date); i < 7; i++) {
                let nextDate = new Date(Date.UTC(currentYear, currentMonth + 1, newDate++));
                arr.push(nextDate);
            }
        }
        return arr;
    }, [currentMonth, currentYear])



    function nextMonth() {
        if (currentMonth === 11) {
            setMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setMonth(currentMonth + 1);
        }
    }

    function prevMonth() {
        if (currentMonth === 0) {
            setMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setMonth(currentMonth - 1);
        }
    }

    return ({
        monthName: months[currentMonth],
        nextMonth,
        prevMonth,
        currentArr: datesArray(),
        currentMonth
    })
}