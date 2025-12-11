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
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const continents = [
  { id: 'EU', name: 'Europe' },
  { id: 'AS', name: 'Asia' },
  { id: 'AF', name: 'Africa' },
  { id: 'NA', name: 'North America' },
  { id: 'SA', name: 'South America' },
  { id: 'OC', name: 'Oceania' },
  { id: 'AN', name: 'Antarctica' },
];

export default function CountriesDrawer({ open, onClose, isEdit = false, data = null }) {
  const [formData, setFormData] = useState({
    name: '',
    continent_code: 'EU',
    status: '1',
  });

  useEffect(() => {
    if (open) {
      if (isEdit && data) {
        setFormData({
          name: data.name || '',
          continent_code: data.continent_code || 'EU',
          status: data.status === 'Active' ? '1' : '0',
        });
      } else {
        setFormData({
          name: '',
          continent_code: 'EU',
          status: '1',
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

  const title = isEdit ? 'Edit Country' : 'Add Country';

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
            {/* Country Name */}
            <TextField
              size="normal"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              fullWidth
            />

            {/* Continent */}
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Continent</Typography>
              <Select
                size="normal"
                value={formData.continent_code}
                onChange={(e) => handleInputChange('continent_code', e.target.value)}
                fullWidth
              >
                {continents.map((continent) => (
                  <MenuItem key={continent.id} value={continent.id}>{continent.name}</MenuItem>
                ))}
              </Select>
            </Box>

            {/* Status */}
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 1 }}>Status</Typography>
              <RadioGroup
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
              >
                <FormControlLabel value="1" control={<Radio />} label="Active" />
                <FormControlLabel value="0" control={<Radio />} label="Inactive" />
              </RadioGroup>
            </Box>
          </Stack>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Stack direction="row" spacing={1.5} justifyContent="flex-end">
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            {isEdit ? 'Update' : 'Add Country'}
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
