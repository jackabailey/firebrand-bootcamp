CREATE TABLE Employee(
    -- A PRIMARY KEY is a unique identifier within a database table
    -- We try and use numbers instead of names (For the data type) 
    EmployeeID int PRIMARY KEY,
    FullName varchar(255),
    EmployeeLocation varchar(255), -- varchar stands for Variable Character
    IsEmployed bit -- 1 or 0
)

SELECT * FROM Employee;