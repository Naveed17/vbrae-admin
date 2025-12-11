'use client';

import {
  Drawer,
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Divider,
  Select,
  MenuItem,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const countries = [
  { id: '1', name: 'Afghanistan' },
  { id: '2', name: 'Albania' },
  { id: '3', name: 'Algeria' },
  { id: '4', name: 'American Samoa' },
  { id: '5', name: 'Andorra' },
];

export default function StatesDrawer({ open, onClose, isEdit = false, data = null }) {
  const [formData, setFormData] = useState({
    name: '',
    country_id: '',
  });

  useEffect(() => {
    if (open) {
      if (isEdit && data) {
        setFormData({
          name: data.name || '',
          country_id: data.country_id || '',
        });
      } else {
        setFormData({
          name: '',
          country_id: '',
        });
      }
    }
  }, [isEdit, data, open]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    onClose();
  };

  const title = isEdit ? 'Edit State' : 'Add State';

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: { xs: '100%', sm: 550 } } }}>
      <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <Button size="small" onClick={onClose} sx={{ minWidth: 'auto', p: 0.5 }}>
            <Close />
          </Button>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ flex: 1, overflowY: 'auto', pr: 1 }}>
          <Stack spacing={2.5}>
            {/* State Name */}
            <TextField
              size="normal"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              fullWidth
            />

            {/* Country */}
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Country</Typography>
              <Select
                size="normal"
                value={formData.country_id}
                onChange={(e) => handleInputChange('country_id', e.target.value)}
                displayEmpty
                fullWidth
              >
                <MenuItem value="">Select Country</MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>{country.name}</MenuItem>
                ))}
              </Select>
            </Box>
          </Stack>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Stack direction="row" spacing={1.5} justifyContent="flex-end">
          <Button variant="outlined" size="small" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" size="small" onClick={handleSubmit}>
            {isEdit ? 'Update' : 'Add State'}
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
