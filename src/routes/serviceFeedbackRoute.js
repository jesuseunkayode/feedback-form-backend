const express = require('express');
const { getAllServiceFeedBackForms, createServiceFeedbackForm, getSingleServiceFeedbackForm, updateServiceFeedbackForm, deleteServiceFeedbackForm } = require('../controllers/serviceFeedbackController');
const router = express.Router();

router.route('/').get(getAllServiceFeedBackForms).post(createServiceFeedbackForm)
router.route('/:id').get(getSingleServiceFeedbackForm).patch(updateServiceFeedbackForm).delete(deleteServiceFeedbackForm)

module.exports = router;