import axios from "axios";

const BASE_URL = "http://localhost:5000/api/grievances"; // Update as needed

// Submit a grievance form
export const submitGrievance = async (formData) => {
  try {
    const response = await axios.post(BASE_URL, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting grievance:", error);
    throw error.response?.data || { message: "Server error" };
  }
};

// (Optional) Get all submitted grievances (for admin dashboard)
export const getAllGrievances = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching grievances:", error);
    throw error;
  }
};
