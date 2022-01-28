const express = require('express');
const app = express();
const mongoose=require("mongoose");
const bodyParser= require('body-parser');
require('dotenv').config();
const mongo=require("./mongo")
const cors=require('cors');
app.use(bodyParser.json());

//Import Routes
const postsRoute=require('./routes/posts');
const postsRoute2=require('./routes/posts2');
const postsRoute3=require('./routes/posts3');
const postsRoute4=require('./routes/posts4');
const postsRoute5=require('./routes/posts5');

app.use('/posts',postsRoute);
app.use('/posts2',postsRoute2);
app.use('/posts3',postsRoute3);
app.use('/posts4',postsRoute4);
app.use('/posts5',postsRoute5);

const corsOptions ={
    origin:'http://localhost:5000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
//Connect to db
const connectTo= async ()=>{
    await mongo().then((mongoose)=>{
        try{
            console.log("Connected");
        }catch(err){
            console.log(err);
        }
    })
}
connectTo();

//Start listening to server
app.listen(5000);
