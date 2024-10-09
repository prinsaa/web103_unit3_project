import { pool } from '../config/database.js';

export const getEvents = async (req, res) => {
     try {
        const result = await pool.query('SELECT * FROM events');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving events' });
    }

};