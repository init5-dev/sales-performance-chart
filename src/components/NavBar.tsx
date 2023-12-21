// Import React and necessary Material-UI components/icons
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Circle } from "@mui/icons-material";

// Define and export the NavBar component
export default function NavBar() {
  return (
    // Outer container with flex properties, margin-bottom, and padding
    <Box sx={{ flexGrow: 1, mb: 4, p: 0 }}>
      {/* AppBar component with additional margin-bottom and padding */}
      <AppBar sx={{ mb: 4, p: 0 }}>
        {/* Toolbar component for organizing content inside the AppBar */}
        <Toolbar>
          {/* IconButton for displaying a menu icon with custom styling */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* MenuIcon component from Material-UI icons */}
            <MenuIcon />
          </IconButton>
          {/* Circle icon with red color and additional margin-right */}
          <Circle color="red" sx={{ mr: 1 }} />
          {/* Typography component for displaying text with variant and flexGrow */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Juan Pérez
          </Typography>
          {/* Additional Typography component for displaying another text with variant and flexGrow */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sales Report
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Additional line breaks */}
      <br />
      <br />
      <br />
    </Box>
  );
}
