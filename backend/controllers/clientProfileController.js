const express = require('express');
const mongoose = require('mongoose');
const clientProfile = require('../../models/clientModel');
const ClientProfile = require('../../models/clientModel');
const Project = require('../../models/projectModel');

//Create a new client
const createClient = async (req, res)=>{
    try{
        const clientInfo = req.body;
        const newClient = new clientProfile({clientInfo});
        const savedClient = await newClient.save();
        res.status(201).json(savedClient);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};

//Update client profile
const updateClientProfile = async(req, res)=>{
    try{
        const clientId = req.params._id;
        const updates = req.body;
        const updatedClient = await ClientProfile.findByIdAndUpdate(clientId, updates, {new:true});
        if(!updatedClient){
            return res.status(404).json({message:'Client not found'});
        }
        res.status(200).json(updatedClient);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};

//Get client profile by Id
const getClientById = async(req, res)=>{
    try{
        const clientId = req.params._id;
        const client = await ClientProfile.findById(clientId).populate('postedProjects');
        if(!client){
            return res.status(400).json({message:'CLient not found'});
        }
        res.status(200).json(client);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};

// Delete a client profile
const deleteClientProfile = async (req, res) => {
    try {
        const clientId = req.params.id;
        const deletedClient = await ClientProfile.findByIdAndDelete(clientId);
        if (!deletedClient) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json({ message: 'Client profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createClient,
    getClientById,
    updateClientProfile,
    postProject,
    deleteClientProfile,
};