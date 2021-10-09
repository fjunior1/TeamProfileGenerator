/*
Intern class, inherits from Empl
*/
const Empl = require("./Empl.js");

class Intern extends Empl {
    constructor(name, id, email, school) {
        super(name, id, email, "intern");
        this.school = school;
    }

    // getters and setters
    get School() {
        return this.school;
    }

    set School(school) {
        this.school = school;
    }
}

module.exports = Intern;