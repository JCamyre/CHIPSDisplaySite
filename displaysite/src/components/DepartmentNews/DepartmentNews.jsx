import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';

function DepartmentNews() {
  return (
    <div style={{paddingTop: '20px'}}>
        <h1>ECE Department News</h1>
        <NewsArticle
            title='UCLA Electrical Engineering Professor Mona Jarrahi First in Public University to Win IET A F Harvey Engineering Research Prize'
            link='https://samueli.ucla.edu/ucla-electrical-engineering-professor-mona-jarrahi-first-in-public-university-to-win-iet-a-f-harvey-engineering-research-prize/'
            date='December 14, 2021'
            summary='Mona Jarrahi has been awarded the 2021 A F Harvey Engineering Research Prize from the Institution of Engineering and Technology'
        />
        <NewsArticle
            title='UCLA Engineering Faculty and Alumnus Asad Madni Receives IEEE Medal of Honor'
            link='https://www.ee.ucla.edu/ucla-engineering-faculty-and-alumnus-asad-madni-receives-ieee-medal-of-honor/'
            date='December 3, 2021'
            summary='Asad Madni ’69, M.S. ’72, a distinguished adjunct professor of electrical and computer engineering at the UCLA Samueli School of'
        />
        <NewsArticle
            title='UCLA Engineering Professor Jason Cong Receives 2022 IEEE Noyce Medal'
            link='https://samueli.ucla.edu/ucla-engineering-professor-jason-cong-receives-2022-ieee-noyce-medal/'
            date='December 2, 2021'
            summary='Jason (Jingsheng) Cong, UCLA’s Volgenau Professor for Engineering Excellence and a distinguished professor of computer science and of electrical and'
        />
    </div>
  );
}

export default DepartmentNews;
