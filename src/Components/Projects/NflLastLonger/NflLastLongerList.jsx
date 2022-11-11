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
              <BoltSharpIcon sx={{ color: '#ff005a' }} />
            </ListItemIcon>
            <ListItemText primary="A fantasy football pool web application.  This app is built using express, passport, axios, bcryptjs, lodash, mongodb, mongoose, and EJS just to name a few." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon sx={{ color: '#ff005a' }} />
            </ListItemIcon>
            <ListItemText primary="This app includes user login and authentication, a full checkout process through cryptocurrency, and a rock solid express backend api." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon sx={{ color: '#ff005a' }} />
            </ListItemIcon>
            <ListItemText primary="The objective of NFL Last Longer is to pick one NFL team each week to win the game, not against the spread, and you can only pick each team once." />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
