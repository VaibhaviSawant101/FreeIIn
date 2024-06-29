const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const freelancerProfileSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    profilePicture : {
        type : String,
    },
    email: { type: String, required: true },
    phone: { type: String },
    skills: [{ type: String }],
    bio: { type: String },
    portfolio: [{ type: String }],
    appliedProjects: [{ type: Schema.Types.ObjectId, ref: 'ProjectApplication' }]
});

const FreelancerProfile = mongoose.model('FreelancerProfile', freelancerProfileSchema);
module.exports=FreelancerProfile;