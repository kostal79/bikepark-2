function isBooked(startDate, startTime, finishDate, finishTime, bookedDates) {
    if (!bookedDates) {
        return false 
    }
    
    startDate = (new Date(startDate + " " + startTime))

    finishDate = (new Date(finishDate + " " + finishTime))

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


