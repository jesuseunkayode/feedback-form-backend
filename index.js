
const express = require('express');
const app = express();
const feedbackRoute = require('./routes/feedbackRoute')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.json())
app.use('/api/v1/feedbackForms', feedbackRoute)
app.use('/api/v1/feedbackForms/:id', feedbackRoute)



const port = process.env.port || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log('Server is working'))
    } catch(error) {
        console.error(error)
    }
}

start(console.log('connected to database'))

