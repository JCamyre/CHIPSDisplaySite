import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import { Box, Container } from "@mui/material";
import NewsArticles from "../components/News";
import axios from 'axios';
import getAllArticles from "../components/GetAllArticles";

function News({articles}) {

  return (
    <div>
      <BackButton />
      <Container className="content" maxWidth="lg">
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
      </Container>
    </div>
  );
}

export default News;

// getStaticProps() runs server side, so users will never see what api calls we make here. So no need to use our fake local api calls.
// You aren't supposed to call relative API's in getStaticProps(), since it runs server-side
// So clients will never see this, so you can do all your secretive stuff here (db, external calls)
// Only use relative API's outside of getStaticProps, where clients can see your stuff running
export async function getStaticProps() {

  // const articles: Promise<Array<Object>>
  const articles = await getAllArticles().then(res => {
    return res;
  })

  // console.log("In News.js, here's the articles: ", articles)

  // reference .json for getStaticProps?

  // Have to make decision on if I want to keep Firebase, or just use .json as my database.
  // But lowk I update both .json + firebase, but I never use either, I just directly return Articles and use that

  return {
    props: {
      articles: articles,
    },
    revalidate: 4000,
  }
}