import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { getContacts, getContactById, searchContacts, createContacts, updateContact, deleteContact } from './routes/contactRoutes.js'

// Load environment variables from .env file
dotenv.config()

// Create an Express application
const app = express()

// use middleware to allow cross-origin requests
app.use(cors())
// Use middleware to parse the request body as JSON
app.use(bodyParser.json())
// Use middleware to parse the request body as URL encoded data
app.use(bodyParser.urlencoded({ extended: true }))

// Get all contacts
app.get('/contacts', getContacts)
// Create a new contact
app.post('/contacts', createContacts)
// Search contacts
app.get('/contacts/search', searchContacts)
// Get a contact by ID
app.get('/contacts/:id', getContactById)
// Update a contact by ID
app.patch('/contacts/:id', updateContact)
// Delete a contact by ID
app.delete('/contacts/:id', deleteContact)

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
    
    // Connect to MongoDB
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('MongoDB connection error:', error));
})