'use client';
import React, { useState } from 'react';
import {
    Container,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Box,
    Button,
    Stack,
    Typography,
    TextField,
    FormControlLabel,
    Radio,
    RadioGroup,
    Divider,
    Alert,
    Select,
    MenuItem,
} from '@mui/material';
import { Save as SaveIcon, Download as DownloadIcon, Refresh as RefreshIcon } from '@mui/icons-material';

function SeoToolsPageWrapper() {
    const [sitemap, setSitemap] = useState({
        frequency: 'daily',
        lastModification: 'server_response',
        priority: 'automatically',
    });

    const [googleAnalytics, setGoogleAnalytics] = useState(
        `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FWWC8H6NS9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FWWC8H6NS9');
</script>`
    );

    const handleSitemapChange = (field, value) => {
        setSitemap(prev => ({ ...prev, [field]: value }));
    };

    const handleDownloadSitemap = () => {
        console.log('Downloading sitemap with settings:', sitemap);
    };

    const handleUpdateSitemap = () => {
        console.log('Updating sitemap with settings:', sitemap);
    };

    const handleSaveAnalytics = () => {
        console.log('Google Analytics code saved:', googleAnalytics);
    };

    return (
        <Container maxWidth={false}>
            <Grid container spacing={3}>
                {/* Sitemap */}
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Card sx={{ boxShadow: 2 }}>
                        <CardHeader
                            title="Sitemap"
                            sx={{ borderBottom: 1, borderColor: 'divider', pb: 2 }}
                        />
                        <CardContent sx={{ p: 3 }}>
                            <Stack spacing={3}>
                                {/* Frequency */}
                                <Box>
                                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                                        Frequency
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1.5 }}>
                                        This value indicates how frequently the content at a particular URL is likely to change
                                    </Typography>
                                    <Select
                                        fullWidth
                                        size="normal"
                                        value={sitemap.frequency}
                                        onChange={(e) => handleSitemapChange('frequency', e.target.value)}
                                    >
                                        <MenuItem value="none">None</MenuItem>
                                        <MenuItem value="always">Always</MenuItem>
                                        <MenuItem value="hourly">Hourly</MenuItem>
                                        <MenuItem value="daily">Daily</MenuItem>
                                        <MenuItem value="weekly">Weekly</MenuItem>
                                        <MenuItem value="monthly">Monthly</MenuItem>
                                        <MenuItem value="yearly">Yearly</MenuItem>
                                        <MenuItem value="never">Never</MenuItem>
                                    </Select>
                                </Box>

                                <Divider />

                                {/* Last Modification */}
                                <Box>
                                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                                        Last Modification
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1.5 }}>
                                        The time the URL was last modified
                                    </Typography>
                                    <RadioGroup
                                        value={sitemap.lastModification}
                                        onChange={(e) => handleSitemapChange('lastModification', e.target.value)}
                                    >
                                        <FormControlLabel
                                            value="none"
                                            control={<Radio />}
                                            label="None"
                                        />
                                        <FormControlLabel
                                            value="server_response"
                                            control={<Radio />}
                                            label="Server's Response"
                                        />
                                    </RadioGroup>
                                </Box>

                                <Divider />

                                {/* Priority */}
                                <Box>
                                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                                        Priority
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1.5 }}>
                                        The priority of a particular URL relative to other pages on the same site
                                    </Typography>
                                    <RadioGroup
                                        value={sitemap.priority}
                                        onChange={(e) => handleSitemapChange('priority', e.target.value)}
                                    >
                                        <FormControlLabel
                                            value="none"
                                            control={<Radio />}
                                            label="None"
                                        />
                                        <FormControlLabel
                                            value="automatically"
                                            control={<Radio />}
                                            label="Automatically Calculated Priority"
                                        />
                                    </RadioGroup>
                                </Box>

                                <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<DownloadIcon />}
                                        onClick={handleDownloadSitemap}
                                        fullWidth
                                    >
                                        Download Sitemap
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        startIcon={<RefreshIcon />}
                                        onClick={handleUpdateSitemap}
                                        fullWidth
                                    >
                                        Update Sitemap
                                    </Button>
                                </Stack>

                                <Alert severity="info" sx={{ mt: 2 }}>
                                    <Typography variant="body2">
                                        <strong>Cron Job:</strong> http://domain.com/cron/update-sitemap
                                    </Typography>
                                    <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                                        Use this URL to automatically update your sitemap.
                                    </Typography>
                                </Alert>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Google Analytics */}
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Card sx={{ boxShadow: 2 }}>
                        <CardHeader
                            title="Google Analytics Code"
                            sx={{ borderBottom: 1, borderColor: 'divider', pb: 2 }}
                        />
                        <CardContent sx={{ p: 3 }}>
                            <Stack spacing={2.5}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={8}
                                    placeholder="Google Analytics Code"
                                    value={googleAnalytics}
                                    onChange={(e) => setGoogleAnalytics(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            fontFamily: 'monospace',
                                            fontSize: '0.875rem',
                                        },
                                    }}
                                />

                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<SaveIcon />}
                                    onClick={handleSaveAnalytics}
                                    fullWidth
                                >
                                    Save Changes
                                </Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SeoToolsPageWrapper;
