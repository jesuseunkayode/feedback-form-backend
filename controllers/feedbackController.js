  const Feedback = require('../model/feedbackFormModel')

  //todo lists:
//app.get('/api/v1/feedbacks')    get all the feedback form templates.
const getAllFeedBackForms = async (request, response) => {
    try {
        const feedback = await Feedback.find({})
        response.status(200).json({feedback})
    } catch (error) {
        response.status(500).json({feedback})
    }
    
}

//app.post('/api/v1/feedbacks')   create a new feedback form templates.
const createFeedbackForm = async (request, response) => {
    try {
        const feedback = await Feedback.create(request.body)
        response.status(201).json({feedback})
    } catch (error) {
        response.status.json({message: error})
    }
    
}

//app.get('/api/v1/feedbacks/:id')          get a single feedback form template.
const getSingleFeedbackForm = async (request, response) => {
    try {
    const{id: feedbackID} = request.params
    const foundFeedback = await Feedback.findOne({_id:feedbackID})
    if(!foundFeedback){
        return response.status(404).json({message: `No feedbackform with Id: ${feedbackID}`})
    }
    response.status(200).json({foundFeedback})
    } catch (error) {
        response.status(500).json({message: error})
    }
}


//app.patch('api/v1/feedback/:id')       update the feedback form details.
const updateFeedbackForm = async (request, response) => {
    try {
        const{id:feedbackID} = request.params
        const updatedFeedback = await Feedback.findOneAndUpdate({_id: feedbackID}, request.body)
        if(!updatedFeedback){
            return response.status(404).json({message: `can not be found`})
        }
        response.status(200).json({updatedFeedback})
    } catch (error) {
        response.status(500).json({message: error})
    }
}

//app.delete('/api/v1/feedback/:id')        delete a single feedback form templete.
const deleteFeedbackForm = async (request, response) => {
   try {
    const {id: feedbackID} = request.params
    const deletedFeedback = await Feedback.findOneAndDelete({_id:feedbackID})
    if(!deleteFeedbackForm){
        return response.status(404).json({Message: `No feedback form with such id: ${feedbackID}`})
    }
      response.status(200).json({deletedFeedback})
   } catch (error) {
      response.status(500).json({message: error})
   }
   
}




module.exports = {
    getAllFeedBackForms,
    createFeedbackForm,
    getSingleFeedbackForm,
    updateFeedbackForm,
    deleteFeedbackForm
}