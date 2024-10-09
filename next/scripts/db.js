// lib/db.js
import { Pool } from 'pg';
import { rdsConfig } from '../config';

// Configure the connection pool
let pool;

// Check if the pool is already created (useful in development mode)
if (typeof window === 'undefined' && !pool) {
  pool = new Pool(rdsConfig);
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

