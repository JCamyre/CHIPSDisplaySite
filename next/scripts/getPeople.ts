import pool from "../scripts/db";

export default async function getPeople() {
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM profiles;");
        const results = { results: result ? result.rows : null}
        client.release();
        return results["results"]
    } catch(err) {
        console.error(err);
        return {"error": "Internal server error"}
    }
}
