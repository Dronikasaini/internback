const express = require('express');
const app = express();
const userschema = require('./Models/mongo')

const mongoose =require('mongoose')
const cors = require("cors");
app.use(cors({
  origin: "https://intern-1-jefc.onrender.com"
}));

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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

