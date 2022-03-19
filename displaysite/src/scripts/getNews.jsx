var req = new XMLHttpRequest();  

export default function getNews()
{
    req.open('GET', 'https://samueli.ucla.edu/news-events/', false);   
    req.send(null);  
    if(req.status === 200)  
       console.log(req.responseText);
}
