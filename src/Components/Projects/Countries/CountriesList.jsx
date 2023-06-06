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
            <ListItemText primary="User-friendly interface: The React app provides an intuitive and responsive interface for easy country exploration." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="Seamless API integration: The app seamlessly integrates with a RESTful API, ensuring accurate and real-time country data." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="Rich data visualization: Users can visually explore country information through interactive charts, maps, and graphs." />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
