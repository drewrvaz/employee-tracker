// Import connection
const sequelize = require('./config/connection');

// Import inquirer
const inquirer = require('inquirer');

// Import console.table
const consoleTable = require('console.table');

// Import mysql2
const mysql = require('mysql2');

promptUser();

// Inquirer prompt for the user's first choice
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'choices',
      message: 'What would you like to view?',
      choices: ['View all departments', 
                'View all roles', 
                'View all employees', 
                'Add a department', 
                'Add a role', 
                'Add an employee', 
                'Update an employee role']
    }
  ])
  .then((answers) => { // If statements to run function based on user choice
    const { choices } = answers;
    if (choices === "View all departments") {
      showDepartments()
    }
    if (choices === "View all roles") {
      showRoles()
    }
    if (choices === "View all employees") {
      showEmployees()
    }
    if (choices === "Add a department") {
      addDepartment()
    }
    if (choices === "Add a role") {
      addRole()
    }
    if (choices === "Add an employee") {
      addEmployee()
    }
    if (choices === "Update an employee role") {
      updateEmployee()
    }
  })
};

// Function to show departments
showDepartments = () => {

};

// Function to show roles
showRoles = () => {

};

// Function to show employees
showEmployees = () => {

};

// Function to add a department
addDepartment = () => {

};

// Function to add a role
addRole = () => {

};

// Function to add an employee
addEmployee = () => {

};

// Function to update an employee
updateEmployee = () => {

};

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});