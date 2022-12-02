const express = require('express');
const { getAllFeedBackForms, createFeedbackForm, getSingleFeedbackForm, updateFeedbackForm, deleteFeedbackForm } = require('../controllers/feedbackController');
const router = express.Router();

router.route('/').get(getAllFeedBackForms).post(createFeedbackForm)
router.route('/:id').get(getSingleFeedbackForm).patch(updateFeedbackForm).delete(deleteFeedbackForm)

module.exports = router;