import React from 'react';
import { Typography, Container } from '@mui/material';

import ProjectTabs from './Projects/ProjectTabs.jsx';

export default function Projects() {
  return (
    <div id="projects">
      <Container>
        <Typography variant="h4" className="pink">
          My Projects
        </Typography>
        <ProjectTabs />
      </Container>
    </div>
  );
}
