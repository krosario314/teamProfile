// applications required
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const html = require("./src/htmlTemplate");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let tArray = [];
let tString = ``;

console.clear();
console.log("---------------------------------------------");
console.log("Team Portfolio Generator")

// run app
async function main() {
    try {
        await prompt()

        for (let i = 0; i < tArray.length; i++) {
            tString = tString + html.generateCard(tArray[i]);
        }

        let finalHtml = html.generateHTML(tString)

        console.clear();
        console.log("---------------------------------------------");
        console.log("Generating index.html file....");
        console.log("---------------------------------------------");

        writeFileAsync("index.html", finalHtml);

        console.clear();
        console.log("---------------------------------------------");
        console.log("index.html file created successfully");
        console.log("---------------------------------------------");

    } catch (err) {
        return console.log(err);
    }
}

// Inquirer prompts to collect user data
async function prompt() {
    let responseDone = "";

    do {
        try {
            console.log("---------------------------------------------");
            let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is employee's name?",
                    
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter employee's ID: ",
                    
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter employee's email address: ",
                    
                },
                {
                    type: "list",
                    name: "role",
                    message: "What is the employee's role: ",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager"
                    ]
                }
            ]);

            let response2 = ""

            if (response.role === "Engineer") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "github",
                    message: "What is the employee's github username?: ",
                    
                }, ]);

                // add to tArray
                const engineer = new Engineer(response.name, response.id, response.email, response2.github);
                tArray.push(engineer);
                console.log(tArray)
            
            } else if (response.role === "Manager") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "officeNumber",
                    message: "What is the employee's office number?: ",
                    
                }, ]);

                // add to tArray
                const manager = new Manager( response.name, response.id, response.email, response2.officeNumber);
                tArray.push(manager);
                console.log(tArray)

            } else if (response.role === "Intern") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "school",
                    message: "What school is employee attending: ",
                   
                }, ]);

                // add to tArray
                const intern = new Intern( response.name, response.id, response.email, response2.school);
                tArray.push(intern);
                console.log(tArray)
            }
        } catch (err) {
            return console.log(err);
        }
        responseDone = await inquirer.prompt([{
            type: "list",
            name: "finish",
            message: "Do you want to continue?: ",
            choices: [
                "Yes",
                "No"
            ]
        },]);
    } while (responseDone.finish === "Yes");
}

// call main
main();