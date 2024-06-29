const express = require('express');
const mongoose = require('mongoose');
const FreelancerProfile = require('../../models/freelancerModel');

//Create a new freelancer 
const createFreelancerProfile = async(req, res)=>{
    try{
        const info = req.body;
        const freelancer = new FreelancerProfile({info});
        const savedFreelancer = await freelancer.save();
        res.status(201).json(freelancer);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};

//Update freelancer profile
const updateFreelancerProfile = async(req, res)=>{
    try{
        const freelancerId = req.params._id;
        const updates = req.body;
        const updatedFreelancer = await FreelancerProfile.findByIdAndUpdate(freelancerId, updates, {new: true});
        if(!updateFreelancer){
            return res.status(404).json({message:'Freelancer profile not found'});
        }
        res.status(200).json(updatedFreelancer);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

//Get Freelancer profile by Id
const getFreelancerProfileById = async(req, res)=>{
    try{
        const freelancerId = req.params._id;
        const freelancer = await FreelancerProfile.findById(freelancerId).populate('appliedProjects');
        if(!freelancer){
            return res.status(404).json({message:"Freelancer profile not found"});
        }
        res.status(200).json(freelancer);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

//Delete a freelancer profile
const deleteFreelancerProfile = async (req, res)=>{
    try{
        const freelancerId = req.params._id;
        const deleteFreelancer = await FreelancerProfile.findByIdAndDelete(freelancerId);
        if(!deleteFreelancer){
            return res.status(404).json({message:"Freelancer profile not found"});
        }
        res.status(200).json({message:"Freelancer profile deleted successfully"});
    }catch(err){
        res.status(500).json({message:err.msg});
    }
};

module.exports = {getFreelancerProfileById, createFreelancerProfile,updateFreelancerProfile, deleteFreelancerProfile};