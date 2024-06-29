const express = require('express');
const router = express.Router();
const projectApplicationController = require('../controllers/projectApplicationController');

router.post('/', projectApplicationController.applyForProject); // Apply for a project

module.exports = router;