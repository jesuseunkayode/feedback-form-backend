const ServiceFeedbackSchema = require('../model/serviceFeedbackFormModel')

//get all the service feedback form.
const getAllServiceFeedBackForms = async (request, response) => {
    try {
        const serviceFeedback = await ServiceFeedbackSchema.find({})
        response.status(200).json({serviceFeedback})
    } catch (error) {
        response.status(500).json({serviceFeedback})
    }
}

 //  create a new service feedback form.
const createServiceFeedbackForm = async (request, response) => {
    try {
        const serviceFeedback = await ServiceFeedbackSchema.create(request.body)
        response.status(201).json({serviceFeedback})
    } catch (error) {
        response.status(404).json({message: error})
    }
    
}

//get a single service feedback form.
const getSingleServiceFeedbackForm = async (request, response) => {
    try {
    const{ id: serviceFeedbackID} = request.params
    const foundServiceFeedback = await ServiceFeedbackSchema.findOne({_id:serviceFeedbackID})
    if(!foundServiceFeedback){
        return response.status(404).json({message: `No feedbackform with Id: ${serviceFeedbackID}`})
    }
    response.status(200).json({foundServiceFeedback})
    } catch (error) {
        response.status(500).json({message: error})
    }
}


//update the service feedback form details.
const updateServiceFeedbackForm = async (request, response) => {
    try {
        const{id: serviceFeedbackID} = request.params
        const updatedServiceFeedback = await ServiceFeedbackSchema.findOneAndUpdate({_id: serviceFeedbackID}, request.body)
        if(!updatedServiceFeedback){
            return response.status(404).json({message: `can not be found`})
        }
        response.status(200).json({updatedServiceFeedback})
    } catch (error) {
        response.status(500).json({message: error})
    }
}

// delete a single service feedback form.
const deleteServiceFeedbackForm = async (request, response) => {
   try {
    const {id: serviceFeedbackID} = request.params
    const deletedServiceFeedback = await ServiceFeedbackSchema.findOneAndDelete({_id: serviceFeedbackID})
    if(!deleteServiceFeedbackForm){
        return response.status(404).json({Message: `No feedback form with such id: ${serviceFeedbackID}`})
    }
      response.status(200).json({deletedServiceFeedback})
   } catch (error) {
      response.status(500).json({message: error})
   }
   
}




module.exports = {
    getAllServiceFeedBackForms,
    createServiceFeedbackForm,
    getSingleServiceFeedbackForm,
    updateServiceFeedbackForm,
    deleteServiceFeedbackForm
}
