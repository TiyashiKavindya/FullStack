import axios from "axios";

// Create Axios instance
const Axios = axios.create({

  baseURL: "http://localhost:5000", // Default base URL
  timeout: 3500, // Maximum timeout
  Headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
})

// Get all contacts
export async function getContacts() {
  try {
    const response = await Axios.get('/contacts');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Search contacts
export async function searchContacts(q) {
  try {
    const response = await Axios.get(`/contacts/search?q=${q}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Get contact information by Id
export async function getContact(id) {
  try {
    const response = await Axios.get(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Create a new contact
export async function createContact(data) {
  try {
    const response = await Axios.post('/contacts', data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Update contact information
export async function updateContact(id, data) {
  try {
    const response = await Axios.patch(`/contacts/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Delete contact
export async function deleteContact(id) {
  try {
    const response = await Axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
