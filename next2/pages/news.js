import React from "react";
import BackButton from "../components/BackButton";
import { Box, Container } from "@mui/material";
import NewsArticles from "../components/News";

function News() {
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
          <NewsArticles />
        </Container>
      </Box>
      {/* <embed src='https://www.ee.ucla.edu' style={{width: '500px', height: '300px'}} /> */}
    </Container>
  );
}

export default News;
