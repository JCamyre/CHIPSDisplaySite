const {
  retrieveDocs,
  scrapeAllArticles,
  pathToJSON,
  resetArticles,
} = require("../../scripts/firestore");
const fs = require("fs");

export default function getAllArticles() {
  return new Promise((resolve, reject) => {
    resetArticles().then(() => {
      scrapeAllArticles().then(() => {
        retrieveDocs()
          .then((articles) => {
            fs.writeFileSync(pathToJSON, JSON.stringify(articles));
            return JSON.stringify(articles)
          })
          .catch((err) => {
            console.log("Error in getAllArticles(): ", err);
            return {message: "error"}
          });
      });
    });
  });
}
