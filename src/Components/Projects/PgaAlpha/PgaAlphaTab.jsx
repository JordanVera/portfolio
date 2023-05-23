import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import InteractiveList from './PgaAlphaList';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Nodejs from '../../SkillsChips/Nodejs';
import ReactJs from '../../SkillsChips/ReactJs';
import Mongodb from '../../SkillsChips/Mongodb';
import Express from '../../SkillsChips/Express';

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
        Featured Project - Project hosted on a free heroku server, please give
        the app 20-30 seconds to load.
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
      <Divider variant="middle" sx={{ mt: 1 }} />

      <InteractiveList />

      <Stack
        className="projectPills"
        spacing={2}
        mb={1}
        px={2}
        direction={{ xs: 'column', md: 'row' }}
      >
        <Nodejs />
        <Express />
        <ReactJs />
        <Mongodb />
      </Stack>
    </>
  );
}
