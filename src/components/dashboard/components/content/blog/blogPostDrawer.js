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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { Close, ExpandMore, Image as ImageIcon } from '@mui/icons-material';
import { useState, useEffect, useRef } from 'react';
import TextEditor from '@/components/shared/textEditor';
import FileUpload from '@/components/shared/uploads';

const languages = [
  { id: '1', code: 'en', name: 'English' },
  { id: '3', code: 'de', name: 'German' },
  { id: '4', code: 'fr', name: 'French' },
  { id: '5', code: 'it', name: 'Italian' },
  { id: '6', code: 'es', name: 'Spanish' },
];

const categories = [
  { id: '7', name: 'Gaming' },
  { id: '17', name: 'Blogs' },
  { id: '8', name: 'Investment' },
  { id: '9', name: 'Software' },
  { id: '13', name: 'News' },
];

export default function BlogPostDrawer({ open, onClose, isEdit = false, data = null }) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    summary: '',
    keywords: '',
    language: '1',
    category: '1',
    content: '',
    image: '',
    tags: [],
  });

  const [translations, setTranslations] = useState({
    de: { title: '', summary: '', keywords: '', content: '', tags: [] },
    fr: { title: '', summary: '', keywords: '', content: '', tags: [] },
    it: { title: '', summary: '', keywords: '', content: '', tags: [] },
    es: { title: '', summary: '', keywords: '', content: '', tags: [] },
  });

  const [selectedLanguages, setSelectedLanguages] = useState({
    de: false,
    fr: false,
    it: false,
    es: false,
  });

  const contentImageInputRef = useRef(null);

  useEffect(() => {
    if (open) {
      if (isEdit && data) {
        setFormData({
          title: data.title || '',
          slug: data.slug || '',
          summary: data.summary || '',
          keywords: data.keywords || '',
          language: data.language || '1',
          category: data.category || '1',
          content: data.content || '',
          image: data.image || '',
          tags: data.tags || [],
        });
      } else {
        setFormData({
          title: '',
          slug: '',
          summary: '',
          keywords: '',
          language: '1',
          category: '1',
          content: '',
          image: '',
          tags: [],
        });
      }
    }
  }, [isEdit, data, open]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTranslationChange = (langCode, field, value) => {
    setTranslations(prev => ({
      ...prev,
      [langCode]: { ...prev[langCode], [field]: value }
    }));
  };

  const handleLanguageToggle = (langCode) => {
    setSelectedLanguages(prev => ({
      ...prev,
      [langCode]: !prev[langCode]
    }));
  };

  const handleTranslateAll = async () => {
    console.log('Translate all triggered');
    // API call to translate all selected languages
  };

  const handleContentImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result;
        console.log('Image uploaded:', imageUrl);
        // Insert image into editor or handle as needed
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const submitData = {
      ...formData,
      translations: Object.keys(translations).reduce((acc, lang) => {
        if (selectedLanguages[lang]) {
          acc[lang] = translations[lang];
        }
        return acc;
      }, {}),
    };
    console.log('Form submitted:', submitData);
    onClose();
  };

  const title = isEdit ? 'Edit Post' : 'Add Post';

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: { xs: '100%', md: 750 } } }}>
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
              helperText="If you leave it empty, it will be generated automatically."
            />

            {/* Summary & Description */}
            <TextField

              placeholder="Summary & Description (Meta Tag)"
              value={formData.summary}
              onChange={(e) => handleInputChange('summary', e.target.value)}
              multiline
              rows={3}
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

            {/* Category */}
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Category</Typography>
              <Select
                size="normal"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                fullWidth
              >
                {categories.map((cat) => (
                  <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                ))}
              </Select>
            </Box>

            {/* Image */}
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 1 }}>Image</Typography>
              <FileUpload
                accept=".png,.jpg,.jpeg"
                maxSize={1024 * 1024}
                multiple={false}
                onFileSelect={(file) => handleInputChange('image', file)}
                onFileRemove={() => handleInputChange('image', '')}
                previews={formData.image ? [formData.image] : []}
                fileNames={formData.image ? ['image'] : []}
                placeholder="Click to upload or drag & drop"
                description="PNG/JPG format, max 1MB"
              />
            </Box>

            {/* Content */}
            <Box>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>Content</Typography>
                <Box>
                  <input
                    ref={contentImageInputRef}
                    type="file"
                    accept=".png,.jpg,.jpeg"
                    style={{ display: 'none' }}
                    onChange={handleContentImageUpload}
                  />
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<ImageIcon />}
                    onClick={() => contentImageInputRef.current?.click()}
                  >
                    Add Image
                  </Button>
                </Box>
              </Stack>
              <TextEditor initialValue={formData.content} />
            </Box>

            {/* Language Selection for Translation */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>I need it in</Typography>
              <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
                {languages.slice(1).map((lang) => (
                  <FormControlLabel
                    key={lang.code}
                    control={
                      <Checkbox
                        checked={selectedLanguages[lang.code]}
                        onChange={() => handleLanguageToggle(lang.code)}
                      />
                    }
                    label={lang.name}
                  />
                ))}
              </Stack>
            </Box>

            {/* Translate All Button */}
            {Object.values(selectedLanguages).some(v => v) && (
              <Button
                variant="contained"
                color="success"
                onClick={handleTranslateAll}
                fullWidth
                sx={{ mt: 1 }}
              >
                Translate All
              </Button>
            )}

            {/* Translation Sections */}
            <Stack>
              {languages.slice(1).map((lang) => (
                selectedLanguages[lang.code] && (
                  <Accordion key={lang.code} defaultExpanded={false}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>Details {lang.name} (Optional)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack spacing={2}>
                        <TextField
                          size="normal"
                          placeholder="Title"
                          value={translations[lang.code].title}
                          onChange={(e) => handleTranslationChange(lang.code, 'title', e.target.value)}
                          fullWidth
                        />
                        <TextField

                          placeholder="Summary & Description (Meta Tag)"
                          value={translations[lang.code].summary}
                          onChange={(e) => handleTranslationChange(lang.code, 'summary', e.target.value)}
                          multiline
                          rows={3}
                          fullWidth
                        />
                        <TextField
                          size="normal"
                          placeholder="Keywords (Meta Tag)"
                          value={translations[lang.code].keywords}
                          onChange={(e) => handleTranslationChange(lang.code, 'keywords', e.target.value)}
                          fullWidth
                        />
                        <Box>
                          <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 1 }}>Content</Typography>
                          <TextEditor initialValue={translations[lang.code].content} />
                        </Box>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                )
              ))}
            </Stack>
          </Stack>
        </Box>

        <Divider />

        <Stack mt={2.5} direction="row" spacing={1.5} justifyContent="flex-end">
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            {isEdit ? 'Update' : 'Add Post'}
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
