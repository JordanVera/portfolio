import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import ReactJs from './SkillsRatings/ReactJs.js';
import Javascript from './SkillsRatings/Javascript.js';
import Express from './SkillsRatings/Express.js';
import MongoDb from './SkillsRatings/MongoDb.js';
import Mongoose from './SkillsRatings/Mongoose.js';
import Html5 from './SkillsRatings/Html5.js';
import Css3 from './SkillsRatings/Css3.js';
import Nodejs from './SkillsRatings/Nodejs.js';
import RestApi from './SkillsRatings/RestApi.js';
import Axios from './SkillsRatings/Axios.js';

export default function Skills() {
  return (
    <div id="skills">
      <Container>
        <Typography variant="h4">
          <h4>Skills Breakdown</h4>
        </Typography>

        <Grid container>
          <Grid className="gridItem" item md={5}>
            <Grid container>
              <Grid className="gridItem" item xs={6}>
                <Javascript />
                <Express />
                <ReactJs />
                <MongoDb />
              </Grid>
              <Grid className="gridItem" item xs={6}>
                <Html5 />
                <Css3 />
                <Nodejs />
                <RestApi />
              </Grid>
            </Grid>
          </Grid>
          <Grid className="gridItem" item md={7}>
            <p>
              My ideal job position would be one that challenges me on a daily
              basis. I have worked with many different technologies including
              express, node.js, scss, lodash, react, mongoDB, mongoose, and much
              more. As a self taught developer I am also very excited to be a
              part of a team, almost all of my projects were created entirely by
              me so I cannot wait to collaborate with other devs! In my current
              job in construction I collaborate on a daily basis, much of my
              programming journey was completed alone so I am very excited to be
              a part of a team.
            </p>
            <p>
              I have worked with many technology stacks in the past but always
              find my way back to MERN. The only exception is sometimes I will
              swap out react for EJS on smaller applications. I love working in
              node.js, express, and mongo and creating REST apis. As I mentioned
              earlier, lately I have been getting into data visualization a lot
              and am now learning the d3 library.
            </p>
            <p>
              Please note that most of my web apps are hosted on Heroku free
              servers and may take some time to load, the apps are actually
              extremely fast and If i weren't so cheap and paid for hosting they
              would load much quicker, I promise.
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
