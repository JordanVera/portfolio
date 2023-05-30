import * as React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Grid from '@mui/material/Grid';

import BoltSharpIcon from '@mui/icons-material/BoltSharp';

export default function InteractiveList() {
  return (
    <Box>
      <Grid item xs={12} md={6}>
        <List>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Immerse yourself in an exceptional trivia experience with my feature-rich trivia game app." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Customize your quiz by selecting categories, question difficulty, and the number of questions you want to tackle. Our questions are sourced from a reliable trivia API." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Our project boasts a lightweight architecture, leveraging Vite, React, and a select few additional packages to deliver optimal performance and efficiency." />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
