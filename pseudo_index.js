/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Imports classes for Manager, Engineer, Intern
// Imports external package 'inquirer'
// Imports 'path' from node library to be used to create output folder and file name
//    Hint: __dirname, process.cwd() or you can use relative path without using 'path' library function
// Imports 'fs' from node library

// Imports page template function and assign the function to a variable

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


