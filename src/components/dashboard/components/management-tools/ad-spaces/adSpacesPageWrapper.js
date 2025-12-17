'use client';
import { useState } from 'react';
import { Box, Button, TextField, Select, MenuItem, FormControl, Paper, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AD_SPACES = [
    { value: 'index_1', label: 'Index Ad Space 1' },
    { value: 'index_2', label: 'Index Ad Space 2' },
    { value: 'products', label: 'Products Ad Space' },
    { value: 'products_sidebar', label: 'Products Sidebar Ad Space' },
    { value: 'product', label: 'Product Ad Space' },
    { value: 'product_bottom', label: 'Product Bottom Ad Space' },
    { value: 'blog_1', label: 'Blog Ad Space 1' },
    { value: 'blog_2', label: 'Blog Ad Space 2' },
    { value: 'blog_post_details', label: 'Blog Post Details Ad Space' },
    { value: 'blog_post_details_sidebar', label: 'Blog Post Details Sidebar Ad Space' },
    { value: 'profile', label: 'Profile Ad Space' },
    { value: 'profile_sidebar', label: 'Profile Sidebar Ad Space' },
];

const AD_SIZES = [
    { name: '728x90', code: '728', breakpoint: '(This ad will be shown on screens larger than 1200px)' },
    { name: '468x60', code: '468', breakpoint: '(This ad will be shown on screens larger than 576px and smaller than 1200px)' },
    { name: '250x250', code: '250', breakpoint: '(This ad will be shown on screens smaller than 576px)' },
];

export default function AdSpacesPageWrapper() {
    const [selectedSpace, setSelectedSpace] = useState('index_1');
    const [formData, setFormData] = useState({
        ad_code_728: '',
        url_ad_code_728: '',
        file_ad_code_728: null,
        ad_code_468: '',
        url_ad_code_468: '',
        file_ad_code_468: null,
        ad_code_250: '',
        url_ad_code_250: '',
        file_ad_code_250: null,
        google_adsense_code: '',
    });
    const [fileNames, setFileNames] = useState({});

    const handleSpaceChange = (e) => {
        setSelectedSpace(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e, fieldName) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prev => ({ ...prev, [fieldName]: file }));
            setFileNames(prev => ({ ...prev, [fieldName]: file.name }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('ad_space', selectedSpace);

        Object.entries(formData).forEach(([key, value]) => {
            if (value && key !== 'google_adsense_code') formDataToSend.append(key, value);
        });

        try {
            const response = await fetch('/api/ad-spaces', {
                method: 'POST',
                body: formDataToSend,
            });
            if (response.ok) {
                alert('Ad spaces saved successfully');
            }
        } catch (error) {
            console.error('Error saving ad spaces:', error);
        }
    };

    const handleAdsenseSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/google-adsense', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ google_adsense_code: formData.google_adsense_code }),
            });
            if (response.ok) {
                alert('Google Adsense code saved successfully');
            }
        } catch (error) {
            console.error('Error saving Google Adsense code:', error);
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    Ad Spaces Management
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Configure and manage advertisement spaces across your platform
                </Typography>
            </Box>

            <Paper sx={{ p: 3 }}>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <Select
                        value={selectedSpace}
                        onChange={handleSpaceChange}
                        size='normal'
                    >
                        {AD_SPACES.map(space => (
                            <MenuItem key={space.value} value={space.value}>
                                {space.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <form onSubmit={handleSubmit}>
                    {AD_SIZES.map(size => (
                        <Card key={size.code} sx={{ mb: 3 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                    {size.name} Banner
                                </Typography>
                                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>
                                    {size.breakpoint}
                                </Typography>

                                <Grid container spacing={2}>
                                    <Grid item size={6}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Ad Code</Typography>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={4}
                                            name={`ad_code_${size.code}`}
                                            value={formData[`ad_code_${size.code}`]}
                                            onChange={handleInputChange}
                                            placeholder="Paste your ad code here"
                                        />
                                    </Grid>
                                    <Grid item size={6}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Ad URL or Upload</Typography>
                                        <TextField
                                            fullWidth
                                            name={`url_ad_code_${size.code}`}
                                            value={formData[`url_ad_code_${size.code}`]}
                                            onChange={handleInputChange}
                                            placeholder="Paste ad URL"
                                            sx={{ mb: 1.5 }}
                                            size="normal"
                                        />
                                        <Button
                                            variant="outlined"
                                            component="label"
                                            startIcon={<CloudUploadIcon />}
                                            fullWidth
                                            sx={{ mb: 1 }}
                                        >
                                            Select Image
                                            <input
                                                hidden
                                                type="file"
                                                accept=".png, .jpg, .jpeg, .webp, .gif"
                                                onChange={(e) => handleFileChange(e, `file_ad_code_${size.code}`)}
                                            />
                                        </Button>
                                        {fileNames[`file_ad_code_${size.code}`] && (
                                            <Chip
                                                label={fileNames[`file_ad_code_${size.code}`]}
                                                size="small"
                                                variant="outlined"
                                            />
                                        )}
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                        <Button variant="outlined">
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Save Changes
                        </Button>
                    </Box>
                </form>
            </Paper>

            <Paper sx={{ p: 3, mt: 3 }}>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Google Adsense Code
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        The codes you add here will be added in the &lt;head&gt;&lt;/head&gt; tags.
                    </Typography>
                </Box>
                <form onSubmit={handleAdsenseSubmit}>
                    <TextField
                        fullWidth
                        multiline
                        rows={5}
                        name="google_adsense_code"
                        value={formData.google_adsense_code}
                        onChange={handleInputChange}
                        placeholder="Google Adsense Code"
                        sx={{ mb: 2 }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button type="submit" variant="contained" color="primary">
                            Save Changes
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
}
