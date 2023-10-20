const {
  retrieveDocs,
  scrapeAllArticles,
  pathToJSON,
  resetArticles,
} = require("../scripts/firestore.ts");
const fs = require("fs");

export default function getAllArticles() {
  // return new Promise((resolve, reject) => {
  return resetArticles().then(() => {
    return scrapeAllArticles().then((articles) => {
        // Write articles to JSON file
        fs.writeFileSync(pathToJSON, JSON.stringify(articles))
        console.log('Wrote files to Articles.json!')
        // console.log('First article: ', articles[0]);
        return articles;
      })
      .catch((err) => {
        console.log("Error in getAllArticles(): ", err);
        return {message: "error"}
      });
  });
  // });
}
