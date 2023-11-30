const express = require('express');
const {chats} = require("./data/data.js")
const dotenv = require("dotenv");
dotenv.config({path : '/Users/nileshs2002/Desktop/CODE/ChatApp/backend/.env'});
const connectDB = require('./Config/db.js');
const PORT = process.env.PORT || 8000;
const userRoutes = require('./Routes/userRoutes.js');
const {errorHandler, notFound} = require('./Middlewares/errorMiddleware.js')

connectDB();
const app = express();

app.use(express.json()); // to accpet json data

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

app.use("/api/user", userRoutes)

app.use(notFound)
app.use(errorHandler)


app.listen(6500, console.log(`Server started on port ${PORT}`));