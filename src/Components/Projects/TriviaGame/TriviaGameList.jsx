import * as React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Grid from '@mui/material/Grid';

import BoltSharpIcon from '@mui/icons-material/BoltSharp';

export default function TriviaGameList() {
  return (
    <Box>
      <Grid item xs={12} md={6}>
        <List>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="Horror themed trivia site built using javascript.  This was my first real project EVER!" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="A trivia game that will tally results and give you a score at the end." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="Beware of scares if a wrong answer is given, and be sure to have the volume on when playing this game." />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
