const { application } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const projectSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    skillsRequired : {
        type : String
    },
    deadline : {
        type : Date,
        required: true
    },
    client : {
        type : Schema.Types.ObjectId,
        ref : 'ClientProfile'
    },
    freelancer : {
        type : Schema.Types.ObjectId,
        ref : 'FreelancerProfile'
    },
    status : {
        type : String,
        enum: ['Open', 'In Progress', 'Completed'],
        default : 'Open'
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
    updatedAt : {
        type: Date,
        default: Date.now
    },
    applications : [{type : Schema.Types.ObjectId, ref: 'ProjectApplication'}]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;