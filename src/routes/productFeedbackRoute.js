const express = require('express');
const { getAllProductFeedBackForms, createProductFeedbackForm, getSingleProductFeedbackForm, updateProductFeedbackForm, deleteProductFeedbackForm } = require('../controllers/productFeedbackController');
const router = express.Router();

router.route('/').get(getAllProductFeedBackForms).post(createProductFeedbackForm)
router.route('/:id').get(getSingleProductFeedbackForm).patch(updateProductFeedbackForm).delete(deleteProductFeedbackForm)

module.exports = router;