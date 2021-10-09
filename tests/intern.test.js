/*
Exercise all tests for intern class
*/

const intern = require("../lib/intern");

describe("intern class test", () => {
    describe("Instantiation", () => {
        it("should instantiate an intern object", () => {
            const Testintern = new intern();

            expect("name" in Testintern).toEqual(true);
            expect("id" in Testintern).toEqual(true);
            expect("email" in Testintern).toEqual(true);
            expect("role" in Testintern).toEqual(true);
            expect("school" in Testintern).toEqual(true);
        })
    });

    describe("Member initialization", () => {
        const Testintern = new intern("John", "1001", "John@email.com", "GATECH");

        it("Should set all members (name, Id, email, role and github) with proper information on class initialization", () => {

            expect(Testintern.name).toEqual("John");
            expect(Testintern.id).toEqual("1001");
            expect(Testintern.email).toEqual("John@email.com");
            expect(Testintern.role).toEqual("intern"); // default behavior for intern object
            expect(Testintern.school).toEqual("GATECH");
        })
    });

    describe("getters and setters", () => {
        const Testintern = new intern("John", "1001", "John@email.com", "GATECH");

        it("should exercise name getter and setter properly", () => {

            // test original name
            expect(Testintern.Name).toEqual("John");
            // setter with new name
            Testintern.Name = "Test Name";
            // test getter with new name
            expect(Testintern.Name).toEqual("Test Name");
        });

        it("should exercise id getter and setter properly", () => {

            // test original id
            expect(Testintern.Id).toEqual("1001");
            // setter with new id
            Testintern.Id = "1234";
            // test getter with new id
            expect(Testintern.Id).toEqual("1234");
        });

        it("should exercise email getter and setter properly", () => {

            // test original email
            expect(Testintern.Email).toEqual("John@email.com");
            // setter with new email
            Testintern.Email = "test@test.com";
            // test getter with new email
            expect(Testintern.Email).toEqual("test@test.com");
        });

        it("should exercise role getter and setter properly", () => {

            // test original role
            expect(Testintern.Role).toEqual("intern");
            // setter with new role
            Testintern.Role = "testRole";
            // test getter with new role
            expect(Testintern.Role).toEqual("testRole");
        });

        it("should exercise school getter and setter properly", () => {

            // test original school
            expect(Testintern.School).toEqual("GATECH");
            // setter with new school
            Testintern.School = "USF";
            // test getter with new school
            expect(Testintern.School).toEqual("USF");
        });

    });
});