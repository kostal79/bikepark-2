import calcTime from "./calcTime";


describe("calcTime test", () => {
    test("offset = 0 not Undefined", () => {
        expect(calcTime("London", "+0")).not.toBeUndefined()
    })

    test("offset = +4 not Undefined", () => {
        expect(calcTime("Dubai", "+4")).not.toBeUndefined()
    })

    test("offset = -5 not Undefined", () => {
        expect(calcTime("London", "-5")).not.toBeUndefined()
    })

    test("Differense minutes", () => {
        const time1 = calcTime("London", "0");
        const time2 = calcTime("Dubai", "+4");
        const difference = Number(time2.split(":")[1].split(" ")[0]) === Number(time1.split(":")[1].split(" ")[0])
        expect(difference).toBe(true)
    })

})