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
            <ListItemText primary="A data visualization web app to view real-time stats about your favorite PGA golfers" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon sx={{ color: '#ff005a' }} />
            </ListItemIcon>
            <ListItemText primary="Check golf standings, strokes gained data, upcoming tournaments, live betting odds, and much more within the web app." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon sx={{ color: '#ff005a' }} />
            </ListItemIcon>
            <ListItemText primary="Express, React, Chart.js, MongoDB, Node.js, Axios, and many more modern technologies used to build PGA Alpha" />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
