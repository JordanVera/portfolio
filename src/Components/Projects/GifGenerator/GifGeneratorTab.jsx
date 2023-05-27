import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import GifGeneratorList from './GifGeneratorList.jsx';
import { Box, Stack } from '@mui/material';
import { IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Javascript from '../../SkillsChips/Javascript.jsx';
import SCSS from '../../SkillsChips/SCSS.jsx';

export default function GifGeneratorTab() {
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
          href="https://jordanvera.github.io/gifGenerator/"
          target="_blank"
          rel="noreferrer"
        >
          Gif Generator
        </a>
      </Typography>
      <Box sx={{ mx: 2 }}>
        <IconButton size="small" sx={{ mx: 1 }}>
          <a
            className="tabLinks"
            href="https://jordanvera.github.io/gifGenerator/"
            target="_blank"
            rel="noreferrer"
          >
            <IosShareIcon />
          </a>
        </IconButton>
        <IconButton size="small" sx={{ mx: 1 }}>
          <a
            className="tabLinks"
            href="https://github.com/JordanVera/gifGenerator"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </IconButton>
      </Box>
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
      <Divider variant="middle" sx={{ mt: 1 }} />

      <GifGeneratorList />

      <img
        src="/media/projects/gifGen.jpg"
        alt="example"
        className="projectImg"
      />
    </>
  );
}
