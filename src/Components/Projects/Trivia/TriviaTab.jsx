import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import InteractiveList from './TriviaList';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import SCSS from '../../SkillsChips/SCSS';
import ReactJs from '../../SkillsChips/ReactJs';

export default function TriviaTab() {
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
          href="https://jordanvera.github.io/trivia/"
          target="_blank"
          rel="noreferrer"
        >
          Trivia
        </a>
      </Typography>
      <Typography
        sx={{ fontSize: '15px', mx: 3, mb: 2 }}
        gutterBottom
        variant="h5"
        component="div"
      >
        Featured Project - Project hosted on github pages.
      </Typography>

      <Box sx={{ mx: 2 }}>
        <IconButton size="small" sx={{ mx: 1 }}>
          <a
            className="tabLinks"
            href="https://jordanvera.github.io/trivia/"
            target="_blank"
            rel="noreferrer"
          >
            <IosShareIcon />
          </a>
        </IconButton>
        <IconButton size="small" sx={{ mx: 1 }}>
          <a
            className="tabLinks"
            href="https://github.com/JordanVera/trivia"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </IconButton>
      </Box>
      <Stack
        className="projectPills"
        spacing={2}
        mb={1}
        px={2}
        direction={{ xs: 'column', md: 'row' }}
      >
        <ReactJs />
        <SCSS />
      </Stack>
      <Divider variant="middle" sx={{ mt: 1 }} />

      <InteractiveList />

      <img
        src="/media/projects/trivia.jpg"
        alt="example"
        className="projectImg"
      />
    </>
  );
}
