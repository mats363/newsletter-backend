const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');
const cors = require('cors')


router.use(cors());

router.get("/", (req, res) => {
    
    console.log(req.body + "req");
    res.render("login.ejs");
})

router.post("/", async (req, res) => {
    
    let admin = {user: "admin", password: "admin"};
    if (admin.user === req.body.name && admin.password === req.body.password) {
        
        const users = await UserModel.find();
    
        let showSub = false;
        function view () {
            showSub = !showSub;
        }
        let subUsers = users.map(user => user.subStatus === true);
        res.render("admin.ejs", {users: users, subUsers: subUsers, showSub, view})
     
    } else {
        res.json("Fel lösen. Försök igen");
    }
    
})



module.exports = router;    