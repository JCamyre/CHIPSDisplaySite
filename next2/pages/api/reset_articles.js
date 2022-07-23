import { writeJsonFile } from "write-json-file";

const pathToJSON = "../../components/Articles.json";

export default function handler(req, res) {
  writeJsonFile(pathToJSON, JSON.stringify([]));

  res.send("Done.");
}
