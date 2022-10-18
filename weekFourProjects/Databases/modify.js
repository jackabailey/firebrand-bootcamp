// To connect to a database in SQL via JavaScript
const {createPool} = require("mysql2");

const pool = createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    connectionLimit: 10 // Optional
})

function queryFunction(){
    let sqlQuery = "SELECT * FROM firstDB.Employee"

    pool.query(sqlQuery, (err, result) => {
        if (err) { // Throw the error if there is one when querying the database
            console.log(err);
            throw err;
        }

        var data  = JSON.parse(JSON.stringify(result));
        console.log(data[0].EmployeeID);
        console.log(data[0].FullName);
        console.log(data[0].OfficeLocation);
    })
}

queryFunction();