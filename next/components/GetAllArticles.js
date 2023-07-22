const {
  retrieveDocs,
  scrapeAllArticles,
  pathToJSON,
  resetArticles,
} = require("../scripts/firestore");
const fs = require("fs");

export default function getAllArticles() {
  return new Promise((resolve, reject) => {
    resetArticles().then(() => {
      scrapeAllArticles().then((articles) => {
          // Write articles to JSON file
          console.log('Made it into GetAllArticles.js', JSON.stringify(articles))
          fs.writeFileSync(pathToJSON, JSON.stringify(articles))
          console.log('Wrote files to Articles.json')
          return JSON.stringify(articles)
        })
        .catch((err) => {
          console.log("Error in getAllArticles(): ", err);
          return {message: "error"}
        });
    });
  });
}
