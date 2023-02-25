const {
  retrieveDocs,
  scrapeAllArticles,
  pathToJSON,
  resetArticles,
} = require("../../scripts/firestore");
const fs = require("fs");

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    resetArticles().then(() => {
      scrapeAllArticles().then(() => {
        retrieveDocs()
          .then((articles) => {
            fs.writeFileSync(pathToJSON, JSON.stringify(articles));
            res.setHeader("Content-Type", "application/json");
            res.status("200").send(JSON.stringify(articles));
          })
          .catch((err) => {
            console.log("Error: ", err);
            res.status(405).end();
            res.json(err);
            resolve();
          });
      });
    });
  });
}
