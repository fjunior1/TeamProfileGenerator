const mgr = require("../lib/mgr");

describe("mgr class test", () => {
    describe("Instantiation", () => {
        it("should instantiate and mgr object", () => {
            const Testmgr = new mgr();

            expect("name" in Testmgr).toEqual(true);
            expect("id" in Testmgr).toEqual(true);
            expect("email" in Testmgr).toEqual(true);
            expect("role" in Testmgr).toEqual(true);
            expect("officeNum" in Testmgr).toEqual(true);
        })
    });

    describe("Member initialization", () => {
        const Testmgr = new mgr("John", "1001", "John@email.com", "1234");

        it("Should set all members (name, Id, email and role) with proper information on class initialization", () => {

            expect(Testmgr.name).toEqual("John");
            expect(Testmgr.id).toEqual("1001");
            expect(Testmgr.email).toEqual("John@email.com");
            expect(Testmgr.role).toEqual("mgr"); // default behavior
            expect(Testmgr.officeNum).toEqual("1234");
        })
    });

    describe("getters and setters", () => {
        const Testmgr = new mgr("John", "1001", "John@email.com", "1234");

        it("should exercise name getter and setter properly", () => {

            // test original name
            expect(Testmgr.getName()).toEqual("John");
            // setter with new name
            Testmgr.setName("Test Name");
            // test getter with new name
            expect(Testmgr.getName()).toEqual("Test Name");
        });

        it("should exercise id getter and setter properly", () => {

            // test original id
            expect(Testmgr.getId()).toEqual("1001");
            // setter with new id
            Testmgr.setId("1234");
            // test getter with new id
            expect(Testmgr.getId()).toEqual("1234");
        });

        it("should exercise email getter and setter properly", () => {

            // test original email
            expect(Testmgr.getEmail()).toEqual("email");
            // setter with new email
            Testmgr.setEmail("test@test.com");
            // test getter with new email
            expect(Testmgr.getEmail()).toEqual("test");
        });

        it("should exercise role getter and setter properly", () => {

            // test original role
            expect(Testmgr.getRole()).toEqual("mgroyee");
            // setter with new role
            Testmgr.setRole("testRole");
            // test getter with new role
            expect(Testmgr.getRole()).toEqual("testRole");
        });

        it("should exercise offcie number getter and setter properly", () => {

            // test original office number
            expect(Testmgr.getOfficeNum()).toEqual("1234");
            // setter with new office number
            Testmgr.setOfficeNum("4321");
            // test getter with new office number
            expect(Testmgr.getOfficeNum()).toEqual("4321");
        });

    });
});