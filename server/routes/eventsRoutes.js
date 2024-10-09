import express from 'express';
// Import the controller function for events
import { getEvents } from '../controllers/events.js';

const router = express.Router();

// Define the route to get events
router.get('/events', getEvents);

export default router;
