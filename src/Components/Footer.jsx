import React from 'react';
import { Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
    <div id="footer">
      <Typography variant="body2" align="center">
        Copyright <CopyrightIcon sx={{ fontSize: '0.875rem' }} /> 2022 Jordan
        Vera Web Development
      </Typography>
    </div>
  );
}
