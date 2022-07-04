import React from 'react';
import { Box, Rating } from '@mui/material/';
import StarIcon from '@mui/icons-material/Star';

export default function Javascript() {
  const value = 4.5;

  return (
    <>
      <h5>Javascript</h5>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Rating
          name="read-only"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </Box>
    </>
  );
}
