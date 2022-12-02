const mongoose = require('mongoose');
const Feedback = new mongoose.Schema({
    title : {
        type : String,
        required: [true, "Must be provided"],
        trim: true
    },
    description: {
        type : String,
        required : [true, "Must describe your feedback"],
        trim: true
    }
})


module.exports = mongoose.model('feedback', Feedback)