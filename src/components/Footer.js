import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="30px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px" flexDirection={'row'} justifyContent={'center'}>
      <img src={Logo} alt="logo" style={{ width: '70px', height: '41px' }} />
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Work hard and improve everyday</Typography>
    </Stack>
  </Box>
);

export default Footer;