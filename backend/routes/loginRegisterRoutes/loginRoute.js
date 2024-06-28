const express = require('express');
const router = express.Router();
const {handleLogin} = require('../../controllers/loginRegisterControllers/userLoginController');

router.post('/', handleLogin);

module.exports=router;