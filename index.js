/*
  index.js: Main application file

  1- Requests input form user
  2- Generates HTML with data requested and saves it in /dist folder
*/

// importing inquirer and loop to use here
const inquirer = require("inquirer");
inquirer.registerPrompt("inquirerLoop", require("inquirer-loop")(inquirer));
const fs = require("fs")

// import the roles
//const Empl = require("./lib/Empl")
const Mgr = require("./lib/Mgr")
const Eng = require("./lib/Eng")
const Intern = require("./lib/Intern"); // intern is a class, begni with uppercase
const generateCards = require("./lib/generateCards.js")
const { ENGINE_METHOD_RSA } = require("constants");


// start the questions here
const requests = [

    // Manager prompts: name, id, email and office number. Note: role is implied as "Manager"
    {
        type: "input",
        name: "mgrName",
        message: "Manager's name:",
        validate: (mgrName) => {
            if ((mgrName != undefined) && (mgrName != "")) {
                return true;
            } else {
                console.log("\nError: Please enter a Manager name.")
                return false;
            }
        }
    },
    {
        type: "number",
        name: "mgrId",
        message: "Manager's ID:",
        validate: (mgrId) => {
            if ((typeof (mgrId) == 'number')) {
                return true;
            } else {
                console.log("\nError: Please enter a Manager ID.")
                return false;
            }
        }
    },
    {
        // Using www.regex101.com input for email format verification

        type: "input",
        name: "mgrEmail",
        message: "Manager's email:",
        validate: (mgrEmail) => {
            if (mgrEmail && (/^(([a-zA-Z0-9 ~!@#$%^&*-_.?]{8,})*?)$/.test(mgrEmail))) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "number",
        name: "mgrOfc",
        message: "Manager's office number:",
        validate: (mgrOfc) => {
            if (mgrOfc && (typeof (mgrOfc) == 'number')) {
                return true;
            } else {
                console.log("\nError: Enter manager's office as number.", "color:red;");
                return false;
            }
        }
    },

    //From this point on is a loop to get engineers and interns data
    {
        type: "inquirerLoop",
        name: "Employees",
        message: "Would you like to add new employee(based on role) to the team?",


        // request common employee information, 
        //later, ask for specific information based on employee role
        questions: [
            {
                type: "list",
                name: "role",
                message: "Select the employee role:",
                choices: ["engineer", "intern"],
            },

            // common information ( name)
            {
                type: "input",
                name: "name",
                message: "Employe name:",
                validate: (name) => {
                    if ((name != undefined) && (name != "")) {
                        return true;
                    } else {
                        console.log("\nError: Enter a name for this employee");
                        return false;
                    }
                }
            },

            // common information (id)
            {
                type: "number",
                name: "id",
                message: "Employe ID:",
                validate: (id) => {
                    if (id && (typeof id == "number")) {
                        return true;
                    } else {
                        console.log("\nError: Enter an id for this employee");
                        return false;
                    }
                }
            },

            // common information (email)
            {
                type: "input",
                name: "email",
                message: "Employe email:",
                validate: (email) => {
                    if (email && (/^(([a-zA-Z0-9 ~!@#$%^&*-_.?]{8,})*?)$/.test(email))) {
                        return true;
                    } else {
                        console.log("\nError: Enter an email for this employee");
                        return false;
                    }
                }
            },

            //
            // At this point we have specific information based on the employee role
            //
            // Prompt for engineer's GitHub user name
            {
                type: "input",
                name: "github",
                message: "Enter engineer's github account user name:",
                when: (answers) => answers.role === "engineer",
                validate: (github) => {
                    if (github && (github != "")) {
                        return true;
                    } else {
                        console.log("\nError: enter employee github user name");
                        return false;
                    }
                }
            },
            // Prompt for intern's school
            {
                type: "input",
                name: "school",
                message: "Enter the intern's school name:",
                when: (answers) => answers.role === "intern",
                validate: (school) => {
                    if (school && (school != "")) {
                        return true;
                    } else {
                        console.log("\nError: enter intern school");
                        return false;
                    }
                }
            },
        ],
    },
]

/*
Function to add a card to the HTML generated
*/
function startHtml(dataStr) {


}

function addCard(dataStr, employee) {


}

function closeHtml(dataStr) {

}

//call function to request input and then save to HTML file
function ProcessUserInput() {

    let htmlStr = []/*{ data: "" }*/; // object with string to add Html text

    console.log(" ---   Team  formation Application ---\n");
    // startHtml(htmlStr,beginHTML);

    inquirer.prompt(requests).then((answers) => {

        const mgr = new Mgr(answers.mgrName, answers.mgrId, answers.mgrEmail, answers.mgrOfc);
        generateCards.addMgrCard(/*htmlStr,*/ mgr);

        if (answers.Employees) {

            for (let i = 0; i < answers.Employees.length; i++) {
                // add employee cards here
                console.log(answers.Employees[i]);
                if (answers.Employees[i].role === "engineer") {
                    let tmpEng = new Eng(answers.Employees[i].name,
                                        answers.Employees[i].id,
                                        answers.Employees[i].email,
                                        answers.Employees[i].github);
                    generateCards.addEngCard( answers.Employees[i]);
                } else {
                    // it is an intern

                    generateCards.addInternCard( answers.Employees[i]);
                }
            }
        }

        // closing HTML file contentnode
        htmlStr = generateCards.addEndHTML();


        //Open file and write the data
        console.log(htmlStr.join(""));
        fs.writeFile("./dist/index.html", htmlStr.join(""), (error) => {
            if (!error) {
                console.log("SUCCESS: HTML created !!!");
            } else {
                console.log("Error writing output HTML file" + error)
            }
        });
    });

};

// Automatically call the function to request user input
ProcessUserInput();