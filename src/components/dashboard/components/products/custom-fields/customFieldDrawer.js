'use client';

import {
  Drawer,
  Box,
  Typography,
  Stack,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  MenuItem,
  Select,
  Button,
  Divider,
  Grid
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const languages = [
  { id: 1, name: 'English' },
  { id: 3, name: 'German' },
  { id: 4, name: 'French' },
  { id: 5, name: 'Italian' },
  { id: 6, name: 'Spanish' }
];

const fieldTypes = [
  { value: 'text', label: 'Text' },
  { value: 'textarea', label: 'Textarea' },
  { value: 'number', label: 'Number' },
  { value: 'checkbox', label: 'Checkbox (Multiple Selection)' },
  { value: 'radio_button', label: 'Radio Button (Single Selection)' },
  { value: 'dropdown', label: 'Dropdown (Single Selection)' },
  { value: 'date', label: 'Date' }
];

export default function CustomFieldDrawer({ open, onClose, isEdit = false, data = null }) {
  const [formData, setFormData] = useState({
    names: {},
    rowWidth: 'half',
    isRequired: false,
    status: '1',
    order: '1',
    fieldType: 'text'
  });

  useEffect(() => {
    if (open) {
      if (isEdit && data) {
        setFormData({
          ...data,
          names: data.names || {}
        });
      } else {
        setFormData({
          names: {},
          rowWidth: 'half',
          isRequired: false,
          status: '1',
          order: '1',
          fieldType: 'text'
        });
      }
    }
  }, [isEdit, data, open]);

  const handleNameChange = (langId, value) => {
    setFormData(prev => ({
      ...prev,
      names: { ...prev.names, [langId]: value }
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    onClose();
  };

  const title = isEdit ? 'Edit Custom Field' : 'Add Custom Field';

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: { xs: '100%', sm: 500 } } }}>
      <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <Button
            size="small"
            onClick={onClose}
            sx={{ minWidth: 'auto', p: 0.5 }}
          >
            <Close />
          </Button>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        {/* Form Content */}
        <Box sx={{ flex: 1, overflowY: 'auto', pr: 1 }}>
          <Stack spacing={2.5}>
            {/* Field Names */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
                Field Names
              </Typography>
              <Stack spacing={1.5}>
                {languages.map((lang) => (
                  <TextField
                    key={lang.id}
                    size="normal"
                    placeholder={lang.name}
                    value={formData.names[lang.id] || ''}
                    onChange={(e) => handleNameChange(lang.id, e.target.value)}
                    required
                    fullWidth

                  />
                ))}
              </Stack>
            </Box>

            <Divider />

            {/* Row Width */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Row Width
              </Typography>
              <FormControl>
                <RadioGroup
                  row
                  value={formData.rowWidth}
                  onChange={(e) => handleInputChange('rowWidth', e.target.value)}
                >
                  <FormControlLabel value="half" control={<Radio size="small" />} label="Half" />
                  <FormControlLabel value="full" control={<Radio size="small" />} label="Full" />
                </RadioGroup>
              </FormControl>
            </Box>

            <Divider />

            {/* Required */}
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Required
              </Typography>
              <Switch
                size="small"
                checked={formData.isRequired}
                onChange={(e) => handleInputChange('isRequired', e.target.checked)}
              />
            </Stack>

            <Divider />

            {/* Status */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Status
              </Typography>
              <FormControl>
                <RadioGroup
                  row
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                >
                  <FormControlLabel value="1" control={<Radio size="small" />} label="Active" />
                  <FormControlLabel value="0" control={<Radio size="small" />} label="Inactive" />
                </RadioGroup>
              </FormControl>
            </Box>

            <Divider />

            {/* Order */}
            <TextField
              size="normal"
              type="number"
              placeholder="Order"
              value={formData.order}
              onChange={(e) => handleInputChange('order', e.target.value)}
              inputProps={{ min: 1, max: 99999 }}
              required
              fullWidth
            />

            {/* Field Type */}
            <FormControl fullWidth size="small">
              <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 600 }}>
                Type
              </Typography>
              <Select
                value={formData.fieldType}
                size='normal'
                onChange={(e) => handleInputChange('fieldType', e.target.value)}
              >
                {fieldTypes.map((type) => (
                  <MenuItem key={type.value} value={type.value}>
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Footer Buttons */}
        <Stack direction="row" spacing={1.5} justifyContent="flex-end">
          <Button
            variant="outlined"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"

            onClick={handleSubmit}
          >
            {isEdit ? 'Update' : 'Save'}
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
