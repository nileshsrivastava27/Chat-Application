const mongoose = require('mongoose');

// url = "mongodb+srv://nileshsrivastava2020:CP6p9uUXSGOPeBzC@cluster0.qnrnl9c.mongodb.net/?retryWrites=true&w=majority";


const connectDB = async() => {
    try {
        console.log(process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
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