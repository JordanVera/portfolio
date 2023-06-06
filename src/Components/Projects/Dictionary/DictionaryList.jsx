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
            <ListItemText primary="A React-based dictionary app provides a user-friendly interface for seamless word search and exploration, allowing users to quickly find word definitions, synonyms, and related information." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="With its responsive design and intuitive search functionality, the dictionary app built with React ensures an efficient and convenient user experience across various devices, making it a valuable tool for students, writers, and language enthusiasts." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="Leveraging React's component-based architecture, the dictionary app offers modular and maintainable code, enabling developers to easily extend its functionality, integrate APIs for language translations, and enhance user interactions in future updates." />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
