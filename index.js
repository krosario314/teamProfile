// required
const Manager = require("./lib/pseudo_Manager"); // retag later

const Engineer = require("./lib/pseudo_Engineer"); // retag later

const Intern = require("./lib/pseudo_Intern"); // retag later

const inquirer = require("inquirer");

const fs = require("fs");

const util = require("util");

const html = require("./src/pseudo_page_template"); // retag later

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let tArray = [];
let tString = ``;

console.clear();
console.log("----------------------------------------");
console.log("Team Profile Generator!")

async function main() {
  try {
    await prompt()
    for (let i = 0; i < tArray.length; i++) {
      tString = tString + html.generateCard(tArray[i]);
    }
    let resultHtml = html.generateHTML(tString)
    console.clear();
    console.log("----------------------------------------");
    console.log("index.html file created");
    console.log("----------------------------------------");
  } catch (err) {
      return console.log(err);
  }
}
async function prompt() {
  let respondDone = "";
  do {
    try {
      console.log("----------------------------------------");
        let respond0 = await inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "Enter the name of your employee. ",
          },
          {
            type: "input",
            name: "id",
            message: "Enter your employee's ID. ",
          },
          {
            type: "input",
            name: "email",
            message: "Enter your employee's email address. ",
          },
          {
            type: "input",
            name: "position",
            message: "Enter employee's position. ",
            choices: [
              "Engineer",
              "Intern",
              "Manager"
            ]
          }
        ]);
        let respond1 = ""
        if (respond0.role === "Engineer") {
          respond1 = await inquirer.prompt([{
              type: "input",
              name: "github",
              message: "Enter employee's GitHub username. ",
          }, ]);

          const engineer = new Engineer(respond0.name, respond0.id, respond0.email, respond1lii.github);
          tArray.push(engineer);
          console.log(tArray)
        } 
      } catch {if (respond0.role === "Manager") {
        respond1 = await inquirer.prompt([{
          type: "input",
          name: "officeNumber",
          message: "Enter employee's office number. ",
        }, ]);

        const manager = new Manager( respond0.name, respond0.id, respond0.email, respond1.officeNumber);
        tArray.push(manager);
        console.log(tArray)
      } else if (respond0.role === "Intern") {
        respond1 = await inquirer.prompt([{
          type: "input",
          name: "school",
          message: "Enter employee's institution. ",
        }, ]);

        const intern = new Intern( respond0.name, respond0.id, respond0.email, respond1.school);
        tArray.push(intern);
        console.log(tArray)
      }
    } while (err) {
      return console.log(err);
    }
    respondDone = await inquirer.prompt([{
      type: "list",
      name: "finish",
      message: "Would you like to continue? ",
      choices: [
        "Yes",
        "No"
      ]
    },]);
  } while (respondDone.finish === "Yes");
}

// Create variables for the output folder and the html file name

// Create an empty array to store the team member objects

// Create an empty array to store employee IDs to be used to check for the dupliates

// **********************
// Main Pfocess
// **********************

// Call the starter function

// starter function to start the program
//
//  1a. call create manager function
//
//  1b. function to create manager
//      - inquire user to enter manager's name, id, email, and office number
//      - in .then callback, create manager object from the Manager class by initializing it with the properties in answer object
//      - push the manager object to the empty team memeber object array
//      - push the manager's id to the empty id array
//      - call create team function
//
//  2. function to create team (called from create manager, add engineer, add intern functions)
//      - inquire user to pick employee from the list of engineer, intern, or exit (done with adding employees)
//      - in .then callback, based on user's choice, call add engineer or add intern or, for the choice of exit, call build team function
//
//  3. function to add engineer
//      - inquire user to enter engineer's name, id, email, and github
//      - in .then callbackl create engineer object from the Engineer class by initializing it with the properties in answer object
//      - push the engineer object to the empty team member object array
//      - push the engineer's id to the empty id array
//      - call create team function
//
//  4. function to add intern
//      - inquire user to enter intern's name, id, email, and school
//      - in .then callback, create intern object from the intern class by initializing it with the properties in answer object
//      - push the intern object to the empty team member object array
//      - push the intern's id to the empty id array
//      - call create team function
//
//  5. function build team
//      - check if the output folder path already exists.
//      -   if not, create it
//      - call page template function passing the team member object array as input argument
//      - write the returned template function to the output
//
//      - Hint: fs.existsSync, fs.mkdirSync, and fs.writeFileSync


