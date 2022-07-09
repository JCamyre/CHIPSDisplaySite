const express = require("express");
const cors = require("cors");
const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

const app = express();

// enable express to send json responses
app.use(express.json());
// enable express to be accessed via urls, maybe extended
// means api/"SOME ROUTE"
app.use(express.urlencoded({ extended: true }));

function processArticle(data) {
  console.log(data);
}

async function getArticle(url) {
  console.log(url);
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

      // processArticle(data);

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
    });
  // processArticle(data);

  return data;
}

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
        // console.log(JSON.stringify(getArticle(url)));
        // console.log(url);
        articleData.push(url);
        // getArticle(url).then((article) => {
        //   // console.log(article["title"]);
        //   articleData.push(article);
        // });
      });
      // writeFile("./test.json", JSON.stringify(urls), "utf8");
      // console.log(JSON.stringify(urls));
      return articleData;
    })
    .then((articles) => {
      console.log(articles);
      // async () => {
      //   console.log(await getArticle(articles[0]));
      // };
      getArticle(articles[0]).then((article) => {
        console.log(article);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // .then((articles) => {
  //   console.log("Articles: ", articles);
  // });
  res.send("yoyo");
});

// http://localhost:8000/webscrape?url=https://samueli.ucla.edu/ucla-engineers-win-american-chemical-society-young-investigator-award-two-years-in-a-row/
app.get("/webscrape", (req, res) => {
  const url = req.query.url;

  // res.send(`Wow, thanks so much for the url: ${url}, appreciate it!`);
  var data = {};
  axios
    .get(url)
    .then((response) => {
      const html_data = response.data;
      const $ = cheerio.load(html_data);

      const mainText = "div.et_pb_section_2.et_section_regular"; // et_pb_section_2 et_section_regular
      res.send($(mainText).text()); // .replace("\n", "\n\n\n")

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

      processArticle(data);

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
    })
    .catch((err) => {
      console.log("Error! ", err);
      res.send("Sorry, there was an error processing the url!");
    });
  processArticle(data);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
