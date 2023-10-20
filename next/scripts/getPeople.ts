import pool from "../scripts/db";

export default async function getPeople() {
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM users;");
        const results = { results: result ? result.rows : null}
        client.release();
        return results
    } catch(err) {
        console.error(err);
        return {"error": "Internal server error"}
    }
}
