const mongoose = require('mongoose');
const User = require('../../models/userModel');
const bcrypt = require('bcrypt');

const handleNewUser = async(req, res)=>{
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({message:"Username and password is require"});
    }

    const duplicate = await User.findOne({username});
    if(duplicate){
        return res.sendStatus(409);//conflict
    }

    try{
        const hashPwd = await bcrypt.hash(password, 10);
        const newUser = new User({username, password: hashPwd});
        await newUser.save();
        res.status(201).json({message: 'User created successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

module.exports = {handleNewUser};
