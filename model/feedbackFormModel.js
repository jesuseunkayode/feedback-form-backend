const mongoose = require('mongoose');
const FeedbackSchema = new mongoose.Schema({
    title : {
        type : String,
        required: [true, "Must be provided"],
        trim: true
    },
    description: {
        type : String,
        required : [true, "Must describe your feedback"],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },

    updatedAt: {
        type: Date,
        default: Date.now()
    },
    
})


module.exports = mongoose.model('feedback', FeedbackSchema)