import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import InteractiveList from './CountriesList';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import ReactJs from '../../SkillsChips/ReactJs';
import Javascript from '../../SkillsChips/Javascript';

export default function CountriesTab() {
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
          href="https://jordanvera.github.io/restCountries/"
          target="_blank"
          rel="noreferrer"
        >
          Rest Countries
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
            href="https://jordanvera.github.io/restCountries/"
            target="_blank"
            rel="noreferrer"
          >
            <IosShareIcon />
          </a>
        </IconButton>
        <IconButton size="small" sx={{ mx: 1 }}>
          <a
            className="tabLinks"
            href="https://github.com/JordanVera/restCountries/"
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
        <Javascript />
      </Stack>
      <Divider variant="middle" sx={{ mt: 1 }} />

      <InteractiveList />

      <img
        src="/media/projects/countries.png"
        alt="example"
        className="projectImg"
      />
    </>
  );
}
