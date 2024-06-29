const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectApplicationSchema = new Schema({
    freelancer : {
        type : Schema.Types.ObjectId,
        ref : 'FreelancerProfile',
        required : true
    },
    project : {
        type : Schema.Types.ObjectId,
        ref : 'Project',
        required : true
    },
    status: { 
        type: String, 
        enum: ['Pending', 'Accepted', 'Rejected'], 
        default: 'Pending' 
    },
    appliedAt: {
         type: Date, 
         default: Date.now 
    }
});

const ProjectApplication = mongoose.model('ProjectApplication', projectApplicationSchema);
module.exports = ProjectApplication;