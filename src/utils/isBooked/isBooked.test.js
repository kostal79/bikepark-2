import isBooked from "./isBooked";

describe("isBooded test", () => {
    test("select dates before bokeed dates", () => {
        const startDate = "Tue Jan 24 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        const finishDate = "Tue Jan 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        const startTime = "12:00";
        const finishTime = "13:00";
        const bookedDates = {
            0: {
                finish:
                    "Sat Mar 04 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Mar 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
            1: {
                finish:
                    "Sun Feb 05 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Feb 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(false)
    })

    test("select dates after bokeed dates", () => {
        const startDate = "Wed Mar 15 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        const finishDate = "Fri Mar 17 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        const startTime = "12:00";
        const finishTime = "13:00";
        const bookedDates = {
            0: {
                finish:
                    "Sat Mar 04 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Mar 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
            1: {
                finish:
                    "Sun Feb 05 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Feb 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(false)
    })

    test("select dates amoung bokeed dates", () => {
        const startDate = "Tue Feb 14 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        const finishDate = "Fri Feb 17 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        const startTime = "12:00";
        const finishTime = "13:00";
        const bookedDates = {
            0: {
                finish:
                    "Sat Mar 04 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Mar 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
            1: {
                finish:
                    "Sun Feb 05 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Feb 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(false)
    })

    test("select dates without time", () => {
        const startDate = "Tue Jan 24 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        const finishDate = "Tue Jan 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        const startTime = "--:--";
        const finishTime = "--:--";
        const bookedDates = {
            0: {
                finish:
                    "Sat Mar 04 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Mar 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
            1: {
                finish:
                    "Sun Feb 05 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Feb 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(false)
    })


    test("select date without minutes", () => {
        const startDate = "Sun Feb 05 2023 12:00:00 GMT+0300 (Москва, стандартное время)";
        const finishDate = "Wed Mar 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)";
        const startTime = "12:--";
        const finishTime = "11:--";
        const bookedDates = {
            0: {
                finish:
                    "Sat Mar 04 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Mar 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
            1: {
                finish:
                    "Sun Feb 05 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Feb 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(true)
    })

    test("border selection", () => {
        const startDate = "Sun Feb 05 2023 12:00:00 GMT+0300 (Москва, стандартное время)";
        const finishDate = "Wed Mar 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)";
        const startTime = "12:01";
        const finishTime = "11:59";
        const bookedDates = {
            0: {
                finish:
                    "Sat Mar 04 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Mar 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
            1: {
                finish:
                    "Sun Feb 05 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Feb 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(false)
    })

    test("booked dates 1", () => {
        const startDate = "Mon Jan 30 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        const finishDate = "Tue Feb 07 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        const startTime = "12:00";
        const finishTime = "13:00";
        const bookedDates = {
            0: {
                finish:
                    "Sat Mar 04 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Mar 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
            1: {
                finish:
                    "Sun Feb 05 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Feb 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(true)
    })

    test("booked dates 2", () => {
        const startDate = "Sun Feb 05 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        const finishDate = "Wed Mar 01 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        const startTime = "23:00";
        const finishTime = "00:00";
        const bookedDates = {
            0: {
                finish:
                    "Sat Mar 04 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Mar 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
            1: {
                finish:
                    "Sun Feb 05 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Feb 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(false)
    })

    test("booked dates 3", () => {
        const startDate = "Sun Feb 05 2023 12:00:00 GMT+0300 (Москва, стандартное время)";
        const finishDate = "Wed Mar 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)";
        const startTime = "12:00";
        const finishTime = "12:00";
        const bookedDates = {
            0: {
                finish:
                    "Sat Mar 04 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Mar 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
            1: {
                finish:
                    "Sun Feb 05 2023 12:00:00 GMT+0300 (Москва, стандартное время)",
                start:
                    "Wed Feb 01 2023 12:00:00 GMT+0300 (Москва, стандартное время)"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(true)
    })
})