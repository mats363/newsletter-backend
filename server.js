var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
var mongoose = require('mongoose')
const userRoute = require("./routes/user-route");
const loginRoute = require("./routes/login-route");
const adminRoute = require("./routes/admin-route");
const cors = require('cors');

const app = express();
app.set("view-engine", "ejs");
app.use(express.json());

//app.use(express.static("./public"))
app.use(express.urlencoded({extended: false}));
app.use("/user", userRoute);
app.use("/login", loginRoute);
app.use("/admin", adminRoute);

app.use(cors())

async function init() {
    try {
        await mongoose.connect("mongodb://localhost:27017/myapplethestore")
        console.log("connected to database")
    } catch (error) {
        console.log("error" + error);
    }
    app.listen(4000);
}

init(); // Kör igång servern




/*
app.post("/login", (req, res) => {

});
*/
app.post("/register", (req, res) => {
    res.send("Registered user");
})

module.exports = app;