import express from 'express';
// Import the controller function for locations
import { getLocations } from '../controllers/locations.js';

const router = express.Router();

// Define the route to get locations
router.get('/locations', getLocations);

export default router;
