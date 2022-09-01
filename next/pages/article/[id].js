import React from "react";
import { useRouter } from "next/router";
import Articles from "../../components/Articles.json";
import { Container, Box } from "@mui/material";
import BackButton from "../../components/BackButton";

function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container className="content" maxWidth="lg">
      <BackButton path="/news" />
      <Box
        style={{
          backgroundColor: "#fff",
          margin: "auto",
          borderRadius: "10px",
          marginTop: "20px",
          padding: "20px",
          boxShadow: "0 10px 8px -4px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {Articles.length > id && (
          <Box style={{ width: "80%" }}>
            <h1>{Articles[id].title}</h1>
            <img
              src={Articles[id].img}
              style={{ height: "300px" }}
              alt="Article Thumbnail"
            />
            <p style={{ fontSize: "20px" }}>{Articles[id].date}</p>
            <h3 style={{ fontSize: "24px", fontStyle: "italic" }}>
              "{Articles[id].summary}"
            </h3>
            {Articles[id].full_text.split("\n").map((content, index) => (
              <p
                style={{
                  fontSize: "24px",
                  lineHeight: "40px",
                  // whiteSpace: "pre-wrap",
                  textIndent: "50px",
                }}
                key={index}
              >
                {content}
              </p>
            ))}
          </Box>
        )}
        {Articles.length <= id && <h1>Error! Article does not exist!</h1>}
      </Box>
    </Container>
  );
}

export default ArticlePage;
