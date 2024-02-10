import mongoose from "mongoose"

// Create a new Mongoose schema for Contacts
const contactSchema = new mongoose.Schema({
    first: {
        type: String,
    },
    last: {
        type: String,
    },
    twitter: {
        type: String,
    },
    avatar: {
        type: String,
    },
    notes: {
        type: String,
    }
})

export default mongoose.model('Contact', contactSchema)