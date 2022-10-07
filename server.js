// Import express
const express = require('express');
const app = express();

// Import inquirer
const inquirer = require('inquirer');

// Import console.table
const consoleTable = require('console.table');

// Import mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;


// Connec to the db
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'H0m3!sWh3r3Th3H3@rt!s',
  database: 'employee_db'
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected!");
  afterConnection();
})

afterConnection = () => {
  promptUser()
};

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
                'Update an employee role',
                'No further actions'
                ]
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
    if (choices === "No further actions") {
      connection.end()
    }
  })
};

// Function to show departments
showDepartments = () => {
  console.log("Showing departments");
  const sql = `SELECT * FROM department`;

  connection.promise().query(sql, (err, rows) =>{
    if (err) throw err;
    console.table(rows);
    connection.end()
  })
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});