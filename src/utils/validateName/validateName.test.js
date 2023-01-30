import validateName from "./validateName";

describe("validateName", () => {
    test("No name", () => {
        expect(validateName()).toBe("Please write your name")
    })

    test("Admin name", () => {
        expect(validateName("Admin")).toBe("Incorrect name")
    })

    test("aDmin name", () => {
        expect(validateName("aDmin")).toBe("Incorrect name")
    })

    test("Short name", () => {
        expect(validateName("Ya")).toBe("Name length must be greater than 2 letters and less than 20 letters")
    })

    test("Incorrect name 123", () => {
        expect(validateName("123")).toBe("Incorrect name")
    })

    test("Too long name", () => {
        expect(validateName("Aaaaaaaaaaaaaaaaaaaaa")).toBe("Name length must be greater than 2 letters and less than 20 letters")
    })

    test("Incorrect name aLex", ()=> {
        expect(validateName("aLex")).toBe("Incorrect name")
    })

    test("Correct name", () => {
        expect(validateName("Alex")).toBeUndefined()
    })
})