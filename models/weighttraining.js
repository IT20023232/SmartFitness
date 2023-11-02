const mongoose = require("mongoose");
const weightTrainingSchema = new mongoose.Schema({

    topic:{
        type: String,
        required : true
    },
    discription:{
        type: String,
        required : true
    },
    photo:{
        type: String,
        required : true
    },
    vedeo:{
        type: String,
        required : false
    }
})

module.exports = mongoose.model('weighttraining',weightTrainingSchema)