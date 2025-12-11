'use client';

import {
  Drawer,
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
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

const locations = [
  { id: 'top_menu', name: 'Top Menu' },
  { id: 'quick_links', name: 'Quick Links' },
  { id: 'information', name: 'Information' },
];

export default function PagesDrawer({ open, onClose, isEdit = false, data = null }) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    keywords: '',
    language: '1',
    order: 1,
    location: 'top_menu',
    visibility: '1',
    show_title: '1',
    content: '',
  });

  useEffect(() => {
    if (open) {
      if (isEdit && data) {
        setFormData({
          title: data.title || '',
          slug: data.slug || '',
          description: data.description || '',
          keywords: data.keywords || '',
          language: data.language || '1',
          order: data.order || 1,
          location: data.location || 'top_menu',
          visibility: data.visibility || '1',
          show_title: data.show_title || '1',
          content: data.content || '',
        });
      } else {
        setFormData({
          title: '',
          slug: '',
          description: '',
          keywords: '',
          language: '1',
          order: 1,
          location: 'top_menu',
          visibility: '1',
          show_title: '1',
          content: '',
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

  const title = isEdit ? 'Edit Page' : 'Add Page';

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
            {/* Title */}
            <TextField
              size="normal"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              required
              fullWidth
            />

            {/* Slug */}
            <TextField
              size="normal"
              placeholder="Slug (Auto-generated if empty)"
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

            {/* Order */}
            <TextField
              size="normal"
              type="number"
              placeholder="Order"
              value={formData.order}
              onChange={(e) => handleInputChange('order', parseInt(e.target.value))}
              inputProps={{ min: 1 }}
              fullWidth
            />

            {/* Location */}
            <FormControl fullWidth>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Location
              </Typography>
              <RadioGroup
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              >
                {locations.map((loc) => (
                  <FormControlLabel
                    key={loc.id}
                    value={loc.id}
                    control={<Radio />}
                    label={loc.name}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            {/* Visibility */}
            <FormControl fullWidth>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Visibility
              </Typography>
              <RadioGroup
                value={formData.visibility}
                onChange={(e) => handleInputChange('visibility', e.target.value)}
              >
                <FormControlLabel value="1" control={<Radio />} label="Show" />
                <FormControlLabel value="0" control={<Radio />} label="Hide" />
              </RadioGroup>
            </FormControl>

            {/* Show Title */}
            <FormControl fullWidth>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Show Title
              </Typography>
              <RadioGroup
                value={formData.show_title}
                onChange={(e) => handleInputChange('show_title', e.target.value)}
              >
                <FormControlLabel value="1" control={<Radio />} label="Yes" />
                <FormControlLabel value="0" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            {/* Content */}
            <TextField
              placeholder="Content"
              value={formData.content}
              onChange={(e) => handleInputChange('content', e.target.value)}
              multiline
              rows={6}
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
            {isEdit ? 'Update' : 'Add Page'}
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
