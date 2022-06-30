const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');
const cors = require('cors')

router.use(express.urlencoded({extended: false}));
router.use(cors());
router.use(express.json())


router.post("/userlogin", async (req, res) => { 

    const user = await UserModel.findOne({ email: req.body.email });
    console.log(user);
    if (user == null) {
        return res.status(400).json("Can't find user");
    }

    try {
        if (req.body.password == user.password) {
            return res.status(200).json(user);
        } else {
            return res.status(401).json("Wrong password");
        }
    } catch {
        res.status(500).send;
    }
})

router.post("/", async (req, res) => {
    const user = new UserModel(req.body);
    await user.save();

    res.status(201).json(user);
})

router.patch("/", async (req, res) => {
    const {_id, subStatus} = req.body;
    const user = await UserModel.findById({_id: _id});
    user.subStatus = subStatus;
    await user.save(user);
    res.status(200).json(user);
});


router.get("/:id", async (req, res) => {
    try {
        const foundUser = await UserModel.findById({_id: req.params.id});
        res.json(foundUser.subStatus)
    } catch (error) {
        res.status(500).send;
    }
    
})

module.exports = router;
