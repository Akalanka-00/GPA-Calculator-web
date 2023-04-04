import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from 'morgan';
import dotenv from 'dotenv';
import { join } from 'path';
import router from "./routes/route.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(join(import.meta.url.slice(7), 'public')));
/** api routes */
app.use('/api', router)

//if there is a athu err, use bellow query in db
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_current_password';

app.get("/", (req, res) => {
  res.json("hello this is backend! home from backend server.");
});


app.listen(process.env.PORT,()=>{
  console.log('server started in port : ',process.env.PORT)
})