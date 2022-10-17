-- UPDATE is dangerous - MySQL is the only flavour of SQL which has SafeUpdate. It means that you can only update with a WHERE - In any other case (at least without plugins) it will update EVERY Employee's location.

-- How to update it properly
UPDATE Employee
SET EmployeeLocation = "Barnslee"
WHERE EmployeeID = 4;

-- How to EASILY break your database! DON'T DO THIS, IDIOT
UPDATE Employee
SET EmployeeLocation = "Barnslee";


SELECT * FROM Employee;