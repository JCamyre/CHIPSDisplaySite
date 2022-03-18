const axios = require('axios')
const cheerio = require('cheerio')
// https://samueli.ucla.edu/news-events/

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default function getNews(url)
{
    axios.get(url).then((res)=>{
        const $ = cheerio.load(res);
        console.log($('title').text())
    }).catch((err) => {
        console.error(err);
    })
}