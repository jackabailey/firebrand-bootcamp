-- UPDATE is dangerous - MySQL is the only flavour of SQL which has SafeUpdate. It means that you can only update with a WHERE - In any other case (at least without plugins) it will update EVERY Employee's location.

-- How to update it properly
UPDATE Employee
SET EmployeeLocation = "Barnslee"
WHERE EmployeeID = 4;

-- How to EASILY break your database! DON'T DO THIS, IDIOT
UPDATE Employee
SET EmployeeLocation = "Barnslee";

-- We can also update the table in other ways.
-- We can ADD columns
ALTER TABLE Employee
ADD Salary int;

ALTER TABLE Employee
ADD JobRole varchar(255);

ALTER TABLE Employee
ADD Mistake int;

-- and we can REMOVE them (Dangerous though)
ALTER TABLE Employee
DROP COLUMN Mistake;

-- DROP TABLE Employee;
-- THIS ONE IS VERY BAD!!! DONT RUN THIS UNLESS YOU REALLY WANT TO CRY!!! HOW ABOUT YOU DON'T GO AHEAD AND CLICK THE LIGHTNING BOLT ON THIS LITTLE QUERY HERE, YOU'LL HAVE A REALLY BAD TIME!!!

-- We can rename columns too
ALTER TABLE Employee
RENAME COLUMN EmployeeLocation TO BusinessName