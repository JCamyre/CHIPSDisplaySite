import React, { useState } from "react";
import { useRouter } from "next/router";
import Posters from "../../components/Posters.json";
import { Container, Box, Button, Stack } from "@mui/material";
import BackButton from "../../components/BackButton";
import { Document, Page, pdfjs } from "react-pdf";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ArticlePage() {
  const [curPage, setCurPage] = useState(1);
  const [numPages, setNumPages] = useState(0);

  const router = useRouter();
  const { id } = router.query;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setCurPage(1);
  }

  function prevPage() {
    setCurPage((curPage + 1) % numPages);
  }

  function nextPage() {
    setCurPage((curPage - 1) % numPages);
  }

  return (
    <Container className="content" maxWidth="lg">
      <BackButton path="/posters" />
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
          justifyItems: "center",
        }}
      >
        {Posters.length > id && (
          <Container style={{ paddingTop: "20px", width: "fit-content" }}>
            <Document
              file={`/posters/${Posters[id]["name"]}`}
              options={{ workerSrc: "/pdf.worker.js" }}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={curPage} height={1600} width={800} />
            </Document>
            <Stack>
              <div>
                <p>
                  Page {curPage || (numPages ? 1 : "--")} of {numPages || "--"}
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="button"
                  disabled={numPages <= 1}
                  onClick={prevPage}
                  style={{ color: "#1f497d", height: "175px", width: "100%" }}
                >
                  Prev
                </Button>
                <Button
                  type="button"
                  disabled={curPage >= numPages}
                  onClick={nextPage}
                  style={{ color: "#1f497d", width: "100%" }}
                >
                  Next
                </Button>
              </div>

              <p className="legend" style={{ textAlign: "center" }}>
                {Posters[id]["name"].split(".pdf")}
              </p>
            </Stack>
          </Container>
        )}
        {Posters.length <= id && <h1>Error! Article does not exist!</h1>}
      </Box>
    </Container>
  );
}
