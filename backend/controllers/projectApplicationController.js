const mongoose = require('mongoose');
const ProjectApplication = require('../models/projectApplicationModel');

// POST apply for a project
const applyForProject = async (req, res) => {
    try {
        const {freelancer,project,status} = req.body;
        const application = new ProjectApplication({freelancer,project,status});
        await application.save();
        res.status(201).json(application);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    applyForProject
};
