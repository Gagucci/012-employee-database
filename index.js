const inquirer = require("inquirer");
const db = require("./connection");
require("console.table");

// function to initialize the program and prompt the user on what action they would like to take
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

// function to view all employees when selected from the start menu
function viewEmployees() {
    // query to view all employees
    db.query(
        `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON manager.id = employee.manager_id`,
        (err, res) => {
            if (err) { console.log(err) }
            console.table(res);
            startMenu();
        })
}

// function to view all roles when selected from the start menu
function viewRoles() {
    db.query(
        'SELECT * FROM role',
        // role.title,
        // role.id,
        // role.salary,
        // department.name,
        (err, res) => {
            if (err) { console.log(err) };
            console.table(res);
            startMenu();
        })
};

// function to view all departments when selected from the start menu
function viewDepartments() {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) { console.log(err) };
        console.table(res);
        startMenu();
    })
};

function addEmployee() {
    db.query(`SELECT * FROM role`, (err, roles) => {
        db.query(`SELECT * FROM employee`, async (err, employee) => {
            const responses = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: 'What is the employees first name?',
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'What is the employees last name?',
                },
                {
                    type: 'list',
                    name: 'role_id',
                    choices: roles.map(role => {
                        return {
                            name: role.title,
                            value: role.id
                        }
                    }),
                    message: 'What is the employees role?',
                },
                {
                    type: 'list',
                    name: 'manager_id',
                    choices: employee.map(employee => {
                        return {
                            name: `${employee.first_name} ${employee.last_name}`,
                            value: employee.id
                        }
                    }),
                    message: 'Who is the employees manager?',
                },
            ]).then((answers) => {
                const schema = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
                const params = [answers.first_name, answers.last_name, answers.role_id, answers.manager_id];
                db.query(schema, params, (err, res) => {
                    if (err) { console.log(err) };
                    console.log('Employee added!');
                    startMenu();
                })
            })

            //console.log(responses);

        })
    })
}

function addDepartment() {

}

function addRole() {

}