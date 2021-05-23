DROP DATABASE IF EXISTS tracker_DB;

CREATE DATABASE tracker_DB;

USE tracker_DB;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL(8,2),
  department_id INT,
  FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY(role_id) REFERENCES role(id),
  FOREIGN KEY(manager_id) REFERENCES employee(id)
);

