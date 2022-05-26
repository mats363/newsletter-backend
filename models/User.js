const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    subStatus: Boolean
})

module.exports = mongoose.model("user", userSchema);