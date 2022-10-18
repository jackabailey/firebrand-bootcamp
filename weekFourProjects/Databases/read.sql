-- Reading from a database can be very simple, or can be extremely complex. The most simple way to read data is using:
SELECT * FROM Employee; -- Selects everything from the table

SELECT * FROM Employee WHERE EmployeeID = 1; -- Selects any value where the EmployeeID is 1. You should always select with a WHERE Primary Key.

-- We can also use operators
SELECT * FROM Employee WHERE EmployeeID = 1 OR FullName = "Someone Else"; -- Here, Both the entries with the EmployeeID of 1, or the FullName of 'Someone Else' will be shown in the output
SELECT * FROM Employee WHERE EmployeeID = 1 AND FullName = "Someone Else"; -- Here, ONLY values where the EmployeeID is 1, AND The FullName is 'Someone Else' will be shown. In this Simple Database no items will populate the output becaise there are no rows in the database where the EmployeeID and the FullName match the query.