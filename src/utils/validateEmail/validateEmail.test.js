import { validateEmail } from "./validateEmail";

describe("validateEmail", () => {
    test("incorrect email email.ru", () => {
        expect(validateEmail("email.ru")).toBe("Enter correct email")
    });

    test("incorrect email 1@emailru", () => {
        expect(validateEmail("1@emailru")).toBe("Enter correct email")
    });

    test("incorrect email @gmail.com", () => {
        expect(validateEmail("@gmail.com")).toBe("Enter correct email")
    });

    test("correct email mail@mail.com", () => {
        expect(validateEmail("mail@mail.com")).toBeUndefined();
    })
})