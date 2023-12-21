import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Circle } from "@mui/icons-material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, mb: 4, p:0 }}>
      <AppBar sx={{mb:4, p:0}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Circle color="red" sx={{mr: 1}}/> 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Juan Pérez
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sales Report
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
    </Box>
  );
}
