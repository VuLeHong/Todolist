const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique:true,
    },
    email: {
        type:String,
        require: true,
        unique:true,
    },
    password: {
        type:String,
        require:true,
    },
    tasks:[
        {
            task_name:{
                type:String,
            },
            done: {
                type:Boolean,
                default:false,
                },
        }
    ],
    isAdmin: {
        type:Boolean,
        require:true,
        default:false,
    },
})

const UserModel = mongoose.model('Users', UserSchema)
module.exports = UserModel