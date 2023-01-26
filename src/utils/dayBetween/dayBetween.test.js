import dayBetween from "./dayBetween";

describe("dayBetween test", () => {
    test("from 01.01.2023 to 02.01.2023", () => {
        const from = new Date("01/01/2023");
        const to = new Date("01/02/2023")
        expect(dayBetween(from, to)).toBe(2)
    })

    test("from 31.12.2022 to 01.01.2023", () => {
        const from = new Date("12/31/2022");
        const to = new Date("01/01/2023");
        expect(dayBetween(from, to)).toBe(2)
    })

    test("one day", () => {
        const from = new Date(2023, 0, 1, 1);
        const to = new Date(2023, 0, 1, 23);
        expect(dayBetween(from, to)).toBe(1)
    })

    test("2 days, date in string format", () => {
        const from = "Thu Jan 26 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        const to = "Fri Jan 27 2023 00:00:00 GMT+0300 (Москва, стандартное время)";
        expect(dayBetween(from, to)).toBe(2)
    })
})