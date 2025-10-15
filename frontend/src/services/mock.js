// Mock service for contact form submission
// This will be replaced with actual backend integration later

export const submitContactForm = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Log the form data to console (simulating backend storage)
  console.log('Contact Form Submission (MOCK):', {
    timestamp: new Date().toISOString(),
    ...formData
  });

  // Store in localStorage for demo purposes
  const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  existingSubmissions.push({
    id: Date.now(),
    timestamp: new Date().toISOString(),
    ...formData
  });
  localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));

  // Simulate success response
  return {
    success: true,
    message: 'Form submitted successfully'
  };
};

// Helper function to view all submissions (for testing)
export const getContactSubmissions = () => {
  return JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
};