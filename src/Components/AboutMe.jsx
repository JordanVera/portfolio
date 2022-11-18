import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import ReactJs from './SkillsRatings/ReactJs.js';
import Javascript from './SkillsRatings/Javascript.js';
import Express from './SkillsRatings/Express.js';
import MongoDb from './SkillsRatings/MongoDb.js';
import Html5 from './SkillsRatings/Html5.js';
import Css3 from './SkillsRatings/Css3.js';
import Nodejs from './SkillsRatings/Nodejs.js';
import RestApi from './SkillsRatings/RestApi.js';
import Axios from './SkillsRatings/Axios.js';
import Mongoose from './SkillsRatings/Mongoose.js';
import Chart from './SkillsRatings/Chart.js';
import Git from './SkillsRatings/Git.js';
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
    <div id="aboutMe">
      <Container>
        <Grid container>
          <Grid
            className="gridItem"
            item
            md={7}
            sx={{ bgcolor: 'background.paper', py: 2, px: 2 }}
          >
            <Typography variant="h4">About Me</Typography>
            <Divider sx={{ my: 1 }} />
            <p>
              My name is Jordan Vera, I am a 26 year old fullstack web developer
              from Houston, TX. I am a very ambitious person and really love
              working within nodejs.
            </p>
            <p>
              I graduated from the UT Austin Coding Bootcamp in 2018, and since
              then have been honing my skills as a full-stack web developer.
            </p>
            <p>
              My main focus has been building web applications, and lately I
              have been diving into data visualization and MERN development. I
              am familiar with many technologys from node.js, react, express,
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
          <Grid className="gridItem" item mx="auto" md={5}>
            <Grid
              container
              columnSpacing={{ xs: 6, sm: 6, md: 2, lg: 2 }}
              className="skillRatings"
            >
              <Grid className="gridItem" item xs={6}>
                <Javascript />
                <Express />
                <ReactJs />
                <MongoDb />
                <Mongoose />
                <Git />
              </Grid>
              <Grid className="gridItem" item xs={6}>
                <Html5 />
                <Css3 />
                <Nodejs />
                <RestApi />
                <Axios />
                <Chart />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
