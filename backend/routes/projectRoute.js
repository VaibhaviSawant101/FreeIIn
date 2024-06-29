const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/:id', projectController.getProjectById); // Get project by ID
router.post('/', projectController.createProject); // Create a new project
router.put('/:id', projectController.updateProject); // Update project by ID
router.delete('/:id', projectController.deleteProject); // Delete project by ID

module.exports = router;
