const mongoose = require("mongoose");
dotenv.config();

const connectDB = () => {
    
    try{
        mongoose.connect(PROCESS.env.CONNECTION_STRING);
        console.log("DB connected Successfully")
    }

    catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;