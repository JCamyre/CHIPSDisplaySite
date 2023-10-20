import { NextApiRequest, NextApiResponse } from 'next';
import pool from "../../scripts/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM users;");
        const results = { results: result ? result.rows : null}
        res.status(200).json(results);
        client.release();
    } catch(err) {
        console.error(err);
        res.status(500).json({"error": "Internal server error"})
    }
}