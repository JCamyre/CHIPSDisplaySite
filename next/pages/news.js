import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import { Box, Container } from "@mui/material";
import NewsArticles from "../components/News";
import axios from 'axios';
import getAllArticles from "../components/GetAllArticles";

function News({articles}) {

  return (
    <Container className="content" maxWidth="lg">
      <BackButton />
      <Box
        style={{
          backgroundColor: "#fff",
          margin: "auto",
          borderRadius: "10px",
          marginTop: "20px",
          padding: "20px",
          boxShadow: "0 14px 8px -4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container>
          <NewsArticles articles={articles} />
        </Container>
      </Box>
      {/* <embed src='https://www.ee.ucla.edu' style={{width: '500px', height: '300px'}} /> */}
    </Container>
  );
}

export default News;

// getStaticProps() runs server side, so users will never see what api calls we make here. So no need to use our fake local api calls.
export async function getStaticProps() {
  // You aren't supposed to call relative API's in getStaticProps(), since it runs server-side
  // So clients will never see this, so you can do all your secretive stuff here (db, external calls)
  // Only use relative API's outside of getStaticProps, where clients can see your stuff running

  // const articles: Promise<Array<Object>>
  const articles = await getAllArticles().then(res => {
    return res;
  })

  console.log("In News.js, here's the first article: ", articles[0])

  // reference .json for getStaticProps?

  const tempArticles = [{"img":"https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_3x4.jpg","full_text":"The way people talk is influenced by where they grew up, the school they attended, their cultural background and the language spoken at home among other things. But does today’s speech technology recognize such nuanced differences and their implications? That’s the question Alexander Johnson, M.S. ’19 is trying to address.\nA fourth-year electrical engineering Ph.D. student at the UCLA Samueli School of Engineering, Johnson is working on improving artificial intelligence-based speech technology for children, particularly speakers of dialects underrepresented in science, technology, engineering and mathematics (STEM) such as African American English, or AAE. Johnson said he would like to see such technology used in educational applications that give children feedback on their oral language skills as they learn to speak and read.\nFinding solutions to challenges is nothing new to Johnson. Growing up in Baltimore, Maryland, he has always liked working on interesting problems. He likes to do things that keep him on his toes so he doesn’t feel bored. When it came time for college, Johnson didn’t declare a major initially at Northwestern University in Illinois. A friend of his convinced him to take an electrical engineering class and that opened his eyes to the infinite possibility of the discipline.\n“Every week in that class, we covered a different topic ranging from electronics to signal processing to solid state physics, and I enjoyed how the breadth and interdisciplinary nature of the field made sure that it never got dull,” Johnson said of his decision to major in electrical engineering.\n\n“Making speech technology, like Siri or Alexa, more receptive to African American English speech is a first step in normalizing the use of AAE in mainstream environments,” Alexander Johnson said.\n\nHe also decided to minor in both Spanish and Japanese because he has always been intrigued by how people from different populations speak. And that led him to think about how technology can be leveraged to help improve communication by not only automatically transcribing speech but also drawing meaning from it — highlighting the most important parts, determining the emotion behind what is said and predicting what should be said next. Johnson knew then that he wanted to do graduate research in the interdisciplinary field of speech technology with applications in medicine, education, business and entertainment.\n“I wanted to attend a school with strong programs in not just engineering, but also linguistics, medicine, education and other areas so that we could form strong research collaborations,” Johnson said. “UCLA has great programs across the board, so I was excited to work across departments here.” \nHe was also impressed with UCLA’s outreach to marginalized communities with programs such as the Center for Excellence in Engineering and Diversity. “Improving diversity in STEM is important to me, and UCLA seemed like a school willing to put forth the resources to do it,” Johnson said.\nAfter getting his master’s degree, Johnson decided to pursue a Ph.D. with a focus on African American English because it has often been considered an inferior or wrong way of speaking. It is important, Johnson said, to make cultural differences, including different regional dialects, more accepted in academic and professional settings.\nJohnson is currently the graduate student lead on a National Science Foundation-funded project with researchers from Georgia State University, UC Irvine, and University of Washington. The team is collecting speech samples from AAE-speaking children in Atlanta and using them to train more inclusive speech technology. \n“Making speech technology, like Siri or Alexa, more receptive to AAE speech is a first step in normalizing the use of AAE in mainstream environments,” Johnson said.\nLast year, Johnson was selected by the advisory group of the Science Hub for Humanity and Artificial Intelligence, a collaboration between UCLA and Amazon, as one of the 13 new Amazon Fellows. The program provides up to two academic quarters of funding for students to pursue independent projects in collaboration with UCLA researchers and Amazon scientists.\n\n“My main goal is to make technology more inclusive and I’m always looking for opportunities to have real social impact while working on interesting problems.” Johnson said.\n\nWorking with his advisor Abeer Alwan, a professor of electrical and computer engineering, Johnson conducts research as a member of Alwan’s Speech Processing and Auditory Perception Laboratory. With the fellowship support, Johnson said he hopes to bridge the gap between demographics. While speech technologies perform well for able-bodied, adult and native speakers of a language, they perform poorly for children, people with hearing or speech disabilities and those who speak with an accent. Training Automatic Speech Recognition (ASR) systems to recognize different speech patterns could help shorten the performance gap for people from these communities.\nIn additional to gaining technical skills in machine learning and audio signal processing, Johnson credits his research for teaching him valuable life skills, including teamwork, writing and communication. \nHe also has taken classes in inclusive teaching pedagogy and applied what he learned to the several classes he has taught, including ECE98T: Reading Equity and Inclusion in Speech-Language Technology — a class he designed and proposed through the UCLA Collegium of University Teaching Fellows.\nAside from his research, Johnson is an active member of the National Society of Black Engineers at UCLA, having served as the chapter president and working closely with the school’s leadership on efforts to improve inclusivity and diversity. He is also involved in the LGBTQ Student Advocacy Committee and the Electrical and Computer Engineering Graduate and Postdoc Society.\nLooking beyond his academic career, Johnson says he hopes to find ways to make a difference. “My main goal is to make technology more inclusive,” he said.” There are a lot of possible places to do that, and I’m always looking for opportunities to have real social impact while working on interesting problems.”\nAmy Ionescu contributed to this story","title":"UCLA Engineering Doctoral Student Aims to Bring Accessible Speech Technology to All","date":"Feb 16, 2023","summary":"The way people talk is influenced by where they grew up, the school they attended, their cultural background and the language spoken at home among other things"}]

  return {
    props: {
      articles: tempArticles,
    },
    revalidate: 4000,
  }
}