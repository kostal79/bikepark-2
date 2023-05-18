import isBooked from "./isBooked";

describe("isBooded test", () => {
    test("select dates before bokeed dates", () => {
        const startDate = "2023-01-24";
        const finishDate = "2023-01-23";
        const startTime = "12:00";
        const finishTime = "13:00";
        const bookedDates = {
            0: {
                finish:
                    "2023-03-04 12:00",
                start:
                    "2023-03-04 12:00"
            },
            1: {
                finish:
                    "2023-02-05 12:00",
                start:
                    "2023-02-01 12:00"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(false)
    })

    test("select dates after bokeed dates", () => {
        const startDate = "2023-03-15";
        const finishDate = "2023-03-17";
        const startTime = "12:00";
        const finishTime = "13:00";
        const bookedDates = {
            0: {
                finish:
                    "2023-03-04 12:00",
                start:
                    "2024-03-01 12:00"
            },
            1: {
                finish:
                    "2023-02-05 12:00",
                start:
                    "2023-02-01 12:00"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(false)
    })

    test("select dates amoung bokeed dates", () => {
        const startDate = "2023-02-14";
        const finishDate = "2023-02-17";
        const startTime = "12:00";
        const finishTime = "13:00";
        const bookedDates = {
            0: {
                finish:
                    "2023-03-04 12:00",
                start:
                    "2023-03-01 12:00"
            },
            1: {
                finish:
                    "2023-02-05 12:00",
                start:
                    "2023-02-01 12:00"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(false)
    })


    test("border selection", () => {
        const startDate = "2023-02-05";
        const finishDate = "2023-03-01";
        const startTime = "12:01";
        const finishTime = "11:59";
        const bookedDates = {
            0: {
                finish:
                    "2023-03-04 12:00",
                start:
                    "2023-03-04 12:00"
            },
            1: {
                finish:
                    "2023-02-05 12:00",
                start:
                    "2023-02-01 12:00"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(false)
    })

    test("booked dates 1", () => {
        const startDate = "2023-01-30";
        const finishDate = "2023-02-07";
        const startTime = "12:00";
        const finishTime = "13:00";
        const bookedDates = {
            0: {
                finish:
                    "2023-03-04 12:00",
                start:
                    "2023-03-04 12:00"
            },
            1: {
                finish:
                    "2023-02-05 12:00",
                start:
                    "2023-02-01 12:00"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(true)
    })

    test("booked dates 2", () => {
        const startDate = "2023-02-05";
        const finishDate = "2023-03-01";
        const startTime = "23:00";
        const finishTime = "00:00";
        const bookedDates = {
            0: {
                finish:
                    "2023-03-04 12:00",
                start:
                    "2023-03-04 12:00"
            },
            1: {
                finish:
                    "2023-02-05 12:00",
                start:
                    "2023-02-01 12:00"
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

        test("booked dates 3", () => {
        const startDate = "2023-05-12";
        const finishDate = "2023-06-23";
        const startTime = "12:00";
        const finishTime = "12:00";
        const bookedDates = {
            0: {
                finish:
                    "2023-05-30 12:00",
                start:
                    "2023-05-25 12:00"
            },
        }
        expect(isBooked(startDate, startTime, finishDate, finishTime, bookedDates)).toBe(true)
    })
})