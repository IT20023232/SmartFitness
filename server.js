const express = require('express');
const mongoose = require('mongoose');
const bodyPaser = require('body-parser');
const cors = require('cors');

const app = express();

//imports route
const postRoutes = require('./routes/posts');
const weighttraining = require('./routes/weighttraining');
const userRoutes = require('./routes/user');

//midleware
app.use(bodyPaser.json());
app.use(cors()); //cors enaeble

app.use(postRoutes);
app.use(weighttraining);
app.use(userRoutes);

const PORT = 8000;

const DB_URL = 'mongodb+srv://twg:twg123@nextdoor.zou5uvd.mongodb.net/nextdoor?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
  useNewUrlParser :true,
  useUnifiedTopology :true
})
.then(() => {
  console.log("DB conected");
})
.catch ((err)=>console.log("con fail",err));

app.listen(PORT, ()=>{
    console.log(`app is runing on port ${PORT}`)
});