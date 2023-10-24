const mongoose = require('mongoose');

const url = "mongodb+srv://nileshsrivastava2020:CP6p9uUXSGOPeBzC@cluster0.qnrnl9c.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected ${conn.connection.host}`);
    }
    catch (error){
        console.log(`Error ${error}`);
        process.exit();
    }
};

module.exports = connectDB;