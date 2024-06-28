const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const clientProfileSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    profilePicture: { type: String }, 
    location: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    companyDetails: {
        companyName: { type: String },
        website: { type: String },
        industry: { type: String }
    },
    aboutUs: { type: String },
    previousProjects : [{type : Schema.Types.ObjectId, ref: 'Project'}]
});

const ClientProfile = mongoose.model('ClientProfile', clientSchema);
module.exports = ClientProfile;