USE employee_db;

INSERT INTO department (name) VALUES 
    ('Management'),
    ('Sales'),
    ('Finance'),
    ('HR'),
    ('Engineering'),
    ('Software'),
    ('Administration');

INSERT INTO role (title,salary,department_id) VALUES 
    ('Manager', 80000, 1),
    ('Sales Lead', 80000, 2),
    ('Salesperson', 50000, 2),
    ('Marketing Specialist', 60000, 3),
    ('Financial Analyst', 70000, 4),
    ('HR Coordinator', 55000, 5),
    ('Engineer', 90000, 6),
    ('Software Developer', 95000, 7);

INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES 
    ('Sarah', 'Wilson', 1, NULL),
    ('Michael', 'Anderson', 2, 1),
    ('Emily', 'Garcia', 2, 1),
    ('David', 'Lee', 3, 2),
    ('Olivia', 'Martinez', 4, 2),
    ('James', 'Davis', 4, NULL),
    ('Sophia', 'Moore', 5, 6),
    ('Liam', 'Johnson', 6, NULL),
    ('Emma', 'Thompson', 7, 7),
    ('Noah', 'White', 7, NULL);