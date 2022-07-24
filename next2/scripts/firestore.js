import {
  initializeApp,
  applicationDefault,
  cert,
  getApps,
  getApp,
} from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";
import axios from "axios";

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

  await docRef.set({
    title: articleObj["title"],
    summary: articleObj["summary"],
    img: articleObj["img"],
    date: articleObj["date"],
    full_text: articleObj["full_text"],
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
      console.log("Error! ", err);
      return { error: "bad error" };
    });

  return data;
}

module.exports = { changeValues, getArticle, retrieveDocs, createArticle };
