import React from 'react';
import { Typography, Container } from '@mui/material';

import ProjectTabs from './ProjectTabs.jsx';

export default function Projects() {
  return (
    <div id="projects">
      <Container>
        <Typography variant="h4">My Projects</Typography>
        <ProjectTabs />
      </Container>
    </div>
  );
}
