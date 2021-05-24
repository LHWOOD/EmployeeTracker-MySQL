//dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const chalk = require("chalk");
const cTable = require("console.table");
const mainScreen = [
  "View All Employees",
  "View All Employees By Department",
  "View All Employees by Manager",
  "Add Employees",
  "Remove Employees",
  "Update Employee Role",
  "Update Employee Manager",
  "View All Roles",
  "Add Role",
  "Remove Role",
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
        case "View All Employees":
          viewAll();
          break;
        case "View All Employees by Department":
          viewByDept();
          break;
        case "View All Employees by Manager":
          viewByManager();
          break;
        case "Add Employees":
          addEmployees();
          break;
        case "Remove Employees":
          removeEmployees();
          break;
        case "Update Employee Role":
          updateRole();
          break;
        case "Update Employee Manager":
          updateManager();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add Role":
          addRoles();
          break;
        case "Remove Role":
          removeRole();
          break;
      }
    });
};

const viewAll = () => {
  connection.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
};

connection.connect((err) => {
  if (err) throw err;
  console.log(chalk.blue(`connected as id ${connection.threadId}\n`));
  start();
});
