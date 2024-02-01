import React from "react";
import FacultyPage from "../components/FacultyPage";
import StudentsPage from "../components/StudentsPage";
import BackButton from "../components/BackButton";
import { Container, Box } from "@mui/material";
import getPeople from "../scripts/getPeople";

// Display all students, rather than cycling through a few at a time

function People({alumni}) {
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
            <FacultyPage people={alumni}/>
          </Box>
          {/* <Box>
            <StudentsPage />
          </Box> */}
        </Box>
      </Container>
    </div>
  );
}

export async function getStaticProps()
{
  console.log("yo")
    const allPeople = await getPeople();
    console.log("yo after getPeople()")

    // const alumni = await Promise.all(
    //   allPeople.map(async function(person) {
    //     const curPersonType = await getType(person.userid);
    //     if (curPersonType["type"] === "Alumni")
    //     {
    //       console.log("This person is an Alumni: ", person, curPersonType);
    //       return person;
    //     }
    //     return null;
    // }));
    // const filteredAlumni = alumni.filter(person => person !== null)

    // console.log("Alumni members: ", alumni);

    const alumni = [{}];

    return {
        props: {
            alumni: alumni
        },
        revalidate: 40
    }
}

export default People;
