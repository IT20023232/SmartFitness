const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    topic:{
        type: String,
        required : true
    },
    discription:{
        type: String,
        required : true
    },
    postCatergory:{
        type: String,
        required : true
    }
})

module.exports = mongoose.model('posts',postSchema)