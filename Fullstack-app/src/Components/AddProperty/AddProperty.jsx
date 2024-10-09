import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const AddProperty = ({ addProperty }) => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProperty(formData);
    setFormData({ image: '', title: '', description: '', price: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ padding: '20px' }}>
      <Typography variant="h5">Add Property</Typography>
      <input
        type="file"
        name="image"
        onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
        required
      />
      <TextField
        name="title"
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <TextField
        name="description"
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.description}
        onChange={handleChange}
        required
        multiline
        rows={4}
      />
      <TextField
        name="price"
        label="Price"
        variant="outlined"
        type="number"
        fullWidth
        margin="normal"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" sx={{ backgroundColor: '#615EFC', color: 'white' }}>
        Add Property
      </Button>
    </Box>
  );
};

export default AddProperty;
