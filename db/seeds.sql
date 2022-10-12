INSERT INTO department (name)
VALUES ("Engineering"),
       ("Sales"),
       ("Legal"),
       ("Financing"),
       ("Executive");

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 300000, 5),
       ("Salesperson", 80000, 2),
       ("Sales Manager", 100000, 2),
       ("Software Engineer", 120000, 1),
       ("Lead Engineer", 150000, 1),
       ("Account Manager", 160000, 4),
       ("Accountant", 125000, 4),
       ("Legal Team Lead", 250000, 3),
       ("Lawyer", 190000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jean-Ralphio", "Saperstein", 1, 2),
       ("Tom", "Haverford", 2, 9),
       ("Andy", "Dwyer", 3, 4),
       ("Ron", "Swanson", 4, 9),
       ("Ben", "Wyatt", 5, 9),
       ("Jerry", "Gergich", 6, 5),
       ("Leslie", "Knope", 7, 9),
       ("April", "Ludgate", 8, 7),
       ("Anne", "Perkins", 1, NULL);
