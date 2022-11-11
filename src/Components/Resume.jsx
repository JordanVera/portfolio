import React from 'react';
import { Grid, Button, Container, Link } from '@mui/material';

export default function Resume() {
  return (
    <div id="resume">
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            md={8}
            sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
          >
            <h2>Download a copy of my resume</h2>
          </Grid>
          <Grid item md={4} xs={12}>
            <Link href="/media/webDevResume.pdf" download="jordanVeraResume">
              <Button>My Resume</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
