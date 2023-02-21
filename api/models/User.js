const mongoose = require('mongoose');

userSchema = new mongoose.Schema({
    username : {type:String, unique:true},
    password : String
}, {timestamps: true});

const userModel = mogoose.model('User', userSchema);
module.export = userModel;