INSERT INTO Employee 
VALUES(1, "Jack", "125 London Wall", 1);
-- ID, First Name, Location, Employed

INSERT INTO Employee 
VALUES(2, "Jascub", "Smelly Manchester", 0)
(3, "Someone Else", "Somewhere Else", 1);\
-- Inserting multiple values at once

INSERT INTO Employee(EmployeeID, FullName, isEmployed)
VALUES(4, "Another Person without a location", 1) -- Without specifying the location, this will be NULL in the DB

SELECT * FROM Employee;

