INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES 
    ('Sarah', 'Wilson', 1, NULL),
    ('Michael', 'Anderson', 2, 1),
    ('Emily', 'Garcia', 2, 1),
    ('David', 'Lee', 3, 2),
    ('Olivia', 'Martinez', 3, 2),
    ('James', 'Davis', 1, NULL),
    ('Sophia', 'Moore', 2, 6),
    ('Liam', 'Johnson', 2, NULL),
    ('Emma', 'Thompson', 3, 7),
    ('Noah', 'White', 3, NULL);

INSERT INTO role (title,salary,department_id) VALUES 
    ('Manager', 100000, 1),
    ('Sales Lead', 80000, 2),
    ('Salesperson', 50000, 2);
    ('Marketing Specialist', 60000, 2),
    ('Financial Analyst', 70000, 3),
    ('HR Coordinator', 55000, 4),
    ('Engineer', 90000, 5),
    ('Software Developer', 95000, 5),

INSERT INTO department (name) VALUES 
    ('Management'),
    ('Sales'),
    ('Finance'),
    ('HR'),
    ('Engineering');
    ('Administration')