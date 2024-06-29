const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogin = async(req, res) =>{
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).send("Username and password are required");
    }

    try{
        const foundUser = await User.findOne({username});
        if(!foundUser){
            return res.status(401).send("Invalid username or password");
        }

        const isMatch = await bcrypt.compare(password, foundUser.password);
        if(!isMatch){
            return res.status(401).send("Invalid username or password");
        }

        //jwt.sign(payload(document to encrypt), sign, [option])
        const accessToken = jwt.sign(
            {"username":foundUser.username},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '30s'}

        );

        const refreshToken = jwt.sign(
            {"username":foundUser.username},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        );

        //res.cookie('name', value, [option])
        res.cookie('token', refreshToken, {httpOnly: true, maxAge:24*60*60*1000});
        res.json(accessToken);

    }catch(err){
        console.error('Error during login:', err);
        res.status(500).send('Server error');
    }
};

module.exports = {handleLogin};