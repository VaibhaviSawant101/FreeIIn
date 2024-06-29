const express = require('express');
const router = express.Router();
const {handleLogin} = require('../controllers/userLoginController');

router.post('/', handleLogin);

module.exports=router;