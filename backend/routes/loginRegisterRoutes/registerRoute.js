const express = require('express');
const router = express.Router();
const {handleNewUser} = require('../../controllers/loginRegisterControllers/userRegisterController');

router.post('/', handleNewUser);

module.exports=router;