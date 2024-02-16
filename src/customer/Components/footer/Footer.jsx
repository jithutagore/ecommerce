import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';

const Footer = () => {
  const [isPageContentEnough, setIsPageContentEnough] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isContentEnough = window.innerHeight >= document.body.scrollHeight;
      setIsPageContentEnough(isContentEnough);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Grid
      className='bg-black text-white mt-10 text-center'
      container
      sx={{
        position: isPageContentEnough ? 'fixed' : 'relative',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'black',
        color: 'white',
        py: 3
      }}
    >
      <Grid className='pt-5' item xs={12}>
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 Flizon. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
