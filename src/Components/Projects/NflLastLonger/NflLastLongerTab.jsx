import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import NflLastLongerList from './NflLastLongerList.jsx';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Nodejs from '../../SkillsChips/Nodejs.jsx';

import Mongodb from '../../SkillsChips/Mongodb.jsx';
import Javascript from '../../SkillsChips/Javascript.jsx';
import Stack from '@mui/material/Stack';
import Express from '../../SkillsChips/Express.jsx';

export default function NflLastLongerTab() {
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
          href="https://fantasy--football.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          NFL Last Longer
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
            href="https://fantasy--football.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <IosShareIcon />
          </a>
        </IconButton>
        <IconButton size="small" sx={{ mx: 1 }}>
          <a
            className="tabLinks"
            href="https://github.com/JordanVera/fantasy-football"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </IconButton>
      </Box>
      <Divider variant="middle" sx={{ mt: 1 }} />

      <NflLastLongerList />

      <Stack
        className="projectPills"
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        mb={1}
        px={2}
      >
        <Javascript />
        <Nodejs />
        <Express />
        <Mongodb />
      </Stack>
    </>
  );
}
