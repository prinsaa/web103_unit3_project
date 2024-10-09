import pg from 'pg'

const config = {
    database: process.env.DATABASE_URL
}

export const pool = new pg.Pool(config)