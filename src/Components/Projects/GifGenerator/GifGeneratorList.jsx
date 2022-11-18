import * as React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Grid from '@mui/material/Grid';

import BoltSharpIcon from '@mui/icons-material/BoltSharp';

export default function GifGeneratorList() {
  return (
    <Box>
      <Grid item xs={12} md={6}>
        <List>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="The site allows you to give it a topic and will generate gifs based upon the topic given." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="This is a front end only application that was one of my first exposures with using external apis." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="The application will also give the rating of the gif shown for each result, and also have some default topics chosen ny me." />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
