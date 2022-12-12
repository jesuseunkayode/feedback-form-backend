const mongoose = require('mongoose');

//product feedback form schema
const ProductFeedbackSchema = new mongoose.Schema({
    Name: String,
    Email: {
        type: String,
        required: true,
        unique: true
    },
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


module.exports = mongoose.model('productfeedback', ProductFeedbackSchema)