// Import Contact schema
import Contact from '../models/contactModels.js'

// Get all contacts
export const getContacts = (req, res) => {
    Contact.find()
        .then((contacts) => {
            res.status(200).json(contacts)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
}

// Get Contact by contact ID
export const getContactById = (req, res) => {
    const { id } = req.params
    Contact.findById(id).then((contact) => {
        if (contact) {
            res.status(200).json(contact)
        } else {
            res.status(404).json({ message: "Contact not found" })
        }
    }).catch((error) => {
        res.status(400).json({ error })
    })
}

// get Contact by search query
export const searchContacts = (req, res) => {
    const { q } = req.query
    Contact.find({ $or: [{ first: { $regex: q, $options: 'i' } }, { last: { $regex: q, $options: 'i' } }] })
        .then((contacts) => {
            res.status(200).json(contacts)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })

}

// Create a new contact
export const createContacts = (req, res) => {
    const { first, last, twitter, avatar, notes } = req.body
    const contact = new Contact({ first, last, twitter, avatar, notes })
    contact.save()
        .then(() => {
            res.status(201).json(contact)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
}

// Update a contact by ID 
export const updateContact = (req, res) => {
    const { id } = req.params
    const { first, last, twitter, avatar, notes } = req.body
    Contact.findByIdAndUpdate(id, { first, last, twitter, avatar, notes }, { new: true })
        .then((contact) => {
            if (contact) {
                res.status(200).json(contact)
            } else {
                res.status(404).json({ message: "Contact not found" })
            }
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
}

// Delete a contact by ID
export const deleteContact = (req, res) => {
    const { id } = req.params
    Contact.findByIdAndDelete(id)
        .then((contact) => {
            if (contact) {
                res.status(200).json(contact)
            } else {
                res.status(404).json({ message: "Contact not found" })
            }
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
}