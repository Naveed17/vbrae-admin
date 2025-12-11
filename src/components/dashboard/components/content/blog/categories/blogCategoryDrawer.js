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

const languages = [
  { id: '1', name: 'English' },
  { id: '3', name: 'German' },
  { id: '4', name: 'French' },
  { id: '5', name: 'Italian' },
  { id: '6', name: 'Spanish' },
];

export default function BlogCategoryDrawer({ open, onClose, isEdit = false, data = null }) {
  const [formData, setFormData] = useState({
    name: '',
    language: '1',
    slug: '',
    description: '',
    keywords: '',
    order: '1',
  });

  useEffect(() => {
    if (open) {
      if (isEdit && data) {
        setFormData({
          name: data.name || '',
          language: data.language || '1',
          slug: data.slug || '',
          description: data.description || '',
          keywords: data.keywords || '',
          order: data.order || '1',
        });
      } else {
        setFormData({
          name: '',
          language: '1',
          slug: '',
          description: '',
          keywords: '',
          order: '1',
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

  const title = isEdit ? 'Edit Category' : 'Add Category';

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
            {/* Language */}
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Language</Typography>
              <Select
                size="normal"
                value={formData.language}
                onChange={(e) => handleInputChange('language', e.target.value)}
                fullWidth
              >
                {languages.map((lang) => (
                  <MenuItem key={lang.id} value={lang.id}>{lang.name}</MenuItem>
                ))}
              </Select>
            </Box>

            {/* Category Name */}
            <TextField
              size="normal"
              placeholder="Category Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              fullWidth
            />

            {/* Slug */}
            <TextField
              size="normal"
              placeholder="Slug (If you leave it empty, it will be generated automatically.)"
              value={formData.slug}
              onChange={(e) => handleInputChange('slug', e.target.value)}
              fullWidth
            />

            {/* Description */}
            <TextField
              size="normal"
              placeholder="Description (Meta Tag)"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              fullWidth
            />

            {/* Keywords */}
            <TextField
              size="normal"
              placeholder="Keywords (Meta Tag)"
              value={formData.keywords}
              onChange={(e) => handleInputChange('keywords', e.target.value)}
              fullWidth
            />

            {/* Order */}
            <TextField
              size="normal"
              placeholder="Order"
              type="number"
              value={formData.order}
              onChange={(e) => handleInputChange('order', e.target.value)}
              inputProps={{ min: '1' }}
              fullWidth
            />
          </Stack>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Stack direction="row" spacing={1.5} justifyContent="flex-end">
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            {isEdit ? 'Update' : 'Add Category'}
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
