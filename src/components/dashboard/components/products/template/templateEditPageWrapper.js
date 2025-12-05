'use client';
import { Card, CardContent, CardHeader, Container, Box, Typography, TextField, Button, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, Paper, Stack, IconButton, Collapse } from '@mui/material';
import { Save as SaveIcon, ExpandMore as ExpandMoreIcon, Image as ImageIcon } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Image from 'next/image';
import FileUpload from '@/components/shared/uploads';
import TextEditor from '@/components/shared/textEditor';
import React, { useState } from 'react';

const regions = ['Global', 'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'China', 'France', 'Germany', 'India', 'Italy', 'Japan', 'Mexico', 'Netherlands', 'Russia', 'Spain', 'United Kingdom', 'United States'];

const languages = ['Arabic', 'Bulgarian', 'Chinese', 'Czech', 'Danish', 'Dutch', 'English', 'Finnish', 'French', 'German', 'Greek', 'Hungarian', 'Italian', 'Japanese', 'Korean', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Russian', 'Spanish', 'Swedish', 'Thai', 'Turkish', 'Ukrainian'];

const categories = [
    { id: 135, name: 'PSN' },
    { id: 134, name: 'XBOX' },
    { id: 139, name: 'GIFT CARDS' },
    { id: 146, name: 'NINTENDO' },
    { id: 158, name: 'PC GAMING' },
];

function TemplateEditPageWrapper() {
    const [formData, setFormData] = useState({
        templateName: 'Startup Company Console Edition XBOX One / Xbox Series X|S CD Key Global',
        slug: 'startup-company-console-edition-xbox-one-xbox-series-xs-cd-key-global',
        listingType: 'license_key',
        category: '134',
        region: 'Global',
        genres: 'simulator,strategy',
        releaseDate: '0000-00-00',
        preorder: 'inactive',
        dlc: '',
        price: '19.99',
        specificCountry: '0',
        languages: ['English'],
        seo_title_en: '',
        seo_description_en: '',
        seo_keywords_en: '',
        seo_title_es: '',
        seo_description_es: '',
        seo_keywords_es: '',
        seo_title_de: '',
        seo_description_de: '',
        seo_keywords_de: '',
        seo_title_fr: '',
        seo_description_fr: '',
        seo_keywords_fr: '',
    });

    const [coverImage, setCoverImage] = useState('https://vbrae.com/assets/img/template-image/c_79084.jpg');
    const [images, setImages] = useState([
        'https://vbrae.com/assets/img/template-image/73886.jpg',
        'https://vbrae.com/assets/img/template-image/65207.jpg',
        'https://vbrae.com/assets/img/template-image/30452.jpg',
    ]);
    const [uploadError, setUploadError] = useState(null);
    const [uploadLoading, setUploadLoading] = useState(false);
    const [expandedLanguages, setExpandedLanguages] = useState({
        spanish: false,
        german: false,
        french: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleLanguageChange = (lang) => {
        setFormData(prev => ({
            ...prev,
            languages: prev.languages.includes(lang)
                ? prev.languages.filter(l => l !== lang)
                : [...prev.languages, lang]
        }));
    };

    const handleSave = () => {
        console.log('Save template:', formData);
    };

    const handleCoverImageUpload = (files) => {
        setUploadLoading(true);
        setUploadError(null);
        try {
            const file = Array.isArray(files) ? files[0] : files;
            const reader = new FileReader();
            reader.onload = (e) => {
                setCoverImage(e.target.result);
                setUploadLoading(false);
            };
            reader.readAsDataURL(file);
        } catch (error) {
            setUploadError(error.message);
            setUploadLoading(false);
        }
    };

    const handleImageUpload = (files) => {
        setUploadLoading(true);
        setUploadError(null);
        try {
            const fileArray = Array.isArray(files) ? files : [files];
            const newPreviews = [];
            let loaded = 0;

            fileArray.forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    newPreviews.push(e.target.result);
                    loaded++;
                    if (loaded === fileArray.length) {
                        setImages(prev => [...prev, ...newPreviews]);
                        setUploadLoading(false);
                    }
                };
                reader.readAsDataURL(file);
            });
        } catch (error) {
            setUploadError(error.message);
            setUploadLoading(false);
        }
    };

    const handleFileRemove = (index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const renderLanguageSection = (lang, langCode, langLabel) => (
        <Card key={lang}>
            <CardHeader
                title={`Details :${langLabel} ${langLabel === 'English' ? '' : '(Optional)'} `}
                action={
                    <IconButton
                        onClick={() => setExpandedLanguages(prev => ({ ...prev, [lang]: !prev[lang] }))}
                        sx={{ transform: expandedLanguages[lang] ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.3s' }}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                }
                sx={{ pb: expandedLanguages[lang] ? 0 : 2, transition: 'all .5s' }}
            />
            <Collapse in={expandedLanguages[lang]}>
                <CardContent>
                    <Stack spacing={0.5} mb={2}>
                        <Typography fontWeight={600}>Title</Typography>
                        <TextField size="normal" />
                    </Stack>
                    <Stack spacing={0.5} mb={2}>
                        <Typography fontWeight={600}>Description</Typography>
                        <Box>
                            <Button variant='contained' onClick={() => setImageDialogOpen(true)} startIcon={<ImageIcon />}>
                                Add Image
                            </Button>
                        </Box>
                    </Stack>
                    <TextEditor
                        onChange={(editorState) => {
                            editorState.read(() => {
                                const json = editorState.toJSON();
                                const contentStr = JSON.stringify(json);
                                setFormData(prev => ({ ...prev, [`description_${langCode}`]: contentStr }));
                            });
                        }}
                    />
                    <Stack spacing={2} mt={3}>
                        <Typography fontWeight={600}>SEO</Typography>
                        <TextField
                            name={`seo_title_${langCode}`}
                            value={formData[`seo_title_${langCode}`]}
                            onChange={handleInputChange}
                            placeholder="Title"
                            fullWidth
                            size="normal"
                        />
                        <TextField
                            name={`seo_description_${langCode}`}
                            value={formData[`seo_description_${langCode}`]}
                            onChange={handleInputChange}
                            placeholder="Description"
                            fullWidth
                            size="normal"
                        />
                        <TextField
                            name={`seo_keywords_${langCode}`}
                            value={formData[`seo_keywords_${langCode}`]}
                            onChange={handleInputChange}
                            placeholder="Keywords"
                            fullWidth
                            size="normal"
                        />
                    </Stack>
                </CardContent>
            </Collapse>
        </Card>
    );

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Edit Template" />
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {/* Cover Image Section */}
                        <Box sx={{ pb: 2, borderBottom: 1, borderColor: 'divider' }}>
                            <Typography variant="subtitle2" sx={{ mb: 2 }}>Cover Image</Typography>
                            <FileUpload
                                accept=".png,.jpg,.jpeg,.webp"
                                maxSize={5 * 1024 * 1024}
                                multiple={false}
                                onFileSelect={handleCoverImageUpload}
                                previews={coverImage ? [coverImage] : []}
                                fileNames={['Cover Image']}
                                placeholder="Drag and drop image here"
                                description="PNG/JPG/WEBP format, max 5MB"
                                error={uploadError}
                                loading={uploadLoading}
                            />
                        </Box>

                        {/* Basic Info */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>Template Name</Typography>
                                <TextField fullWidth size="normal" placeholder="Template Name" name="templateName" value={formData.templateName} onChange={handleInputChange} />
                            </Box>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>Slug</Typography>
                                <TextField fullWidth size="normal" placeholder="Slug" name="slug" value={formData.slug} onChange={handleInputChange} />
                            </Box>
                        </Box>

                        {/* Category & Type */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>Listing Type</Typography>
                                <Select name="listingType" value={formData.listingType} onChange={handleInputChange} disabled fullWidth size='normal' displayEmpty renderValue={(selected) => (<Typography variant="body2" component="span" sx={{ fontWeight: 600, color: 'text.secondary' }}>{selected || 'Listing Type'}</Typography>)}>
                                    <MenuItem value="license_key">License Key</MenuItem>
                                </Select>
                            </Box>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>Category</Typography>
                                <Select name="category" value={formData.category} onChange={handleInputChange} fullWidth size='normal' displayEmpty renderValue={(selected) => (<Typography variant="body2" component="span" sx={{ fontWeight: 600, color: 'text.secondary' }}>{categories.find(c => c.id == selected)?.name || 'Category'}</Typography>)}>
                                    {categories.map(cat => (
                                        <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                                    ))}
                                </Select>
                            </Box>
                        </Box>

                        {/* Region & Genres */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>Region</Typography>
                                <Select name="region" value={formData.region} onChange={handleInputChange} fullWidth size='normal' displayEmpty renderValue={(selected) => (<Typography variant="body2" component="span" sx={{ fontWeight: 600, color: 'text.secondary' }}>{selected || 'Region'}</Typography>)}>
                                    {regions.map(region => (
                                        <MenuItem key={region} value={region}>{region}</MenuItem>
                                    ))}
                                </Select>
                            </Box>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>Genres</Typography>
                                <TextField fullWidth size="normal" placeholder="Genres" name="genres" value={formData.genres} onChange={handleInputChange} />
                            </Box>
                        </Box>

                        {/* Release Date & Pre-order */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>Release Date</Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker value={formData.releaseDate === '0000-00-00' ? null : dayjs(formData.releaseDate)} onChange={(date) => setFormData(prev => ({ ...prev, releaseDate: date ? date.format('YYYY-MM-DD') : '0000-00-00' }))} slotProps={{ textField: { fullWidth: true } }} />
                                </LocalizationProvider>
                            </Box>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>Pre-Order</Typography>
                                <Select name="preorder" value={formData.preorder} onChange={handleInputChange} fullWidth size='normal' displayEmpty renderValue={(selected) => (<Typography variant="body2" component="span" sx={{ fontWeight: 600, color: 'text.secondary' }}>{selected === 'active' ? 'Active' : 'In Active'}</Typography>)}>
                                    <MenuItem value="inactive">In Active</MenuItem>
                                    <MenuItem value="active">Active</MenuItem>
                                </Select>
                            </Box>
                        </Box>

                        {/* DLC & Price */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>DLC</Typography>
                                <TextField fullWidth size="normal" placeholder="DLC" name="dlc" value={formData.dlc} onChange={handleInputChange} />
                            </Box>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>Price</Typography>
                                <TextField fullWidth size="normal" placeholder="Price" name="price" value={formData.price} onChange={handleInputChange} InputProps={{ startAdornment: '$' }} />
                            </Box>
                        </Box>

                        {/* Specific Country & Languages */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>Specific Country Selling Option</Typography>
                                <Select name="specificCountry" value={formData.specificCountry} onChange={handleInputChange} fullWidth size='normal' displayEmpty renderValue={(selected) => (<Typography variant="body2" component="span" sx={{ fontWeight: 600, color: 'text.secondary' }}>{selected === '1' ? 'Enabled' : 'Disabled'}</Typography>)}>
                                    <MenuItem value="1">Enabled</MenuItem>
                                    <MenuItem value="0">Disabled</MenuItem>
                                </Select>
                            </Box>
                        </Box>

                        {/* Languages */}
                        <Box>
                            <Typography variant="subtitle2" sx={{ mb: 2 }}>Languages</Typography>
                            <FormGroup sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 1 }}>
                                {languages.map(lang => (
                                    <FormControlLabel
                                        key={lang}
                                        control={<Checkbox checked={formData.languages.includes(lang)} onChange={() => handleLanguageChange(lang)} />}
                                        label={lang}
                                    />
                                ))}
                            </FormGroup>
                        </Box>

                        {/* Gallery Images Section */}
                        <Box sx={{ pb: 2, borderTop: 1, borderColor: 'divider', pt: 2 }}>
                            <Typography variant="subtitle2" sx={{ mb: 2 }}>Gallery Images</Typography>
                            <FileUpload
                                accept=".png,.jpg,.jpeg,.webp"
                                maxSize={5 * 1024 * 1024}
                                multiple={true}
                                onFileSelect={handleImageUpload}
                                onFileRemove={handleFileRemove}
                                previews={images}
                                fileNames={images.map((_, i) => `Image ${i + 1}`)}
                                placeholder="Drag and drop images here"
                                description="PNG/JPG/WEBP format, max 5MB"
                                error={uploadError}
                                loading={uploadLoading}
                            />
                        </Box>

                        {/* Language Details Sections */}
                        <Stack spacing={2}>
                            <Box>
                                <Button variant='contained'>Translate</Button>
                            </Box>
                            {renderLanguageSection('english', 'en', 'English')}
                            {renderLanguageSection('spanish', 'es', 'Spanish')}
                            {renderLanguageSection('german', 'de', 'German')}
                            {renderLanguageSection('french', 'fr', 'French')}
                        </Stack>

                        {/* Save Button */}
                        <Box sx={{ textAlign: 'center', pt: 2 }}>
                            <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSave}>
                                SAVE
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}

export default TemplateEditPageWrapper;
