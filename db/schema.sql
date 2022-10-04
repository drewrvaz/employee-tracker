/* Removes any previous databases called employee_db */
DROP DATABASE IF EXISTS employees_db;
/* Creates employees_db */
CREATE DATABASE employees_db;

USE employees_db;

/* Creates department table */
CREATE TABLE department (
  id INT NOT AUTO_INCREMENT NULL PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

/* Had to call this position because role is a trigger word in sql apparently? */
/* Creates position table */
CREATE TABLE position (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

/* Creates eployee table */
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL ,
    first_name VARCHAR(30) NOT NULL,
    last_name DECIMAL NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES position(id)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);
