const axios = require('axios')
const cheerio = require('cheerio')
// https://samueli.ucla.edu/news-events/

export default function getNews(url)
{
    axios.get(url).then((res)=>{
        const $ = cheerio.load(res);
        console.log($('title').text())
    }).catch((err) => {
        console.error(err);
    })
}