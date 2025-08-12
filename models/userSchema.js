const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    firstName : {
        required : true,
        type : String
    },

    lastName : {
        required : true,
        type : String
    }
});

module.exports = mongoose.model("userModel", userSchema);