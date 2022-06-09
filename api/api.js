const express = require("express");
const cors = require("cors");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

// enable express to send json responses
app.use(express.json());
// enable express to be accessed via urls, maybe extended
// means api/"SOME ROUTE"
app.use(express.urlencoded({ extended: true }));

app.get("/webscrape", (req, res) => {
  const url = req.query.url;
  // res.send(`Wow, thanks so much for the url: ${url}, appreciate it!`);

  axios
    .get(url)
    .then((response) => {
      const html_data = response.data;
      const $ = cheerio.load(html_data);

      const mainText = "div.et_pb_section_2.et_section_regular"; // et_pb_section_2 et_section_regular
      res.send($(mainText).text().replace("\n", "\n\n\n"));
      console.log($(mainText).text());

      const summary = $(mainText).text()[0];
      console.log(summary);

      const title = "div.et_pb_blurb_content";
      console.log($(title).text());

      const img =
        "div.et_pb_column.et_pb_column_2_3.et_pb_column_1.et_pb_css_mix_blend_mode_passthrough.et-last-child";
      console.log($(img).find("img").attr("src"));

      const date = "div.vet_pb_title_container";
      console.log($(date).find("span").text());

      const otherImgs = "figure";
      console.log($(otherImgs).find("img").attr("src"));

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
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
