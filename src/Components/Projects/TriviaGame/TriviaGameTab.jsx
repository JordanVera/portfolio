import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import TriviaGameList from './TriviaGameList.jsx';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';

import Typography from '@mui/material/Typography';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
}

export default function TriviaGameTab() {
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
          href="https://jordanvera.github.io/triviaGame/"
          target="_blank"
          rel="noreferrer"
        >
          Horror Trivia Game
        </a>
      </Typography>
      <Box sx={{ mx: 2 }}>
        <IconButton size="small" sx={{ mx: 1 }}>
          <a
            className="tabLinks"
            href="https://jordanvera.github.io/triviaGame/"
            target="_blank"
            rel="noreferrer"
          >
            <IosShareIcon />
          </a>
        </IconButton>
        <IconButton size="small" sx={{ mx: 1 }}>
          <a
            className="tabLinks"
            href="https://github.com/JordanVera/triviaGame"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </IconButton>
      </Box>

      <TriviaGameList />
    </>
  );
}
