const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    if (!authHeader) {
        console.log('No auth header');
        return res.sendStatus(401); // Unauthorized
    }

    //Bearer accessToken
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            console.log('Token verification failed', err);
            return res.sendStatus(403); // Forbidden
        }
        req.user = decoded.username;
        next();
    });
};


module.exports = {verifyJWT};
