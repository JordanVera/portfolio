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
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="A Chat GPT clone using openai's chatgpt 3.5 model and rapid apis endpoint.  App is in beta and still has many features left to implement at this point." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="Ability to have multiple different chats going at the same time, each chat stores prior messages and replies to aid in better chatGPT responses." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="Right now there is no backend so upon leaving the app chats get deleted and the app is not very responsive on mobile.  I am aware of these issues and am working on them as we speak!" />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
