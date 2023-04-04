import { createConnection } from "mysql";

const conn = createConnection({
  host: "localhost",
  user: "root",
  password: "pass@123",
  database: "gpa_calculator",
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("connected");
});

export default conn;
