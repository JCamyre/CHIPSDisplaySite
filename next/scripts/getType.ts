import pool from "./db";

export default async function getType(id: number)
{
    try {
        const client = await pool.connect();
        const result = await client.query(`SELECT type FROM users WHERE id=${id};`);
        const userType = result ? result.rows[0] : null;
        return userType;
    } catch(err) {
        console.error(err);
        return "error"
    }
}