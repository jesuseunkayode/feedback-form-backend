const mongoose = require('mongoose');

//service feedback form schema
const ServiceFeedbackSchema = new mongoose.Schema ({
    Title: String,
    Description: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('serviceFeedback form', ServiceFeedbackSchema)