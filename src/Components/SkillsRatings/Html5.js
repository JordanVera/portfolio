import React from 'react';
import { Box, Rating } from '@mui/material/';
import StarIcon from '@mui/icons-material/Star';

export default function Html5() {
  const value = 5;

  return (
    <>
      <h5>HTML5</h5>
      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
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
