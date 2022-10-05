/* Removes any previous databases called employee_db */
DROP DATABASE IF EXISTS employees_db;
/* Creates employees_db */
CREATE DATABASE employees_db;

USE employees_db;

/* Creates department table */
CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL
);

/* Had to call this position because role is a trigger word in sql apparently? */
/* Creates position table */
CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

/* Creates employees table */
CREATE TABLE employees (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);
