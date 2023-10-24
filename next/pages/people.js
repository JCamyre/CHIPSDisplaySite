import React from "react";
import FacultyPage from "../components/FacultyPage";
import StudentsPage from "../components/StudentsPage";
import BackButton from "../components/BackButton";
import { Container, Box } from "@mui/material";
import getPeople from "../scripts/getPeople";
import getType from "../scripts/getType";

// Display all students, rather than cycling through a few at a time

function People({people}) {
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
            <FacultyPage people={people}/>
          </Box>
          <Box>
            <StudentsPage />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export async function getStaticProps()
{
    const allPeople = await getPeople();
    // console.log("Testing getType: ", await getType(allPeople[2].userid));
    const faculty = await allPeople.filter(async function(person) {
      const curPersonType = await getType(person.userid);
      if (curPersonType == "faculty")
        return person;
    })
    console.log("Faculty members: ", faculty);

    console.log("Some people: ", allPeople.slice(0, 4))

    return {
        props: {
            people: allPeople
        },
        revalidate: 40
    }
}

export default People;
