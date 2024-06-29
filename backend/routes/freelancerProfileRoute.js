const express = require('express');
const router = express.Router();
const freelancerController = require('../controllers/freelancerControllers/freelancerProfileController');

router.get('/:id', freelancerController.getFreelancerProfileById); // Get freelancer profile by ID
router.post('/', freelancerController.createFreelancerProfile); // Create a new freelancer profile
router.put('/:id', freelancerController.updateFreelancerProfile); // Update freelancer profile by ID
router.delete('/:id', freelancerController.deleteFreelancerProfile); // Delete freelancer profile by ID

module.exports = router;
