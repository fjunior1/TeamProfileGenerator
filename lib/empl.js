/*
 This is the employee functionality, generalization of all common aspects of employees.

*/

class Empl {
    constructor(name, id, email, role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    // getters and setters
     get Name() {
        return this.name;
    }

    set Name(name) {
        this.name = name;
    }

    get Id() {
        return this.id;
    }

    set Id(id) {
        this.id = id;
    }

    get Email() {
        return this.email;
    }

    set Email(email) {
        this.email = email;
    }

    get Role() {
        return this.role;
    }

    set Role(role) {
        this.role = role;
    }
}

module.exports = Empl;