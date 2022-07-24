const fs = require("fs");

const pathToJSON = "./components/Articles.json";

export default function handler(req, res) {
  fs.writeFileSync(pathToJSON, JSON.stringify([]));

  res.send("test");
}
