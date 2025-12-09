'use client';
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Grid,
  Card,
  CardContent,
  Divider,
  Stack,
  Switch
} from '@mui/material';
import { List, CloudUpload } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TextEditor from '@/components/shared/textEditor';
import FileUpload from '@/components/shared/uploads';

const languages = [
  { id: 1, name: 'English' },
  { id: 3, name: 'German' },
  { id: 4, name: 'French' },
  { id: 5, name: 'Italian' },
  { id: 6, name: 'Spanish' }
];

const parentCategories = [
  { value: 0, label: 'None' },
  { value: 135, label: 'PSN' },
  { value: 134, label: 'XBOX' },
  { value: 139, label: 'GIFT CARDS' },
  { value: 146, label: 'NINTENDO' },
  { value: 158, label: 'PC GAMING' },
  { value: 168, label: 'SOFTWARE' },
  { value: 175, label: 'VR GAMES' },
  { value: 169, label: 'WEEKLY DEALS' }
];

function CategoryForm({ isEdit = false, initialData = null, categoryId = null }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    names: {},
    slug: '',
    titleMeta: '',
    descriptionMeta: '',
    categoryPageText: '',
    keywords: '',
    order: '',
    parentId: 0,
    visibility: '1',
    showOnMainMenu: '1',
    showImageOnMainMenu: '0'
  });

  useEffect(() => {
    if (isEdit && initialData) {
      setFormData(initialData);
    }
  }, [isEdit, initialData]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNameChange = (langId, value) => {
    setFormData(prev => ({
      ...prev,
      names: { ...prev.names, [langId]: value }
    }));
  };

  const title = isEdit ? 'Edit Category' : 'Add Category';
  const buttonText = isEdit ? 'Update Category' : 'Add Category';

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>{title}</Typography>
        <Button
          variant="outlined"
          startIcon={<List />}
          onClick={() => router.push('/admin/categories')}
          sx={{ borderRadius: 2 }}
        >
          Categories
        </Button>
      </Stack>

      {/* Form */}
      <Card>
        <CardContent sx={{ p: 4 }}>
          <Stack spacing={3}>
            {/* Category Names */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Category Names</Typography>
              <Grid container spacing={2}>
                {languages.map((lang) => (
                  <Grid key={lang.id} size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      placeholder={`Category Name (${lang.name})`}
                      value={formData.names[lang.id] || ''}
                      onChange={(e) => handleNameChange(lang.id, e.target.value)}
                      required
                      variant="outlined"
                      size='normal'
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Divider />

            {/* Basic Info */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Basic Information</Typography>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  placeholder="Slug"
                  helperText="If you leave it empty, it will be generated automatically."
                  value={formData.slug}
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  size='normal'
                />
                <TextField
                  fullWidth
                  type="number"
                  placeholder="Order"
                  value={formData.order}
                  onChange={(e) => handleInputChange('order', e.target.value)}
                  inputProps={{ min: 1, max: 99999 }}
                  required
                  size='normal'
                />
                <FormControl fullWidth>
                  <Select
                    value={formData.parentId}
                    onChange={(e) => handleInputChange('parentId', e.target.value)}
                    required
                    size='normal'
                    displayEmpty

                  >
                    {parentCategories.map((cat) => (
                      <MenuItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Box>

            <Divider />

            {/* SEO Meta Fields */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>SEO Meta Tags</Typography>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  placeholder="Title (Meta Tag)"
                  value={formData.titleMeta}
                  onChange={(e) => handleInputChange('titleMeta', e.target.value)}
                  size='normal'
                />
                <TextField
                  fullWidth
                  placeholder="Description (Meta Tag)"
                  value={formData.descriptionMeta}
                  onChange={(e) => handleInputChange('descriptionMeta', e.target.value)}
                  size='normal'
                />
                <TextField
                  fullWidth
                  placeholder="Keywords (Meta Tag)"
                  value={formData.keywords}
                  onChange={(e) => handleInputChange('keywords', e.target.value)}
                  size='normal'
                />
              </Stack>
            </Box>

            <Divider />

            {/* Category Page Text */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Category Page Content</Typography>
              <TextEditor
                value={formData.categoryPageText}
                onChange={(value) => handleInputChange('categoryPageText', value)}
              />
            </Box>

            <Divider />

            {/* Settings */}
            <Box>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 500 }}>Display Settings</Typography>
              <Stack spacing={3}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>Visibility</Typography>
                    <Typography variant="body2" color="text.secondary">Show this category on the website</Typography>
                  </Box>
                  <Switch
                    checked={formData.visibility === '1'}
                    onChange={(e) => handleInputChange('visibility', e.target.checked ? '1' : '0')}
                  />
                </Stack>

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>Show on Main Menu</Typography>
                    <Typography variant="body2" color="text.secondary">Display in the main navigation menu</Typography>
                  </Box>
                  <Switch
                    checked={formData.showOnMainMenu === '1'}
                    onChange={(e) => handleInputChange('showOnMainMenu', e.target.checked ? '1' : '0')}
                  />
                </Stack>

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>Show Image on Main Menu</Typography>
                    <Typography variant="body2" color="text.secondary">Display category image in navigation</Typography>
                  </Box>
                  <Switch
                    checked={formData.showImageOnMainMenu === '1'}
                    onChange={(e) => handleInputChange('showImageOnMainMenu', e.target.checked ? '1' : '0')}
                  />
                </Stack>
              </Stack>
            </Box>

            <Divider />

            {/* Image Upload */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Category Image</Typography>
              <FileUpload />
            </Box>

            {/* Submit Button */}
            <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ pt: 2 }}>
              <Button
                variant="outlined"
                onClick={() => router.push('/admin/categories')}
                sx={{ borderRadius: 2 }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ borderRadius: 2, px: 4 }}
              >
                {buttonText}
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CategoryForm;