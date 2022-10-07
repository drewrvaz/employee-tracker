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
  console.log("Showing departments");
  const sql = `SELECT role.*, department.name
                              AS department
                              FROM role
                              LEFT JOIN department
                              ON role.department_id = department.id
                              WHERE role.id = ?`;

  connection.promise().query(sql, (err, rows) =>{
    if (err) throw err;
    console.table(rows);
    connection.end()
  })
};

// Function to show employees
showEmployees = () => {
  console.log("Showing employees");
  const sql = `SELECT * FROM employee`;

  connection.promise().query(sql, (err, rows) =>{
    if (err) throw err;
    console.table(rows);
    connection.end()
  })
};

// Function to add a department
addDepartment = () => {
  // Inquirer prompt to add a department to the database
  inquirer.prompt([
    {
      type: 'input',
      name: 'addDept',
      message: "What is the new department you would like to add?"
    },
  ])
  .then(answer => { // Then function to add the department input to the database
    const sql = `INSERT INTO department (name)
                 VALUES (?)`;
    connection.query(sql, answer.addDept, (err, result) => {
      if (err) throw err;
      console.log("Added " + answer.addDept + " to your company's departments!")

      showDepartments();
    })
  })
};

// Function to add a role
addRole = () => {
  // Inquirer prompts for adding a role to the database
  inquirer.prompt([
    {
      type: 'input',
      name: 'addRole',
      message: "What is the new role you would like to add?"
    },
    {
      type: 'input',
      name: 'addSalary',
      message: "What is the salary for this new role?"
    },
    {
      type: 'input',
      name: 'chooseDept',
      message: 'What department would you like this role to be added to?'
    }
  ])
  .then(answer => { // Then function to add the role input to the database
    const sql = `INSERT INTO role (title, salary, department_id)
                 VALUES (?, ?, ?)`;
    // Const to house user input for adding a role
    const responses = [answer.addRole, answer.addSalary, answer.chooseDept]
    connection.query(sql, responses, (err, result) => {
      if (err) throw err;
      console.log("Added " + answer.role + " to your company's roles!")

      showRoles();
    })
  })
};

// Function to add an employee
addEmployee = () => {
  // Inquirer prompts for adding an employee to the database
  inquirer.prompt([
    {
      type: 'input',
      name: 'addFirstName',
      message: "What is the new employee's first name?"
    },
    {
      type: 'input',
      name: 'addLastName',
      message: "What is the new employee's last name?"
    },
    {
      type: 'input',
      name: 'chooseRole',
      message: 'What role does this employee have?'
    },
    {
      type: 'input',
      name: 'chooseManager',
      message: "Who is the employees manager?"
    }
  ])
  .then(answer => { // Then function to add the employee input to the database
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                 VALUES (?, ?, ?, ?)`;
    // Const to house the user input for adding an employee
    const responses = [answer.addFirstName, answer.addLastName, answer.chooseRole, answer.chooseManager]
    connection.query(sql, responses, (err, result) => {
      if (err) throw err;
      console.log("Added " + answer.addFirstName + " " + answer.addLastName + " to your company's departments!")

      showEmployees();
    })
  })
};

// Function to update an employee
updateEmployee = () => {

};

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});