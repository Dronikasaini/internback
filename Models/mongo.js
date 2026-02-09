const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://brassyame305_db_user:yfb493ZC2wzZX0HQ@cluster0.xkrz1re.mongodb.net/internship')
.then(()=> {
    console.log("connect hogya!!!!");
    
})
const userschema=new mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String,
})
module.exports=mongoose.model('new',userschema)