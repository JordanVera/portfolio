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
            <ListItemText primary="A node.js application I built and still use at the company I work for today to send mass emails to customers, insurance adjusters, future customers." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon sx={{ color: '#ff005a' }} />
            </ListItemIcon>
            <ListItemText primary="This app has been used by our bosses for recruiting events and more, became a great way to get a message to a large amount of people easily for my company." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon sx={{ color: '#ff005a' }} />
            </ListItemIcon>
            <ListItemText primary="This app is very light weight and only contains 3 npm dependencies.  Those being @sendgrid/mail, dotenv, and nodemon." />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
