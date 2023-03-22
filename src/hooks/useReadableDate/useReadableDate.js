import { useSelector } from "react-redux";
import { selectedDateFinish, selectedDateStart, selectedTimeFinish, selectedTimeStart } from "../../redux/slices/calendarSlice";
import getStringDate from "../../utils/getStringDate";


export default function useReadableDate(time) {
    const dateStart = getStringDate(useSelector(selectedDateStart));
    const dateFinish = getStringDate(useSelector(selectedDateFinish));
    const timeStart = useSelector(selectedTimeStart) || "--.--";
    const timeFinish = useSelector(selectedTimeFinish) || "--.--";
    if (time === "start") {
        return `${dateStart} ${timeStart}`
    } else if (time === "finish") {
        return `${dateFinish} ${timeFinish}`
    } else {
        console.error("'start' or 'finish' is allowed")
    }
}