const express = require("express");
const expressJson = require("express-json");
const routes = require("./routes.js");
const connectDB = require("./mongoConn.js");

const app = express();
connectDB();
app.use(expressJson);
app.use("/", routes);


app.listen(3000, ()=>{
    console.log("listening on port 3000");
})

//final commit