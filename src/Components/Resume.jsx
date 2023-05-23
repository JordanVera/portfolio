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
            <Link
              href="/media/webDevResume(04.12.22).pdf"
              download="jordanVeraResume"
            >
              <h2 className="resumeHeader green">
                Download a Copy of My Resume
              </h2>
            </Link>
          </Grid>
          <Grid item md={4} xs={12}>
            <a href="#resumeFull">
              <Button color="secondary" variant="contained">
                My Resume
              </Button>
            </a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
