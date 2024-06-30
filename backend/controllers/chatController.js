const ChatModel = require('../models/chatModel');

const createChat = async(req, res)=>{
    const newChat = new ChatModel({
        members: [req.body.senderId, req.body.receiverId]
    });

    try{
        const result = await newChat.save();
        res.status(200).json(result);
    }catch(error){
        res.status(500).json(error);
    }
};

const getUserChats = async(req, res)=>{
    try{
        const chat = await ChatModel.find({
            //any just one of them
            members: {$in : [req.params.userId]}
        })
        res.status(200).json(chat);
    }catch(error){
        res.status(500).json(error);
    }
}

const findChat = async(req, res)=>{
    try{
        //requires all the specified element
        const chat = await ChatModel.findOne({
            members: {$all:[req.params.firstId, req.params.secondId]}
        });
        res.status(200).json(chat);
    }catch(error){
        res.status(500).json(error);
    }
}

module.exports = {createChat, getUserChats, findChat};