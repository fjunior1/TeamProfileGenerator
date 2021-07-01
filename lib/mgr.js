/*
Mgr class, inherits from Empl
*/
const Empl = require("./empl");

class Mgr extends Empl {
    constructor(name, id, email, officeNum) {
        super(name, id, email, "manager");
        this.officeNum = officeNum;
    }

    // getters and setters
    getOfficeNum() {
        return this.officeNum;
    }

    setOfficeNum(officeNum) {
        this.officeNum = officeNum;
    }
}

module.exports = Eng;