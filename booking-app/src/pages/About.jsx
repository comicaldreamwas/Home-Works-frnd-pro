
import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4">About Our Booking Platform</Typography>
      <Typography variant="body1" sx={{ marginTop: '1rem' }}>
        Welcome to our booking platform, where you can find the best hotels around the world for your next trip.
      </Typography>
    </Box>
  );
};

export default About;
