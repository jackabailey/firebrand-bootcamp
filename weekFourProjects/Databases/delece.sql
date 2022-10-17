-- Deleting Data

-- DELETE NEEDS A WHERE, OTHERWISE IT"LL DELETE EVERYTHING

DELETE FROM Employee
WHERE EmployeeID = 5;

-- You should ALWAYS delete by PRIMARY KEY!!! It's too risky to do this unless you know EXACTLY what you're doing and how it will affect the database

SELECT * FROM Employee;
