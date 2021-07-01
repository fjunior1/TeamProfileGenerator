/*
Mgr class, inherits from Empl
*/
const Emply = require("./Empl");

class Mgr extends Emply {
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

module.exports = Mgr;