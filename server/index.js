import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass@123",
  database: "gpacalculator",
});
//if there is a athu err, use bellow query in db
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_current_password';

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello this is backend! home from backend server.");
});

// app.get("/signup", (req, res) => {
//   const q = "SELECT * FROM gpacalculator.usercredentials";
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

app.post("/signup", (req, res) => {
  const q = "INSERT INTO userCredentials (fname,lname,email,psw,createdDateTime) VALUES (?)";
//   const values = [
//         "fname from Back",
//         "lname from back",
//         "email pic from back",
//         "psw from back",
//         "createdDateTime from back"
//     ]
  const values = [
    req.body.fname,
    req.body.lname,
    req.body.email,
    req.body.psw,
    req.body.createdDateTime,
  ];
  res.json(values)
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("user has been added successfully",values);
  });
});

app.delete("/books:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been deleted successfully");
  });
});

app.put("/books:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title` = ?,`desc` = ?,`price` = ?,`cover` = ? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been updated successfully");
  });
});

app.listen(8000, () => {
  console.log("connected to the backend 8000!");
});