import { resolve } from "path";

const {
  retrieveDocs,
  scrapeAllArticles,
  pathToJSON,
  resetArticles,
} = require("../../scripts/firestore");
const fs = require("fs");

export default function handler(req, res) {
  console.log("Running get_all_articles!");

  return new Promise((resolve, reject) => {
    resetArticles().then(() => {
      scrapeAllArticles().then(() => {
        retrieveDocs()
          .then((articles) => {
            fs.writeFileSync(pathToJSON, JSON.stringify(articles));
            res.setHeader("Content-Type", "application/json");
            res.status("200").end(JSON.stringify(articles));
            resolve();
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
