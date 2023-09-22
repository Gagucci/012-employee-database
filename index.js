const inquirer = require("inquirer");
const db = require("./connection");

function startMenu() {
    inquirer.prompt([
    {
        type: 'list',
        name: 'startPrompt',
        message: ''    
    },
    ])
}