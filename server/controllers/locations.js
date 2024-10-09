import { pool } from '../config/database.js';

// Function to get locations from the locations table
export const getLocations = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving locations' });
    }
};