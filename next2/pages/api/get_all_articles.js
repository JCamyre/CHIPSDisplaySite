import { retrieveDocs } from "../../scripts/firestore";

export default function handler(req, res) {
  retrieveDocs()
    .then((articles) => {
      // console.log(articles);
      res.status(200).send(JSON.stringify(articles));
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(304).send("not pog");
    });
}
