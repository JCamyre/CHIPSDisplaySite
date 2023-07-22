import {
  initializeApp,
  applicationDefault,
  cert,
  getApps,
  getApp,
} from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";
import axios from "axios";
import cheerio from "cheerio";
const fs = require("fs");

if (getApps().length === 0) {
  initializeApp({
    credential: applicationDefault(),
    databaseURL: "https://CHIPSDisplaySite.firebaseio.com",
  });
} else {
  getApp();
}

const db = getFirestore();

async function changeValues(name = "an_article") {
  const docRef = db.collection("articles").doc(name);

  await docRef.set({
    title: "Testing123",
    date: "ur mom lol",
    full_text: "get fricked bro",
  });
}

async function createArticle(name = "article", articleObj) {
  const docRef = db.collection("articles").doc(name);

  const defaultTitle = '';
  const defaultSummary = '';
  const defaultImg = 'https://samueli.ucla.edu/wp-content/uploads/samueli/ucla-samueli-logo.png'
  const defaultDate = '';
  const defaultFullText = '';

  await docRef.set({
    title: articleObj["title"] || defaultTitle,
    summary: articleObj["summary"] || defaultSummary,
    img: articleObj["img"] || defaultImg,
    date: articleObj["date"] || defaultDate,
    full_text: articleObj["full_text"] || defaultFullText,
  });
}

async function retrieveDocs(collection = "articles") {
  const snapshot = await db.collection(collection).get();
  let res = [];

  snapshot.forEach((doc) => {
    res.push(doc.data());
  });

  return res;
}

async function getArticle(url) {
  var data = {};
  // data stores the Promise, which is either fulfilled or rejected, and if fulfilled, it returns article data, which the object of article info we want.
  // Then our data object is equal to the article object, and WE RETURN WITH THE VALUE LESS GOo!
  data = axios
    .get(url)
    .then((response) => {
      const html_data = response.data;
      const $ = cheerio.load(html_data);

      const mainText = "div.et_pb_section_2.et_section_regular"; // et_pb_section_2 et_section_regular

      const summary = $(mainText).text().split(".")[0];

      const title = "div.et_pb_blurb_content";

      const img =
        "div.et_pb_column.et_pb_column_2_3.et_pb_column_1.et_pb_css_mix_blend_mode_passthrough.et-last-child";

      const date = "div.et_pb_title_container";

      data = {
        title: $(title).text().trim(),
        summary: summary.replace("\t\t\t", "").trim(),
        img: $(img).find("img").attr("src"),
        date: $(date).find("span").text().trim(),
        full_text: $(mainText).text().trim(),
      };

      const otherImgs = "figure";
      $(otherImgs)
        .find("img")
        .each((index, element) => {});

      return data;
    })
    .catch((err) => {
      console.log(`Error while fetching article: ${url}`, err);
      return { error: `Error while fetching article: ${url}` };
    });

  return data;
}

async function scrapeAllArticles(url = "https://samueli.ucla.edu/newsroom") {
  // clear out firestore -> newsroom_url -> get all 9 articles -> for each article, get info and put into firestore -> done
  return await axios
    .get(url)
    .then((response) => {
      const html_data = response.data;
      const $ = cheerio.load(html_data);

      const articles = "article.et_pb_post.clearfix";

      // $(articles).each(function (index, element) {
      //   let url = $(element).find("h2 > a").attr("href");
      //   getArticle(url).then((article) => {
      //     createArticle(`article_${index}`, article);
      //   });
      // });

      // const res = []

      console.log('Before getArticle for loop!')

      const res = $(articles).each(function (index, element) {
        let url = $(element).find("h2 > a").attr("href");
        getArticle(url).then((article) => {
          // console.log(`Article ${index}: `, article)
          return article
        });
      });

      console.log("Made it after getArticle for loop! Here's the result array: ", res)

      return res;
    })
    .catch((err) => {
      console.log(`Error while scraping articles from ${url}`, err);
      return {error: `Error while scraping articles from ${url}`};
    });
}

const pathToJSON = "./components/Articles.json";

async function resetArticles() {
  fs.writeFileSync(pathToJSON, JSON.stringify([]));
}

module.exports = {
  changeValues,
  getArticle,
  retrieveDocs,
  createArticle,
  scrapeAllArticles,
  resetArticles,
  pathToJSON,
};
