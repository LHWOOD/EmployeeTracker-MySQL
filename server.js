//dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const chalk = require("chalk");
const cTable = require("console.table");
const mainScreen = [
  "View All Employees",
  "View All Employees By Department",
  "View All Employees by Manager",
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
  inquirer.prompt({
    type: "list",
    name: "main",
    message: "What would you like to do?",
    choices: mainScreen,
  });
};

connection.connect((err) => {
  if (err) throw err;
  console.log(chalk.blue(`connected as id ${connection.threadId}\n`));
  start();
});
