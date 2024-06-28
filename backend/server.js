const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { PORT, mongoDBURL } = require('./config');
const {verifyJWT} = require('./middlewares/verifyJWT');

app.use(express.json());

app.use('/register', require('./routes/loginRegisterRoutes/registerRoute'));
app.use('/login', require('./routes/loginRegisterRoutes/loginRoute'));
app.use(verifyJWT);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB: ', err.message);
    });

app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);
});
