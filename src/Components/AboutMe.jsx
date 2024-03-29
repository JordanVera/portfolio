import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import Divider from '@mui/material/Divider';

export default function AboutMe() {
  const toastSettingsObj = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  };

  return (
    <div id="aboutMe" className="white">
      <Container>
        <Grid container>
          <Grid
            className="bgGrey description"
            item
            md={7}
            sx={{ py: 2, px: 2 }}
            style={{ marginBottom: 0 }}
          >
            <Typography variant="h4">About Me</Typography>
            <Divider sx={{ my: 1 }} />
            <p>
              My name is Jordan Vera, I am a 26 year old fullstack web developer
              from Houston, TX. I am a very ambitious person and really love
              working within nodejs.
            </p>
            <p>
              I graduated from the{' '}
              <a
                href="https://techbootcamps.utexas.edu/coding/"
                target="_blank"
                rel="noreferrer"
              >
                UT Austin Coding Bootcamp
              </a>{' '}
              in 2018, and since then have been honing my skills as a full-stack
              web developer. Lately I have been diving into data visualization,
              MERN development, and have even been dabbling in machine learning
              with the use of tensorflow.js. Building web applications is my
              passion and I would love nothing more than to become part of an
              exciting and thriving developer team.
            </p>
            <p>
              Please see my PGA Alpha and NFL last Longer sites in the{' '}
              <a href="#projects">my projects</a> section of my site, they are
              my featured projects and what I spend most of my time on.
            </p>
          </Grid>
          <Grid item md={5}>
            <Box className="headshot"></Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
