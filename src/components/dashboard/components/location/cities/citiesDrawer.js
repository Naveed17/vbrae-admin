'use client';
import { Drawer, Box, TextField, Select, MenuItem, Button, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

function CitiesDrawer({ open, onClose, isEdit, data }) {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    state: '',
  });

  useEffect(() => {
    if (isEdit && data) {
      setFormData({
        name: data.name || '',
        country: data.country || '',
        state: data.state || '',
      });
    } else {
      setFormData({
        name: '',
        country: '',
        state: '',
      });
    }
  }, [isEdit, data, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log('Save city:', formData);
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: 550 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          {isEdit ? 'Edit City' : 'Add City'}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
          <TextField
            fullWidth
            name="name"
            placeholder="City Name"
            value={formData.name}
            onChange={handleChange}
            size="normal"
          />

          <Select
            fullWidth
            name="country"
            value={formData.country}
            onChange={handleChange}
            displayEmpty
            size="normal"
            renderValue={(selected) => (
              <Typography
                variant="body2"
                component="span"
                sx={{ fontWeight: 600, color: 'text.secondary' }}
              >
                {selected || 'Select Country'}
              </Typography>
            )}
          >

            <MenuItem value="1">United States</MenuItem>
            <MenuItem value="2">Canada</MenuItem>
            <MenuItem value="3">Mexico</MenuItem>
          </Select>

          <Select
            fullWidth
            name="state"
            value={formData.state}
            onChange={handleChange}
            displayEmpty
            renderValue={(selected) => (
              <Typography
                variant="body2"
                component="span"
                sx={{ fontWeight: 600, color: 'text.secondary' }}
              >
                {selected || 'Select State'}
              </Typography>
            )}
            size="normal"
          >

            <MenuItem value="1">New York</MenuItem>
            <MenuItem value="2">California</MenuItem>
            <MenuItem value="3">Illinois</MenuItem>
          </Select>
        </Box>

        <Box sx={{ borderTop: 1, borderColor: 'divider', display: 'flex', gap: 2, mt: 'auto', pt: 2, }}>
          <Button variant="outlined" fullWidth onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" fullWidth onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

export default CitiesDrawer;
