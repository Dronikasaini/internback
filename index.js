const express = require('express');
const app = express();
const userschema = require('./Models/mongo')

const mongoose =require('mongoose')
const cors = require("cors");
app.use(cors('http://localhost:5173/'));

app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/get', (req, res) => {
    console.log("hello");
    res.send('thik hn route');
});
app.post('/post',async (req,res)=>{
    const {name,email,subject,message}=req.body;
    console.log(name,email,subject,message);
    const info = await userschema.create({
       
        name,
        email,
        subject,
        message

    });
      await info.save();
        res.status(200).json({message:'user  saved successfuly', info})

    console.log(info);
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
