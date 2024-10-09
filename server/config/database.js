import pg from 'pg'
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
    connectionString: process.env.DATABASE_URL
}

export const pool = new pg.Pool(config)