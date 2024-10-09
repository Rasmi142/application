import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Sidebar = ({page}) => {
  return (
    <Box sx={{ width: 200, height: '100vh', backgroundColor: '#1F2937', color: 'white', padding: '20px' }}>
      <Typography variant="h5">Admin Panel</Typography>
      <ul>
        <li>
          <Link to="/adminpanel" style={{ color: 'white', textDecoration: 'none' }}>Add Property</Link>
        </li>
        <li>
          <Link to="/adminpanel/listing" style={{ color: 'white', textDecoration: 'none' }}>Listing Page</Link>
        </li>
      </ul>
    </Box>
  );
};

export default Sidebar;
