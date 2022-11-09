import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import MassEmailerList from './MassEmailerList.jsx';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';

import Typography from '@mui/material/Typography';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
}

export default function MassEmailerTab() {
  return (
    <>
      <Typography
        sx={{ mx: 3, color: '#ff005a' }}
        gutterBottom
        variant="h5"
        component="div"
      >
        <a
          className="tabLinks"
          href="https://github.com/JordanVera/bulkEmail"
          target="_blank"
          rel="noreferrer"
        >
          Node.js Mass Emailer
        </a>
      </Typography>
      <Box sx={{ mx: 2 }}>
        <IconButton size="small" sx={{ mx: 1 }}>
          <a
            className="tabLinks"
            href="https://github.com/JordanVera/bulkEmail"
            target="_blank"
            rel="noreferrer"
          >
            <IosShareIcon />
          </a>
        </IconButton>
        <IconButton size="small" sx={{ mx: 1 }}>
          <a
            className="tabLinks"
            href="https://github.com/JordanVera/bulkEmail"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </IconButton>
      </Box>

      <MassEmailerList />
    </>
  );
}
