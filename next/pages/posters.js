import React from "react";
import BackButton from "../components/BackButton";
import { Container, Box, Image } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import posters from "../components/Posters.json";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Posters() {
  return (
    <div>
      <BackButton />
      <Container className="content" maxWidth="lg">
      <Box
        style={{
          justifyContent: "center",
          backgroundColor: "#fff",
          margin: "auto",
          borderRadius: "10px",
          marginTop: "20px",
          padding: "20px",
          boxShadow: "0 10px 8px -4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Posters</h1>
        <Carousel
          width={"100%"}
          height={"100%"}
          centerMode={true}
          transitionTime={700}
          centerSlidePercentage={85}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={false}
          showThumbs={false}
          stopOnHover={true}
        >
          {posters.map((poster, key) => (
            <a href={`/poster/${key}`}>
              <div key={key}>
                <img src={`/poster_images/${poster["thumbnail"]}`} style={{height: "1080px", width: "auto"}} />
              </div>
            </a>
          ))}
        </Carousel>
      </Box>
    </Container>
    </div>
  );
}

export default Posters;
