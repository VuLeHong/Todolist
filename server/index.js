const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const async = require('async')
const UserModel = require('./Model/User')
const asyncHandler = require('express-async-handler')

const app = express()
app.use(cors())
app.use(express.json())

const MONGO = "mongodb+srv://hard_cva:hoan104.@ba.baziy8b.mongodb.net/?retryWrites=true&w=majority&appName=ba"
async function connect(){
    try {
        await mongoose.connect(MONGO);
        console.log("Connect to MongoDB");
    } catch (error) {
        console.error(error);
        console.log("err in mongo")
    }
}

connect();
//user
app.post('/signup', (req,res) => {
    const {name, email, password} = req.body;
    const user =  UserModel.create({
        name:name,
        email:email,
        password:password,
        tasks:[],
    })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
app.post('/login', (req,res) =>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.status(200).json(user);
            
            }else{
                res.status(202).json(user);
            }
        }else {
            res.status(204).json(user);
        }
    })
    
})
//home
app.post('/delete', asyncHandler(async(req,res) =>{
    const{email, id} = req.body;
    const task = {_id: id, done:false}
   const works = await UserModel.findOneAndUpdate({email:email}, {$pull: {tasks:task}})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}))
app.post('/updatedone', asyncHandler(async(req,res) =>{
    const{email, index} = req.body;
    const getUsertoChange = await UserModel.findOne({email: email});
    update = getUsertoChange.tasks;
    update[index].done = true;
    console.log(update);
    const works = await UserModel.findOneAndUpdate({email:email}, {tasks: update})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}))

app.post('/update', asyncHandler(async(req,res) =>{
    const{email, index} = req.body;
    const getUsertoChange = await UserModel.findOne({email: email});
    update = getUsertoChange.tasks;
    update[index].done = false;
    console.log(update);
    const works = await UserModel.findOneAndUpdate({email:email}, {tasks: update})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}))
app.post('/get', (req,res) =>{
    const {email} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
            res.json(user);   
    })
    .catch(err => res.json(err))
})
app.post('/add', asyncHandler(async(req,res) =>{
    const{email, task_name} = req.body;
    const task = {task_name: task_name, done:false}
   const works = await UserModel.findOneAndUpdate({email:email}, {$push: {tasks:task}})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}))
app.listen(3000, ()=>{
    console.log("server is runnning")
})