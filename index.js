
const express = require('express');
const app = express();
const productFeedbackRoute = require('./src/routes/productFeedbackRoute');
const eventFeedbackRoute = require('./src/routes/eventFeedbackRoute');
const serviceFeedbackRoute = require('./src/routes/serviceFeedbackRoute')
const connectDB = require('./src/db/connect')
require('dotenv').config()

//middleware
app.use(express.json())
app.use('/api/v1/productfeedback', productFeedbackRoute)
app.use('/api/v1/productfeedback/:id', productFeedbackRoute)
app.use('/api/v1/eventfeedback', eventFeedbackRoute)
app.use('/api/v1/eventfeedback/:id', eventFeedbackRoute)
app.use('/api/v1/servicefeedback', serviceFeedbackRoute)
app.use('/api/v1/servicefeedback/:id', serviceFeedbackRoute)
     

//connect to the database and start the server
const port = process.env.port || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        console.log('connected to database')
        app.listen(port, console.log('connected to Server'))
    } catch(error) {
        console.error(error)
    }
}

start()

