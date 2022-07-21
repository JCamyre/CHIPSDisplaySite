const express = require("express");
const cors = require("cors");
const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const util = require("util");
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// initializing Firebase
initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://CHIPSDisplaySite.firebaseio.com",
});

const db = getFirestore();

async function changeValues(name = "an_article") {
  const docRef = db.collection("articles").doc(name);

  await docRef.set({
    title: "Testing123",
    date: "ur mom lol",
    full_text: "get fricked bro",
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

app.get("/testing", (req, res) => {
  const name = req.query.article;

  changeValues(name)
    .then(() => {
      res.send(`Done updating Firestore with new article ${name}!`);
    })
    .catch((err) => {
      console.log(err);
      res.send("Error!");
    });
});

app.get("/get_all_articles", (req, res) => {
  retrieveDocs()
    .then((articles) => {
      console.log(articles);
      res.send(JSON.stringify(articles));
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.send("not pog");
    });
});

async function getArticle(url) {
  // console.log(url);
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

      // this extra lol
      const otherImgs = "figure";
      // console.log($(otherImgs).find("img").attr("src"));
      $(otherImgs)
        .find("img")
        .each((index, element) => {
          // console.log(index, $(element).attr("src"));
        });

      // res.send(), which sets the header to 200 (I think)
      // Since we already used res.send(), we already set headers, so we
      // are setting headers again, which isn't good.
      // Can you use res.write(), which is different since we are just updating
      // The text, rather than setting headers (like response code)
      // res.send($(mainText).text());

      return data;
    })
    .catch((err) => {
      console.log("Error! ", err);
      return { error: "bad error" };
    });

  return data;
}

var obj = [
  {
    data: [],
  },
];

// maybe path from root directory
const pathToJSON = "../static-content/public/Articles.json";

app.get("/reset_articles", (req, res) => {
  fs.writeFile(pathToJSON, JSON.stringify([]), "utf8", () => {});

  res.send("Done.");
});

app.get("/get_article", (req, res) => {
  const url = req.query.url
    ? req.query.url
    : "https://samueli.ucla.edu/ucla-scientists-develop-durable-material-for-flexible-artificial-muscles/";
  console.log(__dirname);
  console.log(fs.readdirSync("../"));
  getArticle(url)
    .then((article) => {
      fs.readFile(pathToJSON, "utf8", function readFileCallback(err, data) {
        if (err) {
          console.log(err);
        } else {
          // convert from JSON to a JS object

          if (data === "") {
            obj = [];
          } else {
            obj = JSON.parse(data);
          }
          obj.push(article);

          const json = JSON.stringify(obj);
          // console.log(json);
          fs.writeFile(pathToJSON, json, "utf8", () => {});
        }
      });
      res.json(article);
    })
    .catch((err) => {
      console.log(err);
    });
});

// https://samueli.ucla.edu/newsroom
app.get("/all_article_urls", (req, res) => {
  const url = req.query.url
    ? req.query.url
    : "https://samueli.ucla.edu/newsroom";
  axios
    .get(url)
    .then((response) => {
      const html_data = response.data;
      const $ = cheerio.load(html_data);

      const articles = "article.et_pb_post.clearfix";

      const articleData = [];

      $(articles).each(function (index, element) {
        let url = $(element).find("h2 > a").attr("href");
        articleData.push(url);
      });
      res.send(articleData);
    })
    .catch((err) => {
      console.log(err);
    });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
