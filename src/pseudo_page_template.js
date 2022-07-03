/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Step 1. export function to generate entire html page with template literal
// Step 2. function to create team template
// Step 3. functions to generate manager, engineer, and intern templates

// Step 3a. function to generate manager card template
//  - take in manager as input parameter, a manager object
//  - create manager card template
//  -   call get name, get role, get id, get email, and get office number methods to fill in the template
//  - return the template to the caller

// Step 3b. function to generate engineer card template
//  - take in engineer as input parameter, an engineer object
//  - create engineer card template
//  -   call get name, get role, get id, get email, and get github methods to fill in the template
//  - return the template to the caller

// Step 3c. function to generate intern card template
//  - take in intern as input parameter, an intern object
//  - create intern card template
//  -   call get name, get role, get id, get email, and get school methods to fill in the template
//  - return the template to the caller

// Step 2. function to create the team template
// take in team as input parameter from the caller
//  - create an empty array to hold the template literal strings for the entire team members
//  - 1. use array.filter() on team to get the new array with only 'Manager' members via getRole method
//  -   use array.map() on the 'Manager' arrray and in the callback function to call a function to generate manager card template passing each manager as input argument
//  -   convert the resultant manager template array from .map() into string using .join()
//  -   the converted template leterail string is pushed to the empty team template array
//  - 2. use array.filter() on team to get the new array with only engineer members via getRole method
//  -   use array.map() on the engineer arrray and in the callback function to call a function to generate engineer card template passing each engineer as input argument
//  -   convert the resultant engineer template array from .map() into string using .join()
//  -   the converted template leterail string is pushed to the empty team template array
//  - 3. use array.filter() on team to get the new array with only intern members via getRole method
//  -   use array.map() on the intern arrray and in the callback function to call a function to generate intern card template passing each intern as input argument
//  -   convert the resultant intern template array from .map() into string using .join()
//  -   the converted template leterail string is pushed to the empty team template array
//  - 4. convert the empty team template array (now is not empty) into template string, then return it to the caller



// Step 1. export function to generate entire html page with template literal
//  - this function takes in team as input parameter from the caller, which is array of answer objects from user input
//  - in this function, within the template literal, you will call another function to create the team template
//  -   passing team , array of answer objects, as input argument
//  - you will return the template to the caller
//  - export the function
