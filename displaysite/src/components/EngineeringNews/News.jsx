import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';

// Can do webscraping later

function News() {
  return (
    <div style={{paddingTop: '20px'}}>
        <h1>UCLA Engineering News</h1>
        <NewsArticle 
            title='UCLA Computer Scientist Receives Major Award for Contributions to Cyber Security'
            link='https://samueli.ucla.edu/ucla-computer-scientist-receives-major-award-for-contributions-to-cyber-security/'
            summary='Rafail Ostrovsky, a distinguished professor of computer science at the UCLA Samueli School of Engineering, has received the 2022 W. Wallace McDowell Award from the Institute of Electrical and Electronics Engineers (IEEE) Computer Society.'
            date='Feb 2, 2022' />
        <NewsArticle 
            title='UCLA Chemical Engineer Receives Early Career Awards from National Science Foundation, American Chemical Society'
            link='https://samueli.ucla.edu/ucla-chemical-engineer-receives-early-career-awards-from-national-science-foundation-american-chemical-society/'
            summary='Yuzhang Li, an assistant professor of chemical and biomolecular engineering at the UCLA Samueli School of Engineering, has received two major awards in support of his research — a CAREER award'
            date='Jan 31, 2022'/>
        <NewsArticle
            title='UCLA Engineering Online Master’s Program Ranked No. 1 for Veterans by U.S. News & World Report'
            link='https://samueli.ucla.edu/ucla-engineering-online-masters-program-ranked-no-1-for-veterans-by-u-s-news-world-report/'
            summary='The online master’s degree program at the UCLA Samueli School of Engineering is ranked No. 1 for veterans in U.S. News & World Report’s 2022 list of the best online engineering programs.'
            date='Jan 26, 2022'/>
        </div>
  )
}

export default News;
