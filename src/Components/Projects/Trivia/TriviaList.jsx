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
            <ListItemText primary="A decked out trivia game.  This app has many premium features for a trivia application." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Choose a category, question difficulty, and number of questions to be quizzed upon.  Questions sources from the trivia api." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Very lightweight in terms of packages and frameworks.  Project uses Vite, React, and a few more packages." />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
