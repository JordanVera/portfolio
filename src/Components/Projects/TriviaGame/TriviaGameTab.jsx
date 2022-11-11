import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import TriviaGameList from './TriviaGameList.jsx';
import { Box, Stack } from '@mui/material';
import { IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Javascript from '../../SkillsChips/Javascript.jsx';
import SCSS from '../../SkillsChips/SCSS.jsx';

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
      <Divider variant="middle" sx={{ mt: 1 }} />

      <TriviaGameList />

      <Stack
        className="projectPills"
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        mb={1}
        px={2}
      >
        <Javascript />
        <SCSS />
      </Stack>
    </>
  );
}
