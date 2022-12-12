const mongoose = require('mongoose');

// Event feedback Form Schema
const EventFeedbackSchema = new mongoose.Schema({
    Rating: Number,
    Comment: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },

    updatedAt: {
        type: Date,
        default: Date.now()
    }

})


module.exports = mongoose.model('eventfeedback form', EventFeedbackSchema)