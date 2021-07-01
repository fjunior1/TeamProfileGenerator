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
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getRole() {
        return this.role;
    }

    setRole(role) {
        this.role = role;
    }
}

module.exports = Empl;