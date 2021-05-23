//dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const chalk = require("chalk");
const cTable = require("console.table");

//connection object
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Y846y846",
  database: "tracker_db",
});

const test = () => {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};

connection.connect((err) => {
  if (err) throw err;
  console.log(chalk.blue(`connected as id ${connection.threadId}\n`));
  test();
});
