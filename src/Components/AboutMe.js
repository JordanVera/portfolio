import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import ContactForm from './ContactForm.js';

export default function AboutMe() {
  return (
    <div id="aboutMe">
      <Container>
        <Typography variant="h4">About Me</Typography>
        <Grid container>
          <Grid className="gridItem" item md={5}>
            <p>
              My name is Jordan Vera, I am a 26 year old MERN developer from
              Houston, TX. I have many hobbies outside of programming including
              skateboarding, traveling, and trying new foods. My favorite movie
              is Pulp Fiction and my favorite food is Texas BBQ.
            </p>
            <p>
              I graduated from the UT Austin Coding Bootcamp in 2018, and since
              then have been honing my skills as a full-stack web developer.
              Although I did graduate from a coding bootcamp, I consider myself
              a self taught programmer.
            </p>
            <p>
              My main focus has been building complex web applications, and
              lately I have been diving into data visualization. Please see my
              PGA Alpha and NFL last Longer sites in the{' '}
              <a href="#projects">my projects</a> section of my site.
            </p>
          </Grid>
          <Grid className="gridItem" mx="auto" item md={7}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
