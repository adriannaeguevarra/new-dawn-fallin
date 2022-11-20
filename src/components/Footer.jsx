import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {'Copyright © '}
        {'Connect4Vets '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        flexDirection: "row",
        position: "fixed",
        left: "0",
        bottom: "0",
        right: "0",

      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
      </Container>
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: "#CCCC99",
          color: "white"
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Connect4Vets - It's Time To Bring 'em Home
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}