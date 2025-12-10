'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
  TextField,
  Typography
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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

export default function CustomFieldForm({ isEdit = false, initialData = null }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    names: {},
    rowWidth: 'half',
    isRequired: false,
    status: '1',
    order: '1',
    fieldType: 'text'
  });

  const handleNameChange = (langId, value) => {
    setFormData(prev => ({
      ...prev,
      names: { ...prev.names, [langId]: value }
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const title = isEdit ? 'Edit Custom Field' : 'Add Custom Field';
  const buttonText = isEdit ? 'Update' : 'Save and Continue';

  return (
    <Box sx={{ p: 3, maxWidth: 1000, mx: 'auto' }}>
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => router.push('/admin/custom-fields')}
          sx={{ borderRadius: 2 }}
        >
          Custom Fields
        </Button>
      </Stack>

      {/* Form */}
      <Card>
        <CardContent sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {/* Field Names */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                  Field Names
                </Typography>
                <Grid container spacing={2}>
                  {languages.map((lang) => (
                    <Grid item xs={12} key={lang.id}>
                      <TextField
                        fullWidth
                        label={`Field Name (${lang.name})`}
                        placeholder="Field Name"
                        value={formData.names[lang.id] || ''}
                        onChange={(e) => handleNameChange(lang.id, e.target.value)}
                        required
                        inputProps={{ maxLength: 255 }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Divider />

              {/* Row Width */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                  Row Width
                </Typography>
                <FormControl>
                  <RadioGroup
                    row
                    value={formData.rowWidth}
                    onChange={(e) => handleInputChange('rowWidth', e.target.value)}
                  >
                    <FormControlLabel value="half" control={<Radio />} label="Half Width" />
                    <FormControlLabel value="full" control={<Radio />} label="Full Width" />
                  </RadioGroup>
                </FormControl>
              </Box>

              <Divider />

              {/* Required */}
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Required
                  </Typography>
                </Box>
                <Switch
                  checked={formData.isRequired}
                  onChange={(e) => handleInputChange('isRequired', e.target.checked)}
                />
              </Stack>

              <Divider />

              {/* Status */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                  Status
                </Typography>
                <FormControl>
                  <RadioGroup
                    row
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="Active" />
                    <FormControlLabel value="0" control={<Radio />} label="Inactive" />
                  </RadioGroup>
                </FormControl>
              </Box>

              <Divider />

              {/* Order */}
              <TextField
                fullWidth
                type="number"
                label="Order"
                placeholder="Order"
                value={formData.order}
                onChange={(e) => handleInputChange('order', e.target.value)}
                inputProps={{ min: 1, max: 99999 }}
                required
              />

              {/* Field Type */}
              <FormControl fullWidth>
                <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                  Type
                </Typography>
                <Select
                  value={formData.fieldType}
                  onChange={(e) => handleInputChange('fieldType', e.target.value)}
                  required
                >
                  {fieldTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Submit Button */}
              <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ pt: 2 }}>
                <Button
                  variant="outlined"
                  onClick={() => router.push('/admin/custom-fields')}
                  sx={{ borderRadius: 2 }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ borderRadius: 2 }}
                >
                  {buttonText}
                </Button>
              </Stack>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
