import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kartar@1234",
  database: "school_management",
});

export default connection;