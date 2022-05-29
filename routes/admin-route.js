const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');
const cors = require('cors')

router.use(cors());

router.get("/", async (req, res) => {
    const users = await UserModel.find();
    //res.status(200).json(users);
    let showSub = false;
    function view () {
        showSub = !showSub;
    }
    let subUsers = users.map(user => user.subStatus === true);
    res.render("admin.ejs", {users: users, subUsers: subUsers, showSub, view})
})



module.exports = router;    
