import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import InteractiveList from './PgaAlphaList';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';

import Typography from '@mui/material/Typography';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
}

export default function PgaAlphaTab() {
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
          href="https://pga-alpha.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          PGA Alpha
        </a>
      </Typography>
      <Typography
        sx={{ fontSize: '15px', mx: 3, mb: 2 }}
        gutterBottom
        variant="h5"
        component="div"
      >
        Featured Project - please be sure to check it out on the web, also if
        you are interested in the code I included the github link
      </Typography>
      <Box sx={{ mx: 2 }}>
        <IconButton size="small" sx={{ mx: 1 }}>
          <a
            className="tabLinks"
            href="https://pga-alpha.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <IosShareIcon />
          </a>
        </IconButton>
        <IconButton size="small" sx={{ mx: 1 }}>
          <a
            className="tabLinks"
            href="https://github.com/JordanVera/golfData"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </IconButton>
      </Box>

      <InteractiveList />
    </>
  );
}
