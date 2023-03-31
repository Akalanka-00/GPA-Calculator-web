const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
var path = require("path");

const auth_router = require('./routes/auth_router')
const service_router = require('./routes/service_router')



dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use('/api/auth',auth_router)
app.use('/api/service',service_router)

//if there is a athu err, use bellow query in db
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_current_password';

app.get("/", (req, res) => {
  res.json("hello this is backend! home from backend server.");
});



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

app.listen(process.env.PORT,()=>{
  console.log('server started in port : ',process.env.PORT)
})