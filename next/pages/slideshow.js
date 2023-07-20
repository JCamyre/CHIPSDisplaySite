import React from "react";
import BackButton from "../components/BackButton";
import { Box, Container } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Articles from '../components/Articles.json';
import NewsArticle from '../components/NewsArticle';
import FacultyMembers from '../components/Faculty.json';
import StudentsData from '../components/People.json';
import Person from '../components/Person';

// THis should replace carousel
import styles from './Carousel.module.css'

function Slideshow() {
    // Students, faculty, who else
    // News

  return (
    <Container className="content" maxWidth="xl">
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
        <h1 style={{ textAlign: "center" }}>Slideshow</h1>
        <Carousel
          className={styles}
          width="100%"
          height="40%"
          centerMode={true}
          transitionTime={20000}
          centerSlidePercentage={90}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          showThumbs={false}
          autoPlay={true}
          stopOnHover={false}
        >
        {Articles && Articles.map((article, key) => (
          <NewsArticle
            id={key}
            article={article}
          />
        ))}
        {FacultyMembers.map((faculty, idx)=>(
            <Person
                key={idx}
                name={faculty.name}
                title={faculty.title}
                major={faculty.major}
                primary_area={faculty.primary_area}
                secondary_area={faculty.secondary_area}
                email={faculty.email}
                img={faculty.img}
                research_lab={faculty.research_lab}
                research_lab_url={faculty.research_lab_url}
            />
        ))}
        {StudentsData.map((student, idx)=>(
          <Box justifyContent='center' alignItems='center' className='content'>
            <Person
                key={idx}
                name={student.name}
                major={student.major}
                primary_area={student.primary_area}
                img={student.img}
                email={student.email}
                linkedin={student.linkedin}
            />
          </Box>
        ))}
        </Carousel>
      </Box>
    </Container>
  );
}

export default Slideshow;
