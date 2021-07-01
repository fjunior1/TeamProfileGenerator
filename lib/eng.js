/*
Eng class, inherits from Empl
*/
const Empl = require("./empl");

class Eng extends Empl{
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer");
        this.github = github;
    }
    
    getGithub() {
        return this.github;
    }

    setGithub(github) {
        this.github = github;
    }
}

module.exports = Eng;