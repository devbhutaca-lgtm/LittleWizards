import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api`;

/**
 * Submit contact form to backend API
 * @param {Object} formData - Contact form data
 * @param {string} formData.name - Full name
 * @param {string} formData.email - Email address
 * @param {string} formData.phone - Phone number
 * @param {string} formData.message - Message
 * @returns {Promise<Object>} Response from API
 */
export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    // Handle error responses
    if (error.response) {
      // Server responded with error status
      throw new Error(error.response.data.detail || 'Failed to submit form');
    } else if (error.request) {
      // Request made but no response received
      throw new Error('No response from server. Please check your connection.');
    } else {
      // Something else happened
      throw new Error('Failed to submit form. Please try again.');
    }
  }
};
