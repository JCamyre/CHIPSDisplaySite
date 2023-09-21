import React from "react";
import FacultyPage from "../components/FacultyPage";
import StudentsPage from "../components/StudentsPage";
import BackButton from "../components/BackButton";
import { Container, Box } from "@mui/material";

// Display all students, rather than cycling through a few at a time

function People() {
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
          <Box>
            <FacultyPage />
          </Box>
          <Box>
            <StudentsPage />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default People;
