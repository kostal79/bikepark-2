import getWeekDay from "./GetWeekDay";

describe("getWeekDay test", () => {
    test("sunday", () => {
        const date = new Date("2023", "0", "1");
        expect(getWeekDay(date)).toBe(6)
    })

    test("saturday", () => {
        const date = new Date("2022", "0", "1");
        expect(getWeekDay(date)).toBe(5)
    })
})