import fs from "fs";

const pathToJSON = "../../components/Articles.json";

export default function handler(req, res) {
  fs.writeFile(pathToJSON, JSON.stringify([]), "utf8", () => {});

  res.send("Done.");
}
