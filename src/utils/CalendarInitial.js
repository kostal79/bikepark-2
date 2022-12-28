
export function initialMonthStart() {
    return (new Date()).getMonth()
}

export function initialYearStart() {
    return (new Date()).getFullYear()
}

export function initialDayStart() {
    return (new Date()).getDate()
}

export function initialMonthFinish() {
    let date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.getMonth()
}

export function initialYearFinish() {
    let date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.getFullYear()
}