import axios from "axios";

// Function to get all events
export const getAllEvents = async () => {
  try {
    const response = await axios.get("/api/events");
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

// Function to get an event by its ID
export const getEventsById = async (eventId) => {
  try {
    const response = await axios.get(`/api/events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching event with ID ${eventId}:`, error);
    throw error;
  }
};

export default {
  getAllEvents,
  getEventsById,
};
