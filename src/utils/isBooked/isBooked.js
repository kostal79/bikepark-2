function isBooked(startDate, startTime, finishDate, finishTime, bookedDates) {
    if (!bookedDates) {
        return false 
    }
    startTime = startTime.split(":")
    const startHour = startTime[0] === "--" ? '00' : startTime[0]
    const startMin = startTime[1] === "--" ? '00' : startTime[1]
    startDate = (new Date(startDate)).setHours(startHour, startMin)

    finishTime = finishTime.split(":")
    const finishHour = finishTime[0] === "--"? "23" : finishTime[0];
    const finishMax = finishTime[1] === "--" ? "59" : finishTime[1];
    finishDate = (new Date(finishDate)).setHours(finishHour, finishMax)

    let res = []
    // eslint-disable-next-line
    for (let[key, value] of Object.entries(bookedDates)) {
        if (startDate < (new Date(value.start)) && finishDate < (new Date(value.start))) {
           res.push(false);
        } else if (startDate > (new Date(value.finish)) && finishDate > (new Date(value.finish))) {
            res.push(false);
        } else {
            res.push(true)
        }
    }
    if (res.some(elem => elem)) {
        return true
    } else {
        return false
    }

}

export default isBooked


