# TeamProfileGenerator
Application that creates a team contact information.


## Description



## Table of Contents
- [DESCRIPTION](#Description)
- [REQUIREMENTS](#Requirements)
- [INSTALLATION](#Installation)
- [USAGE](#Usage)
- [TESTS](#Tests)
- [TOOLS](#Packages-and-tools-used)
- [LICENSE](#License)
- [](#)


## Requirements
There is an acceptance criteria for this project. It is as follows:

*** GIVEN a command-line application that accepts user input ***

> WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

> WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

> WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

>WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

> WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

> WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

> WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

> WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated


## Installation
 
Steps:

  1. Clone the repository from github https://github.com/fjunior1/TeamProfileGenerator
   using git clone 
 
  2. Verify node.js is installed from https://nodejs.org/en/download/

  3. initialize package.json by running the command "npm init" and answering the questions. Note: the following commands when installing packages will upate this package.json file.

  4. Verify inquirer is installed with the command "npm i inquirer" 

  5. Verify inquire-loop is installed with command "npm install --save inquirer-loop"

  6. Verify jest is installed with the comand "npm i jest" 


## Usage
  1. open a terminal window and go to the project folder

  2. run the applicaiton using the command: "node index.js"

  3. Answer the questions asked (add manager, employees and their correspongding data)

  4. When finished answering the questions, the applicaiton will create an HTML page located in folder /output named index.html.

## Tests
Each component of the application is tested with jest.


## Packages-and-tools-used
    - Node            [https://nodejs.dev/]
    - jest            [https://jestjs.io/]
    - inquirer        [https://www.npmjs.com/package/inquirer]
    - Inquirer loop  [https://www.npmjs.com/package/inquirer-loop] 
    - fs              [https://nodejs.org/api/fs.html#fs_file_system]
    websites:
    - cards           [https://www.w3schools.com/howto/howto_css_cards.asp]
    - materialize CSS [https://www.tutorialspoint.com/materialize/materialize_cards.htm]
    - cloud convert   [https://cloudconvert.com/mp4-to-gif] 
    - REGEX           [https://regex101.com/]

## License
GNU General Public License 3.0  
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Example
![example running app](./dist/test-video.gif)