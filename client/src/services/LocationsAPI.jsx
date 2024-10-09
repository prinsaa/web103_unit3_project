import axios from "axios";

// Function to get all locations
export const getAllLocations = async () => {
  try {
    const response = await axios.get("/api/locations");
    return response.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
};

// Function to get a location by its ID
export const getLocationById = async (locationId) => {
  try {
    const response = await axios.get(`/api/locations/${locationId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching location with ID ${locationId}:`, error);
    throw error;
  }
};

export default {
  getAllLocations,
};
