import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import GolfCard from './ProjectCards/GolfCard.js';
import NflLastLongerCard from './ProjectCards/NflLastLongerCard.js';
import MassEmailerCard from './ProjectCards/MassEmailerCard.js';
import GifGeneratorCard from './ProjectCards/GifGeneratorCard.js';
import TriviaGameCard from './ProjectCards/TriviaGameCard.js';

export default function Projects() {
  return (
    <div id="projects">
      <Container>
        <Typography variant="h4">My Projects</Typography>

        <Grid container spacing={2} sx={{ my: 2 }} columns={10}>
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
        </Grid>
      </Container>
    </div>
  );
}
