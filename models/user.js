const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required : true
    },
    age:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    mobile:{
        type: String,
        required : false
    },
    password:{
        type: String,
        required : false
    }
})

module.exports = mongoose.model('user',userSchema)