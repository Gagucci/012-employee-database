const inquirer = require("inquirer");
const db = require("./connection");

    function startMenu() {
        inquirer.prompt([
        {
            type: 'list',
            name: 'startPrompt',
            message: 'Navigate to your desired action',
            choices: [
            'View Employees',
            'View Roles',
            'View Departments',
            'Add new Employee',
            'Add new Role',
            'Add new Department',
            'Exit',
                ]
        }
    ]).then((response) => {
    switch (response.startPrompt) {
        case 'View Employees':
            viewEmployees();
            break;
        case 'View Roles':
            viewRoles();
            break;
        case 'View Departments':
            viewDepartments();
            break;
        case 'Add new Employee':
            addEmployee();
            break;
        case 'Add new Role':
            addRole();
            break;
        case 'Add new Department':
            addDepartment();
            break;
        case 'Exit':
            console.log('Logging out...');
            process.exit();
        default:

        }
    })
}

startMenu();