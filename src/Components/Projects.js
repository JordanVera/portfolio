import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import GolfCard from './Projects/GolfCard.js';
import NflLastLongerCard from './Projects/NflLastLongerCard.js';
import MassEmailerCard from './Projects/MassEmailerCard.js';
import GifGeneratorCard from './Projects/GifGeneratorCard.js';
import TriviaGameCard from './Projects/TriviaGameCard.js';
import VerticalTabs from './Projects/VerticalTabs.jsx';

export default function Projects() {
  return (
    <div id="projects">
      <Container>
        <Typography variant="h4" className="pink">
          My Projects
        </Typography>

        {/* <Grid container spacing={2} sx={{ my: 2 }} columns={10}>
          <Grid item md={2} sm={5} xs={10}>
            <GolfCard />
          </Grid>
          <Grid item md={2} sm={5} xs={10}>
            <NflLastLongerCard />
          </Grid>
          <Grid item md={2} sm={5} xs={10}>
            <MassEmailerCard />
          </Grid>
          <Grid item md={2} sm={5} xs={10}>
            <GifGeneratorCard />
          </Grid>

          <Grid item md={2} sm={5} xs={10}>
            <TriviaGameCard />
          </Grid>
        </Grid> */}
        <VerticalTabs />
      </Container>
    </div>
  );
}
