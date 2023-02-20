import express from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());

const db = createConnection({
    user: 'root',
    host: 'localhost',
    password: 'pass@123',
    database: 'gpa_cal'
})

app.listen(8000, ()=>{
    console.log("Your server running on port 8000")
})

app.get('/',(req,res)=>{
    res.json("yai yai tama")
})

app.post('/create', (req,res)=>{
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    const psw = req.body.psw
    const createdDateTime = req.body.createdDateTime

    db.query('Insert Into userCredentials (`fname`, `lname`, `email`, `psw`, `createdDateTime`) VALUES (?,?,?,?,?,)'[fname,lname,email,psw,createdDateTime],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values Inserted")
        }
    })
})
