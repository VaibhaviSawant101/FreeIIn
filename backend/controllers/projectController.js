const express = require('express');
const mongoose = require('mongoose');
const Project = require('../models/projectModel');

// GET project by ID
const getProjectById = async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await Project.findById(projectId)
            .populate('client')
            .populate('freelancer')
            .populate('applications');
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST create a new project
const createProject = async (req, res) => {
    try {
        const info = req.body;
        const project = new Project({info});
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT update project by ID
const updateProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const updates = req.body;
        const updatedProject = await Project.findByIdAndUpdate(projectId, updates, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE project by ID
const deleteProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const deletedProject = await Project.findByIdAndDelete(projectId);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProjectById,
    createProject,
    updateProject,
    deleteProject
};
