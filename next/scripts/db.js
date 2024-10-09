// lib/db.js
import { Pool } from 'pg';

// Configure the connection pool
let pool;

// Check if the pool is already created (useful in development mode)
if (typeof window === 'undefined' && !pool) {
  pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,  // Fallback to default port if not set
  });
} else {
  throw new Error('pg should only be used on the server');
}

export async function getIndexSlides() {
    try {
      const res = await pool.query('SELECT * FROM index_slides ORDER BY index ASC;');
      return res.rows;  // Return the results
    } catch (err) {
      console.error('Error executing query:', err);
      throw err;  // Handle the error appropriately
    }
  }

