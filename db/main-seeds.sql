DROP DATABASE IF EXISTS tracker_DB;

CREATE DATABASE tracker_DB;

USE tracker_DB;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
);

INSERT INTO department (department_name)
value
("Sales"), ("Engineering"), ("Finance"), ("Legal");

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL(8,2),
  department_id INT
);

INSERT INTO role (title, salary, department_id)
value
("Sales Lead", 80000, 1), 
("Salesperson", 60000, 1), 
("Software Engineer", 85000, 2), 
("Lead Engineer", 105000, 2), 
("Accountant", 75000, 3), 
("Lawyer", 90000, 4), 
("Legal Team Lead", 110000, 4);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
values ("June", "Bug", "7", null), 
("Janine", "Von Bean", "6", "101"), 
("Kate", "Bossman", "1", null), 
("Addy", "Williams", "2", "111"), 
("Bailey", "Wood", "4", null), 
("Tupelo", "Honey", "3", "121"), 
("Ellie", "Vader", "3", "130"), 
("Sam", "McKay", "2", "131"), 
("Margaret", "Cubs", "5", "140"), 
("Glenna", "Hoots", "6", "141");