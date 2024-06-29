const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { PORT, mongoDBURL } = require('./config');
const {verifyJWT} = require('./middlewares/verifyJWT');

app.use(express.json());

app.use('/register', require('./routes/registerRoute'));
app.use('/login', require('./routes/loginRoute'));
//app.use(verifyJWT);
app.use('/clients', require('./routes/clientProfileRoute'));
app.use('/freelancers', require('./routes/freelancerProfileRoute'));
app.use('/projects', require('./routes/projectRoute'));
app.use('/project-applications', require('./routes/projectApplicationRoute'));

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
