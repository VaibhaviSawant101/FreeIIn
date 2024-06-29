const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientProfileController');

router.get('/:id', clientController.getClientProfileById); // Get client profile by ID
router.post('/', clientController.createClientProfile); // Create a new client profile
router.put('/:id', clientController.updateClientProfile); // Update client profile by ID
router.delete('/:id', clientController.deleteClientProfile); // Delete client profile by ID

module.exports = router;
