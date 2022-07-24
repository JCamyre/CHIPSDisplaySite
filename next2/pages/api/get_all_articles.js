const { retrieveDocs } = require("../../scripts/firestore");
const fs = require("fs");

const pathToJSON = "./components/Articles.json";

export default function handler(req, res) {
  retrieveDocs()
    .then((articles) => {
      fs.writeFileSync(pathToJSON, JSON.stringify(articles));
      res.status(200).send(JSON.stringify(articles));
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(304).send("not pog");
    });
}
