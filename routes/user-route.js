const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
const UserModel = require('../models/User');

router.get("/", async (req, res)=>{
    const users = await UserModel.find();
    res.status(200).json(users);
    //res.render("index.ejs")
});

router.post("/", async (req, res) => {
    const user = new UserModel(req.body);
    await user.save();

    res.status(201).json(user);
})

router.put("/", async (req, res) => {
    const {_id, subStatus} = req.body;
         // Hämtar om id är samma
    const user = await UserModel.findById({_id: _id});
    user.subStatus = subStatus;
    await user.save(user);
    res.status(200).json(user);
});

router.delete("/:id", async (req, res) => {
    await UserModel.findByIdAndDelete({_id: req.params.id});
    res.status(200).json("User deleted");
})

module.exports = router;
