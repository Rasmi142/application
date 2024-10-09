import React from 'react';
import propertiesData from '../../Data/cardData.json';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const ListingPage = ({ updateProperty, deleteProperty }) => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5">Listing Page</Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Name</TableCell>
              <TableCell sx={{ color: 'white' }}>Price</TableCell>
              <TableCell sx={{ color: 'white' }}>Rating</TableCell>
              <TableCell sx={{ color: 'white' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {propertiesData.map((property, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: 'white' }}>{property.title}</TableCell>
                <TableCell sx={{ color: 'white' }}>{property.price}</TableCell>
                <TableCell sx={{ color: 'white' }}>{property.rating || 'N/A'}</TableCell>
                <TableCell>
                  <Button onClick={() => updateProperty(index)} sx={{ color: 'blue' }}>🖉</Button>
                  <Button onClick={() => deleteProperty(index)} sx={{ color: 'red' }}>🗑️</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListingPage;
