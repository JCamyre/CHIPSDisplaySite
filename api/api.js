const express = require("express");
const cors = require("cors");
const cheerio = require("cheerio");
const axios = require("axios");

// 4.5 hrs

const app = express();

// enable express to send json responses
app.use(express.json());
// enable express to be accessed via urls, maybe extended
// means api/"SOME ROUTE"
app.use(express.urlencoded({ extended: true }));

function processArticle(data) {
  console.log(data);
}

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
      // console.log($(mainText).text());

      const summary = $(mainText).text().split(".")[0];
      // console.log(summary);

      const title = "div.et_pb_blurb_content";
      // console.log($(title).text());

      const img =
        "div.et_pb_column.et_pb_column_2_3.et_pb_column_1.et_pb_css_mix_blend_mode_passthrough.et-last-child";
      // console.log($(img).find("img").attr("src"));

      const date = "div.et_pb_title_container";
      // console.log($(date).find("span").text());

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
      console.log($(otherImgs).find("img").attr("src"));
      $(otherImgs)
        .find("img")
        .each((index, element) => {
          console.log(index, $(element).attr("src"));
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
  console.log("done");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
