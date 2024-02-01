import pool from "../scripts/db";
import getType from "./getType";

export default async function getPeople() {
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM profiles;");
        const results: Array<Object> = result ? result.rows : null
        
        if (results !== null) {
            const realResults = await Promise.all(
                results.map(async result => {
                    const userType = await getType(result["userid"]);
                    result["usertype"] = userType["type"];
                    // console.log(result);
                    return result
                })
            )
            console.log("realResults: ", realResults)
            client.release();
            return realResults
        }
        client.release();
        return [{}]
    } catch(err) {
        console.error(err);
        return {"error": "Internal server error"}
    }
}
