function getWeekDay(date) {
    let day = date.getDay();
    day = (day === 0) ? 6 : day - 1;
    return day;
}

export default getWeekDay