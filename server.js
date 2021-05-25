//dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const chalk = require("chalk");
const cTable = require("console.table");

const mainScreen = [
  "View All Departments",
  "View All Roles",
  "View All Employees",
  "Add Departments",
  "Add Roles",
  "Add Employees",
  "Update Employee Role",
  "Exit Program",
];

//connection object
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Y846y846",
  database: "tracker_db",
});

const start = () => {
  inquirer
    .prompt({
      type: "list",
      name: "main",
      message: "What would you like to do?",
      choices: mainScreen,
    })
    .then((answer) => {
      switch (answer.main) {
        case "View All Departments":
          viewDepts();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "View All Employees":
          viewEmployees();
          break;
        case "Add Departments":
          addDepts();
          break;
        case "Add Roles":
          addRoles();
          break;
        case "Add Employees":
          addEmployees();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "Exit Program":
          connection.end();
          break;
      }
    });
};

const viewDepts = () => {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
};

const viewRoles = () => {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
};

const viewEmployees = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
};

const addDepts = () => {
  inquirer
    .prompt({
      type: "input",
      name: "newDept",
      message: "What Department would you like to add?",
    })
    .then(function (res) {
      const department = res.newDept;
      const query = `INSERT INTO department (name) VALUES("${department}")`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
};

const addRoles = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newRole",
        message: "What is the Role you would like to add?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the Salary for this role?",
      },
      {
        type: "input",
        name: "deptid",
        message: "What is the Deptment ID for this role?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [answer.newRole, answer.salary, answer.deptid],
        (err, res) => {
          if (err) throw err;
          console.table(res);
          start();
        }
      );
    });
};

const addEmployees = () => {
  connection.query("SELECT *", (err, res) => {
    if (err) throw err;
  });
};

// const updateEmployeeRole = () => {
//   inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "empUpdate",
//       message: "Which employee are we updating?"
//     }
//   ])
//   connection.query("SELECT *", (err, res) => {
//     if (err) throw err;
//   });
// };

connection.connect((err) => {
  if (err) throw err;
  console.log(chalk.blue(`connected at id ${connection.threadId}\n`));
  console.log(chalk.red(`\n EMPLOYEE TRACKER\n`));
  start();
});
