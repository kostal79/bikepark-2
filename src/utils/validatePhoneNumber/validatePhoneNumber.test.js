import validatePhoneNumber from "./validatePhoneNumber";

describe("validatePhoneNumber", () => {
    test("Correct number", () => {
        expect(validatePhoneNumber("+7 111-111-11-11")).toBeUndefined()
    })

    test("Incorrect format", () => {
        expect(validatePhoneNumber("123-11-11")).toBe("Incorrect format")
    })

    test("Incorrect count of numbers", () => {
        expect(validatePhoneNumber("111")).toBe("Incorrect format")
    })
    
    test("Empty string", () => {
        expect(validatePhoneNumber("")).toBe("Phone number is required")
    })
})