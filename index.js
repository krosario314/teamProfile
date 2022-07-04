// required
const Manager = require("./lib/manager"); // proper tagging lns 2-12

const Engineer = require("./lib/engineer"); 

const Intern = require("./lib/intern"); 

const inquirer = require("inquirer");

const fs = require("fs");

const util = require("util");

const html = require("./src/htmlTemplate"); // retag later

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
            message: "Enter the name of your employee:",
          },
          {
            type: "input",
            name: "id",
            message: "Enter your employee's ID:",
          },
          {
            type: "input",
            name: "email",
            message: "Enter your employee's email address:",
          },
          {
            type: "input",
            name: "position",
            message: "Enter employee's position:",
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
              message: "Enter employee's GitHub username.",
          }, ]);

          const engineer = new Engineer(respond0.name, respond0.id, respond0.email, respond1lii.github);
          tArray.push(engineer);
          console.log(tArray)
        } 
      } catch {if (respond0.role === "Manager") {
        respond1 = await inquirer.prompt([{
          type: "input",
          name: "officeNumber",
          message: "Enter employee's office number:",
        }, ]);

        const manager = new Manager( respond0.name, respond0.id, respond0.email, respond1.officeNumber);
        tArray.push(manager);
        console.log(tArray)
      } else if (respond0.role === "Intern") {
        respond1 = await inquirer.prompt([{
          type: "input",
          name: "school",
          message: "Enter employee's institution:",
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
main();