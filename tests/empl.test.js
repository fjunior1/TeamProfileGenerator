const Empl = require("../lib/empl");

describe("Empl class test", () => {
    describe("Instantiation", () => {
        it("should instantiate and Empl object", () => {
            const TestEmpl = new Empl();

            expect("name" in TestEmpl).toEqual(true);
            expect("id" in TestEmpl).toEqual(true);
            expect("email" in TestEmpl).toEqual(true);
            expect("role" in TestEmpl).toEqual(true);
        })
    });

    describe("Member initialization", () => {
        const TestEmpl = new Empl("John", "1001", "John@email.com");

        it("Should set all members (name, Id, email and role) with proper information on class initialization", () => {

            expect(TestEmpl.name).toEqual('John');
            expect(TestEmpl.id).toEqual('1001');
            expect(TestEmpl.email).toEqual('John@email.com');
            expect(TestEmpl.role).toEqual('Employee'); // default behavior
        })
    });

    describe("getters and setters", () => {
        const TestEmpl = new Empl("John", "1001", "John@email.com");

        it("should exercise name getter and setter properly", () => {

            // test original name
            expect(TestEmpl.Name).toEqual("John");
            // setter with new name
            TestEmpl.Name = "Test Name";
            // test getter with new name
            expect(TestEmpl.Name).toEqual("Test Name");
        });

        it("should exercise id getter and setter properly", () => {

            // test original id
            expect(TestEmpl.Id).toEqual("1001");
            // setter with new id
            TestEmpl.Id = "1234";
            // test getter with new id
            expect(TestEmpl.Id).toEqual("1234");
        });

        it("should exercise email getter and setter properly", () => {

            // test original email
            expect(TestEmpl.Email).toEqual("John@email.com");
            // setter with new email
            TestEmpl.Email = "test@test.com";
            // test getter with new email
            expect(TestEmpl.Email).toEqual("test@test.com");
        });

        it("should exercise role getter and setter properly", () => {

            // test original role
            expect(TestEmpl.Role).toEqual("Employee");
            // setter with new role
            TestEmpl.Role = "testRole";
            // test getter with new role
            expect(TestEmpl.Role).toEqual("testRole");
        });


    });
});