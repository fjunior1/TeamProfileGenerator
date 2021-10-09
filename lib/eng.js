/*
Eng class, inherits from Empl
*/
const Empl = require("./Empl.js");

class Eng extends Empl{
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer");
        this.github = github;
    }
    
    get Github() {
        return this.github;
    }

    set Github(github) {
        this.github = github;
    }
}

module.exports = Eng;