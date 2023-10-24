import Video from "../components/Video";
import BackButton from "../components/BackButton";
import React from "react";
import { Container, Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Videos() {
  return (
    <div>
      <BackButton />
      <Container className="content" maxWidth="lg">
      <Box
        alignItems="center"
        justifyContents="center"
        style={{
          backgroundColor: "#fff",
          margin: "auto",
          borderRadius: "10px",
          marginTop: "20px",
          padding: "20px",
          boxShadow: "0 14px 8px -4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Videos</h1>
        <Carousel
          width={"100%"}
          height={"50%"}
          centerMode={true}
          transitionTime={700}
          centerSlidePercentage={55}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          showThumbs={false}
          stopOnHover={true}
        >
          <Video url="https://www.youtube.com/watch?v=cxRDNjvUFXM" />
          <Video url="https://www.youtube.com/watch?v=g1e11lsrSvw" />
        </Carousel>
        </Box>
        {/* <iframe src="https://www.nist.gov/news-events/news/2023/09/subramanian-iyer-joins-chips-america-research-and-development-office.htm" height="200" width="300">

        </iframe> */}
      </Container>
    </div>
  );
}

// export async function getStaticProps() {
//   const results = await getPeople();

//   console.log("First couple people: ", results.slice(0, 4));

//   return {
//     props: {
//       name: "Joseph"
//     },
//     revalidate: 30
//   }
// }

export default Videos;
