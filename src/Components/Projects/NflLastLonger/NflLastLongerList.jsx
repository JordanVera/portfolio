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
            <ListItemText primary="Engage in the ultimate fantasy football experience with my web application, featuring a wide array of technologies including Express, Passport, Axios, Bcryptjs, Lodash, MongoDB, Mongoose, and EJS, among others." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="Enjoy seamless user login and authentication, complete with a secure checkout process accepting cryptocurrency payments. The app boasts a robust Express backend API to ensure smooth functionality." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BoltSharpIcon className="green" />
            </ListItemIcon>
            <ListItemText primary="NFL Last Longer, the flagship feature, challenges you to strategically select one NFL team each week to secure a win—without considering the spread—and with the restriction of picking each team only once." />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
