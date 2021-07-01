/*
Exercise all tests for intern class
*/

const intern = require("../lib/intern");

describe("intern class test", () => {
    describe("Instantiation", () => {
        it("should instantiate an intern object", () => {
            const Testintern = new Intern();

            expect("name" in Testintern).toEqual(true);
            expect("id" in Testintern).toEqual(true);
            expect("email" in Testintern).toEqual(true);
            expect("role" in Testintern).toEqual(true);
            expect("school" in Testintern).toEqual(true);
        })
    });

    describe("Member initialization", () => {
        const Testintern = new Intern("John", "1001", "John@email.com", "GATECH");

        it("Should set all members (name, Id, email, role and github) with proper information on class initialization", () => {

            expect(Testintern.name).toEqual("John");
            expect(Testintern.id).toEqual("1001");
            expect(Testintern.email).toEqual("John@email.com");
            expect(Testintern.role).toEqual("intern"); // default behavior for intern object
            expect(Testintern.github).toEqual("GATECH");
        })
    });

    describe("getters and setters", () => {
        const Testintern = new Intern("John", "1001", "John@email.com", "GATECH");

        it("should exercise name getter and setter properly", () => {

            // test original name
            expect(Testintern.getName()).toEqual("John");
            // setter with new name
            Testintern.setName("Test Name");
            // test getter with new name
            expect(Testintern.getName()).toEqual("Test Name");
        });

        it("should exercise id getter and setter properly", () => {

            // test original name
            expect(Testintern.getId()).toEqual("1001");
            // setter with new name
            Testintern.setId("1234");
            // test getter with new name
            expect(Testintern.getId()).toEqual("1234");
        });

        it("should exercise email getter and setter properly", () => {

            // test original name
            expect(Testintern.getEmail()).toEqual("email");
            // setter with new name
            Testintern.setEmail("test@test.com");
            // test getter with new name
            expect(Testintern.getEmail()).toEqual("test");
        });

        it("should exercise role getter and setter properly", () => {

            // test original name
            expect(Testintern.getRole()).toEqual("internineer");
            // setter with new name
            Testintern.setRole("testRole");
            // test getter with new name
            expect(Testintern.getRole()).toEqual("testRole");
        });

        it("should exercise school getter and setter properly", () => {

            // test original name
            expect(Testintern.getSchool()).toEqual("GATECH");
            // setter with new name
            Testintern.setSchool("USF");
            // test getter with new name
            expect(Testintern.getSchool()).toEqual("USF");
        });

    });
});