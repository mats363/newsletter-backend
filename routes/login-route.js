const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');
const cors = require('cors')

router.use(cors());

router.get("/", (req, res) => {
    
    console.log(req.body + "req");
    res.render("login.ejs");
})

router.post("/", (req, res) => {
    console.log(req.body.name);
    let admin = {user: "admin", password: "admin"};
    if (admin.user === req.body.name && admin.password === req.body.password) {
        
        res.redirect("/admin");
     
    } else {
        res.json("Fel lösen. Försök igen");
    }
    
})



module.exports = router;    