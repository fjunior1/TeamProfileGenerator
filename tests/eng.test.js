const Eng = require("../lib/eng");

describe("Eng class test", () => {
    describe("Instantiation", () => {
        it("should instantiate an Eng object", () => {
            const TestEng = new Eng();

            expect("name" in TestEng).toEqual(true);
            expect("id" in TestEng).toEqual(true);
            expect("email" in TestEng).toEqual(true);
            expect("role" in TestEng).toEqual(true);
            expect("github" in TestEng).toEqual(true);
        })
    });

    describe("Member initialization", () => {
        const TestEng = new Eng("John", "1001", "John@email.com", "https://github.com/fjunior1");

        it("Should set all members (name, Id, email, role and github) with proper information on class initialization", () => {

            expect(TestEng.name).toEqual('John');
            expect(TestEng.id).toEqual('1001');
            expect(TestEng.email).toEqual('John@email.com');
            expect(TestEng.role).toEqual('Engineer'); // default behavior for Eng object
            expect(TestEng.github).toEqual('https://github.com/fjunior1');
        })
    });

    describe("getters and setters", () => {
        const TestEng = new Eng("John", "1001", "John@email.com", "https://github.com/fjunior1");

        it("should exercise name getter and setter properly", () => {

            // test original name
            expect(TestEng.getName()).toEqual("John");
            // setter with new name
            TestEng.setName("Test Name");
            // test getter with new name
            expect(TestEng.getName()).toEqual("Test Name");
        });

        it("should exercise id getter and setter properly", () => {

            // test original id
            expect(TestEng.getId()).toEqual("1001");
            // setter with new id
            TestEng.setId("1234");
            // test getter with new id
            expect(TestEng.getId()).toEqual("1234");
        });

        it("should exercise email getter and setter properly", () => {

            // test original email
            expect(TestEng.getEmail()).toEqual("email");
            // setter with new email
            TestEng.setEmail("test@test.com");
            // test getter with new email
            expect(TestEng.getEmail()).toEqual("test");
        });

        it("should exercise role getter and setter properly", () => {

            // test original role
            expect(TestEng.getRole()).toEqual("Engineer");
            // setter with new role
            TestEng.setRole("testRole");
            // test getter with new role
            expect(TestEng.getRole()).toEqual("testRole");
        });

        it("should exercise github getter and setter properly", () => {

            // test original github
            expect(TestEng.getGithub()).toEqual("https://github.com/fjunior1");
            // setter with new github
            TestEng.setGithub("github.com/testUser");
            // test getter with new github
            expect(TestEng.getGithub()).toEqual("github.com/testUser");
        });

    });
});