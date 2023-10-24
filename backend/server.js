const express = require('express');
const {chats} = require("./data/data.js")
const dotenv = require("dotenv");
const connectDB = require('./Config/db.js');
const PORT = process.env.PORT || 9000;


dotenv.config();
const app = express();
connectDB();

app.get("/", (req, res)=>{
    res.send("Hello from API..");
});

app.get("/api/chat", (req, res)=>{
    res.send(chats);
});

app.get("/api/chat/:id", (req,res)=>{
    // console.log(req.params.id);
    const singleChat = chats.find((c)=> c._id === req.params.id);
    res.send(singleChat);
})


app.listen(6500, console.log(`Server started on port ${PORT}`));