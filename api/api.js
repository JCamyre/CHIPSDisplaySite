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
  console.log(req.query);
  res.send(`Wow, thanks so much for the url: ${url}, appreciate it!`);

  axios
    .get(url)
    .then((response) => {
      const html_data = response.data;
      const $ = cheerio.load(html_data);

      const mainText = "div.et-l et-l--post";
      res.send($(mainText).text());
    })
    .catch((err) => {
      console.log("Error! ", err);
    });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
