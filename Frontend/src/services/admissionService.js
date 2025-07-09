import axios from "axios";

const BASE_URL = "http://localhost:5000/api/admissions"; // Change if hosted

// Submit admission form
export const submitAdmissionForm = async (formData) => {
  try {
    const response = await axios.post(BASE_URL, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting admission form:", error);
    throw error.response?.data || { message: "Server error" };
  }
};

// (Optional) Get all admissions (admin use)
export const getAllAdmissions = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching admissions:", error);
    throw error;
  }
};
