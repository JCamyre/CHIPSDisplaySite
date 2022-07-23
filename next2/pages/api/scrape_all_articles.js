import { createArticle, getArticle } from "../../scripts/firestore";
import axios from "axios";
import cheerio from "cheerio";

export default function handler(req, res) {
  const url = req.query.url
    ? req.query.url
    : "https://samueli.ucla.edu/newsroom";

  // clear out firestore -> newsroom_url -> get all 9 articles -> for each article, get info and put into firestore -> done
  axios
    .get(url)
    .then((response) => {
      const html_data = response.data;
      const $ = cheerio.load(html_data);

      const articles = "article.et_pb_post.clearfix";

      $(articles).each(function (index, element) {
        let url = $(element).find("h2 > a").attr("href");
        getArticle(url).then((article) => {
          createArticle(`article_${index}`, article);
        });
      });

      res.status("200").send("Done! With fdsafdsafsdafdsa");
    })
    .catch((err) => {
      console.log(err);
      res.status("304").send("Bad.");
    });
}
