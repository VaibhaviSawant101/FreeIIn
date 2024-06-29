const express = require('express');
const router = express.Router();
const {handleNewUser} = require('../controllers/userRegisterController');

router.post('/', handleNewUser);

module.exports=router;