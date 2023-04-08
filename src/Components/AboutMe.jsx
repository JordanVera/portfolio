import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';

import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import JavascriptIcon from '@mui/icons-material/Javascript';
import js from '../movies/javascriptFactsObj.js';
import { toast } from 'react-toastify';

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
            className="bgGrey"
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
              web developer. I love building web applications, and lately I have
              been diving into data visualization and MERN development.
            </p>
            <p>
              I am familiar with many technologys from node.js, react, express,
              mongoDB, mongoose, axios, node.js, lodash, socket, chart.js,
              redux, scss, html5, git, and much more.
            </p>
            <p>
              Please see my PGA Alpha and NFL last Longer sites in the{' '}
              <a href="#projects">my projects</a> section of my site, they are
              my featured projects and what I spend most of my time on.
            </p>
            <Button
              id="randomJsFactButton"
              startIcon={<JavascriptIcon />}
              color="secondary"
              variant="contained"
              onClick={() =>
                toast.info(
                  `${js[Math.floor(Math.random() * js.length)].fact}`,
                  toastSettingsObj
                )
              }
            >
              Random Javascript Fact
            </Button>
          </Grid>
          <Grid item md={5}>
            <Box
              className="headshot"
              style={{
                height: '100%',
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
