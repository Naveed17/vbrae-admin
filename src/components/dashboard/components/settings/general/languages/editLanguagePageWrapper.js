'use client';
import { Card, CardContent, CardHeader, Container, Button, Box, TextField, Select, MenuItem, Typography, FormControlLabel, Radio, RadioGroup, Paper } from '@mui/material';
import { CloudUpload as CloudUploadIcon, Save as SaveIcon, Cancel as CancelIcon } from '@mui/icons-material';
import React, { useState } from 'react';

const textEditorLanguages = [
  { value: 'ar', label: 'Arabic' },
  { value: 'hy', label: 'Armenian' },
  { value: 'az', label: 'Azerbaijani' },
  { value: 'eu', label: 'Basque' },
  { value: 'be', label: 'Belarusian' },
  { value: 'bn_BD', label: 'Bengali (Bangladesh)' },
  { value: 'bs', label: 'Bosnian' },
  { value: 'bg_BG', label: 'Bulgarian' },
  { value: 'ca', label: 'Catalan' },
  { value: 'zh_CN', label: 'Chinese (China)' },
  { value: 'zh_TW', label: 'Chinese (Taiwan)' },
  { value: 'hr', label: 'Croatian' },
  { value: 'cs', label: 'Czech' },
  { value: 'da', label: 'Danish' },
  { value: 'dv', label: 'Divehi' },
  { value: 'nl', label: 'Dutch' },
  { value: 'en', label: 'English' },
  { value: 'et', label: 'Estonian' },
  { value: 'fo', label: 'Faroese' },
  { value: 'fi', label: 'Finnish' },
  { value: 'fr_FR', label: 'French' },
  { value: 'gd', label: 'Gaelic, Scottish' },
  { value: 'gl', label: 'Galician' },
  { value: 'ka_GE', label: 'Georgian' },
  { value: 'de', label: 'German' },
  { value: 'el', label: 'Greek' },
  { value: 'he', label: 'Hebrew' },
  { value: 'hi_IN', label: 'Hindi' },
  { value: 'hu_HU', label: 'Hungarian' },
  { value: 'is_IS', label: 'Icelandic' },
  { value: 'id', label: 'Indonesian' },
  { value: 'it', label: 'Italian' },
  { value: 'ja', label: 'Japanese' },
  { value: 'kab', label: 'Kabyle' },
  { value: 'kk', label: 'Kazakh' },
  { value: 'km_KH', label: 'Khmer' },
  { value: 'ko_KR', label: 'Korean' },
  { value: 'ku', label: 'Kurdish' },
  { value: 'lv', label: 'Latvian' },
  { value: 'lt', label: 'Lithuanian' },
  { value: 'lb', label: 'Luxembourgish' },
  { value: 'ml', label: 'Malayalam' },
  { value: 'mn', label: 'Mongolian' },
  { value: 'nb_NO', label: 'Norwegian Bokmål (Norway)' },
  { value: 'fa', label: 'Persian' },
  { value: 'pl', label: 'Polish' },
  { value: 'pt_BR', label: 'Portuguese (Brazil)' },
  { value: 'pt_PT', label: 'Portuguese (Portugal)' },
  { value: 'ro', label: 'Romanian' },
  { value: 'ru', label: 'Russian' },
  { value: 'sr', label: 'Serbian' },
  { value: 'si_LK', label: 'Sinhala (Sri Lanka)' },
  { value: 'sk', label: 'Slovak' },
  { value: 'sl_SI', label: 'Slovenian (Slovenia)' },
  { value: 'es', label: 'Spanish' },
  { value: 'es_MX', label: 'Spanish (Mexico)' },
  { value: 'sv_SE', label: 'Swedish (Sweden)' },
  { value: 'tg', label: 'Tajik' },
  { value: 'ta', label: 'Tamil' },
  { value: 'tt', label: 'Tatar' },
  { value: 'th_TH', label: 'Thai' },
  { value: 'tr', label: 'Turkish' },
  { value: 'ug', label: 'Uighur' },
  { value: 'uk', label: 'Ukrainian' },
  { value: 'vi', label: 'Vietnamese' },
  { value: 'cy', label: 'Welsh' },
];

function EditLanguagePageWrapper({ language }) {
  const [formData, setFormData] = useState({
    id: 6,
    name: 'Spanish',
    short_form: 'es',
    language_code: 'es-ES',
    language_order: 5,
    text_direction: 'ltr',
    text_editor_lang: 'es',
    status: 1,
  });

  const [flagFile, setFlagFile] = useState(null);
  const [flagPreview, setFlagPreview] = useState('https://vbrae.com/uploads/blocks/flag_62724c1d38e8a7-21958462-30296128.jpg');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'language_order' || name === 'status' ? parseInt(value) : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFlagFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFlagPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log('Save language:', formData, 'Flag file:', flagFile);
  };

  const handleCancel = () => {
    console.log('Cancel edit');
  };

  return (
    <Container maxWidth="md">
      <Card>
        <CardHeader title="Update Language" />
        <CardContent>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              size="normal"
              placeholder="Language Name (Ex: English)"
            />

            <TextField
              name="short_form"
              value={formData.short_form}
              onChange={handleInputChange}
              fullWidth
              size="normal"
              placeholder="Short Form (Ex: en)"
            />

            <TextField
              name="language_code"
              value={formData.language_code}
              onChange={handleInputChange}
              fullWidth
              size="normal"
              placeholder="Language Code (Ex: en_us)"
            />

            <TextField
              name="language_order"
              type="number"
              value={formData.language_order}
              onChange={handleInputChange}
              fullWidth
              size="normal"
              placeholder="Order"
              inputProps={{ min: 1 }}
            />
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>Text Direction</Typography>
            <RadioGroup
              row
              name="text_direction"
              value={formData.text_direction}
              onChange={handleInputChange}
            >
              <FormControlLabel value="ltr" control={<Radio />} label="Left to Right (LTR)" />
              <FormControlLabel value="rtl" control={<Radio />} label="Right to Left (RTL)" />
            </RadioGroup>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>Text Editor Language</Typography>
            <Select
              name="text_editor_lang"
              value={formData.text_editor_lang}
              onChange={handleInputChange}
              fullWidth
              size="normal"
            >
              {textEditorLanguages.map(lang => (
                <MenuItem key={lang.value} value={lang.value}>{lang.label}</MenuItem>
              ))}
            </Select>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>Flag</Typography>
            <Paper sx={{ p: 2, mb: 2, textAlign: 'center' }}>
              <Box
                component="img"
                src={flagPreview}
                alt="Flag preview"
                sx={{ maxHeight: 100, maxWidth: 150, objectFit: 'contain' }}
              />
            </Paper>
            <Button
              variant="contained"
              component="label"
              startIcon={<CloudUploadIcon />}
              sx={{ textTransform: 'none' }}
            >
              Select Image
              <input
                hidden
                type="file"
                accept=".png, .jpg, .jpeg, .webp, .gif"
                onChange={handleFileChange}
              />
            </Button>
            {flagFile && (
              <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
                Selected: {flagFile.name}
              </Typography>
            )}
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>Status</Typography>
            <RadioGroup
              row
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <FormControlLabel value={1} control={<Radio />} label="Active" />
              <FormControlLabel value={0} control={<Radio />} label="Inactive" />
            </RadioGroup>
          </Box>
        </CardContent>

        <Box sx={{ p: 2, display: 'flex', gap: 1, justifyContent: 'flex-end', borderTop: 1, borderColor: 'divider' }}>
          <Button variant="outlined" color="inherit" startIcon={<CancelIcon />} onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSave}>
            Save Changes
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

export default EditLanguagePageWrapper;
