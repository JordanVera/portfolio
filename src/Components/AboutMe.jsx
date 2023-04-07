import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
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
          <Grid className="gridItem bgGrey" item md={7} sx={{ py: 2, px: 2 }}>
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
          <Grid className="gridItem" item mx="auto" md={5}>
            <div className="skillsImageGrid">
              <div className="Javascript">
                {' '}
                <img
                  className="skillsLogo"
                  src="/media/skillsLogos/javascript.svg"
                  alt=""
                />
              </div>
              <div className="React">
                <img
                  className="skillsLogo"
                  src="/media/skillsLogos/react-colored.svg"
                  alt=""
                />
              </div>
              <div className="MongoDb">
                <img
                  className="skillsLogo"
                  src="/media/skillsLogos/mongodb-colored.svg"
                  alt=""
                />
              </div>
              <div className="Sass">
                <img
                  className="skillsLogo"
                  src="/media/skillsLogos/sass-colored.svg"
                  alt=""
                />
              </div>
              <div className="Vite">
                <img
                  className="skillsLogo"
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
                  alt="Vite"
                />
              </div>
              <div className="Material">
                <img
                  className="skillsLogo"
                  src="/media/skillsLogos/materialui-colored.svg"
                  alt=""
                />
              </div>
              <div className="Heroku">
                <img
                  className="skillsLogo"
                  src="/media/skillsLogos/heroku-colored.svg"
                  alt=""
                />
              </div>
              <div className="Bootstrap">
                <img
                  className="skillsLogo"
                  src="/media/skillsLogos/bootstrap-colored.svg"
                  alt=""
                />
              </div>
              <div className="Redux">
                <img
                  className="skillsLogo"
                  src="/media/skillsLogos/redux-colored.svg"
                  alt=""
                />
              </div>
              <div className="Python">
                <img
                  className="skillsLogo"
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
                  alt="Python"
                />
              </div>
              <div className="MySQL">
                <img
                  className="skillsLogo"
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
                  alt="MySQL"
                />
              </div>
              <div className="Express">
                <img
                  className="skillsLogo"
                  src="/media/skillsLogos/html5-colored.svg"
                  alt=""
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
