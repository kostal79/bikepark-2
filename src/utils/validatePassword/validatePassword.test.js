import { validatePassword } from "./validatePassword";

describe("validatePassword", () => {
    test("impty string", () => {
        expect(validatePassword("")).toBe("Please enter the password")
    })

    test("short password", () => {
        expect(validatePassword("11224")).toBe("Password should contain minimum 6 and maximum 16 characters")
    })

    test("too long password", () => {
        expect(validatePassword("V[p6c~.*C+nuA@Yz%")).toBe("Password should contain minimum 6 and maximum 16 characters")
    })

    test("password without numbers", () => {
        expect(validatePassword("aaaaaaa&&")).toBe("Password should contain atleast one number and one special character !@#$%^&*+-")
    })

    test("password without spesial haracters", () => {
        expect(validatePassword("a33aaaa")).toBe("Password should contain atleast one number and one special character !@#$%^&*+-")
    })

    test("correct password 6 characters", () => {
        expect(validatePassword("a3%aaa")).toBeUndefined()
    })

    test("correct password 16 characters", () => {
        expect(validatePassword("a3%aaaaaaaaaaaaa")).toBeUndefined()
    })

    test("correct password", () => {
        expect(validatePassword("A!@#$%^&*+-4")).toBeUndefined()
    })
})