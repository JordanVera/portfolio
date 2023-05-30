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
            <ListItemText primary="Beta version of my Chat GPT clone utilizing OpenAI's ChatGPT 3.5 model and Rapid API's endpoint. Stay tuned for exciting upcoming features!" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="Concurrent multi-chat functionality enables multiple simultaneous conversations while retaining message history to enhance ChatGPT responses." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="Currently addressing backend limitations to ensure chat persistence and enhancing mobile responsiveness. I am aware of these issues and actively working on resolving them!" />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
