const express = require('express');
const router = express.Router();
const {Users} = require('../models');
const { where } = require('sequelize');
const jwt = require('jsonwebtoken');

const privateKey = "hahagfasdgfeqfgeqvdvaqs";

router.post('/register', async (req,res)=>{
    try{
        const user = req.body;
        await Users.create(user);
        res.json(user);
    }catch(error){
        res.send(error);
    }
})

router.post('/login', async (req,res)=>{
    try{
        const Username = req.body.username;
        const Password = req.body.password;

        const user = await Users.findOne({where: {username: Username}})
        if(!user){
            return res.status(404).json({message : "No user with that username"})
        }else{
            if(user.password == Password){
                const token = jwt.sign({ username: Username }, privateKey, { expiresIn: '1h' });
                res.status(200).json(token);
            }else{
                return res.status(401).json({message: "Wrong password"});
            }
        }
    }catch(error){
        res.status(402).send(error);
    }
})

module.exports = router;