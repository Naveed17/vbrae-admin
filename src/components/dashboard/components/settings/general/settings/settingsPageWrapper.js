'use client';
import { Card, CardContent, CardHeader, Container, Button, Box, TextField, Tabs, Tab, Typography, useTheme, RadioGroup, FormControlLabel, Radio, Select, MenuItem } from '@mui/material';
import TextEditor from '@/components/shared/textEditor';
import React, { useState } from 'react';

function SettingsPageWrapper() {
    const theme = useTheme();
    const [activeTab, setActiveTab] = useState(0);
    const [langId, setLangId] = useState('1');
    const [settings, setSettings] = useState({
        application_name: 'VBRAE.COM',
        site_title: 'Affordable Game Keys & Gift Cards | Best Prices Online',
        homepage_title: 'VBRAE',
        site_description: 'Get top game keys & Binance gift cards at unbeatable prices on VBRAE.',
        keywords: 'VBRAE, game keys, gift cards',
        copyright: 'Copyright 2018-2025 VBRAE.COM - All Rights Reserved.',
        about_footer: '<h2>Welcome to VBRAE</h2><p>Your go-to place for cheap game keys.</p>',
        contact_address: 'Oskarström - Hantversksgatan 12 - 31331',
        contact_email: 'Info@vbrae.com',
        contact_phone: '+46739944088',
        contact_text: '<p>Hi there!</p><p>Contact us with any general questions</p>',
        facebook_url: 'https://www.facebook.com/V3rae/',
        twitter_url: 'https://twitter.com/V3arev',
        instagram_url: 'https://www.instagram.com/vbrae_com',
        pinterest_url: 'https://www.pinterest.com/vbraegames',
        linkedin_url: 'https://www.linkedin.com/vbrae-games',
        vk_url: '',
        whatsapp_url: 'https://web.whatsapp.com/',
        telegram_url: '',
        youtube_url: '',
        facebook_comment_status: '0',
        facebook_comment: '',
        custom_css_codes: '',
        custom_javascript_codes: '',
        cookies_warning: '1',
        cookies_warning_text: '<p>This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookies.</p>',
        recaptcha_site_key: '6LfLe-MUAAAAABy8xSpYZA9bz9LWny8t67Cu4Zlc',
        recaptcha_secret_key: '6LfLe-MUAAAAAMyjBrGb-k6s9me795Jmocu5JwPz',
        recaptcha_lang: 'en',
        maintenance_mode_title: 'Coming Soon',
        maintenance_mode_description: 'Our website is under construction.',
        maintenance_mode_status: '0',
        clearsale_rang: '1',
    });

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleChange = (field, value) => {
        setSettings({ ...settings, [field]: value });
    };

    const handleSave = () => {
        console.log('Save settings:', settings);
    };

    const TabContent = ({ children }) => (
        <Box sx={{ pt: 3 }}>
            {children}
        </Box>
    );

    return (
        <Container maxWidth={false} sx={{ py: 3 }}>
            <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>Settings</Typography>
                <Select
                    size="normal"
                    value={langId}
                    onChange={(e) => setLangId(e.target.value)}
                    sx={{ width: 200 }}
                >
                    <MenuItem value="1">English</MenuItem>
                    <MenuItem value="3">German</MenuItem>
                    <MenuItem value="4">French</MenuItem>
                    <MenuItem value="5">Italian</MenuItem>
                    <MenuItem value="6">Spanish</MenuItem>
                </Select>
            </Box>

            <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: `1px solid ${theme.palette.divider}` }}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    sx={{ borderBottom: `1px solid ${theme.palette.divider}`, px: 2 }}
                >
                    <Tab label="General Settings" />
                    <Tab label="Contact Settings" />
                    <Tab label="Social Media" />
                    <Tab label="Facebook Comments" />
                    <Tab label="Custom CSS" />
                    <Tab label="Custom JavaScript" />
                    <Tab label="Cookies Warning" />
                </Tabs>

                <CardContent>
                    {activeTab === 0 && (
                        <TabContent>
                            <TextField fullWidth size="normal" placeholder="Application Name" value={settings.application_name} onChange={(e) => handleChange('application_name', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="Site Title" value={settings.site_title} onChange={(e) => handleChange('site_title', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="Homepage Title" value={settings.homepage_title} onChange={(e) => handleChange('homepage_title', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="Site Description" value={settings.site_description} onChange={(e) => handleChange('site_description', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="Keywords" value={settings.keywords} onChange={(e) => handleChange('keywords', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="Copyright" value={settings.copyright} onChange={(e) => handleChange('copyright', e.target.value)} sx={{ mb: 2 }} />
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Footer About Section</Typography>
                                <TextEditor initialValue={settings.about_footer} />
                            </Box>
                            <Button variant="contained" color="primary" onClick={handleSave}>Save Changes</Button>
                        </TabContent>
                    )}

                    {activeTab === 1 && (
                        <TabContent>
                            <TextField fullWidth size="normal" placeholder="Address" value={settings.contact_address} onChange={(e) => handleChange('contact_address', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="Email Address" value={settings.contact_email} onChange={(e) => handleChange('contact_email', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="Phone" value={settings.contact_phone} onChange={(e) => handleChange('contact_phone', e.target.value)} sx={{ mb: 2 }} />
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Contact Text</Typography>
                                <TextEditor initialValue={settings.contact_text} />
                            </Box>
                            <Button variant="contained" color="primary" onClick={handleSave}>Save Changes</Button>
                        </TabContent>
                    )}

                    {activeTab === 2 && (
                        <TabContent>
                            <TextField fullWidth size="normal" placeholder="Facebook URL" value={settings.facebook_url} onChange={(e) => handleChange('facebook_url', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="Twitter URL" value={settings.twitter_url} onChange={(e) => handleChange('twitter_url', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="Instagram URL" value={settings.instagram_url} onChange={(e) => handleChange('instagram_url', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="Pinterest URL" value={settings.pinterest_url} onChange={(e) => handleChange('pinterest_url', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="LinkedIn URL" value={settings.linkedin_url} onChange={(e) => handleChange('linkedin_url', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="VK URL" value={settings.vk_url} onChange={(e) => handleChange('vk_url', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="WhatsApp URL" value={settings.whatsapp_url} onChange={(e) => handleChange('whatsapp_url', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="Telegram URL" value={settings.telegram_url} onChange={(e) => handleChange('telegram_url', e.target.value)} sx={{ mb: 2 }} />
                            <TextField fullWidth size="normal" placeholder="YouTube URL" value={settings.youtube_url} onChange={(e) => handleChange('youtube_url', e.target.value)} sx={{ mb: 2 }} />
                            <Button variant="contained" color="primary" onClick={handleSave}>Save Changes</Button>
                        </TabContent>
                    )}

                    {activeTab === 3 && (
                        <TabContent>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Facebook Comments</Typography>
                                <RadioGroup row value={settings.facebook_comment_status} onChange={(e) => handleChange('facebook_comment_status', e.target.value)}>
                                    <FormControlLabel value="1" control={<Radio />} label="Enable" />
                                    <FormControlLabel value="0" control={<Radio />} label="Disable" />
                                </RadioGroup>
                            </Box>
                            <TextField fullWidth placeholder="Facebook Comments Plugin Code" multiline rows={6} value={settings.facebook_comment} onChange={(e) => handleChange('facebook_comment', e.target.value)} sx={{ mb: 2 }} />
                            <Button variant="contained" color="primary" onClick={handleSave}>Save Changes</Button>
                        </TabContent>
                    )}

                    {activeTab === 4 && (
                        <TabContent>
                            <TextField fullWidth placeholder="Custom CSS Codes" multiline rows={8} value={settings.custom_css_codes} onChange={(e) => handleChange('custom_css_codes', e.target.value)} sx={{ mb: 2 }} helperText="These codes will be added to the header of the site." />
                            <Button variant="contained" color="primary" onClick={handleSave}>Save Changes</Button>
                        </TabContent>
                    )}

                    {activeTab === 5 && (
                        <TabContent>
                            <TextField fullWidth placeholder="Custom JavaScript Codes" multiline rows={8} value={settings.custom_javascript_codes} onChange={(e) => handleChange('custom_javascript_codes', e.target.value)} sx={{ mb: 2 }} helperText="These codes will be added to the footer of the site." />
                            <Button variant="contained" color="primary" onClick={handleSave}>Save Changes</Button>
                        </TabContent>
                    )}

                    {activeTab === 6 && (
                        <TabContent>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Show Cookies Warning</Typography>
                                <RadioGroup row value={settings.cookies_warning} onChange={(e) => handleChange('cookies_warning', e.target.value)}>
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                </RadioGroup>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Cookies Warning Text</Typography>
                                <TextEditor initialValue={settings.cookies_warning_text} />
                            </Box>
                            <Button variant="contained" color="primary" onClick={handleSave}>Save Changes</Button>
                        </TabContent>
                    )}
                </CardContent>
            </Card>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mt: 3 }}>
                <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: `1px solid ${theme.palette.divider}` }}>
                    <CardHeader title="Google reCAPTCHA" />
                    <CardContent>
                        <TextField fullWidth size="normal" placeholder="Site Key" value={settings.recaptcha_site_key} onChange={(e) => handleChange('recaptcha_site_key', e.target.value)} sx={{ mb: 2 }} />
                        <TextField fullWidth size="normal" placeholder="Secret Key" value={settings.recaptcha_secret_key} onChange={(e) => handleChange('recaptcha_secret_key', e.target.value)} sx={{ mb: 2 }} />
                        <TextField fullWidth size="normal" placeholder="Language" value={settings.recaptcha_lang} onChange={(e) => handleChange('recaptcha_lang', e.target.value)} sx={{ mb: 2 }} helperText="https://developers.google.com/recaptcha/docs/language" />
                        <Button variant="contained" color="primary" onClick={handleSave}>Save Changes</Button>
                    </CardContent>
                </Card>

                <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: `1px solid ${theme.palette.divider}` }}>
                    <CardHeader title="Maintenance Mode" />
                    <CardContent>
                        <TextField fullWidth size="normal" placeholder="Title" value={settings.maintenance_mode_title} onChange={(e) => handleChange('maintenance_mode_title', e.target.value)} sx={{ mb: 2 }} />
                        <TextField fullWidth placeholder="Description" multiline rows={3} value={settings.maintenance_mode_description} onChange={(e) => handleChange('maintenance_mode_description', e.target.value)} sx={{ mb: 2 }} />
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Status</Typography>
                            <RadioGroup row value={settings.maintenance_mode_status} onChange={(e) => handleChange('maintenance_mode_status', e.target.value)}>
                                <FormControlLabel value="1" control={<Radio />} label="Enable" />
                                <FormControlLabel value="0" control={<Radio />} label="Disable" />
                            </RadioGroup>
                        </Box>
                        <Button variant="contained" color="primary" onClick={handleSave}>Save Changes</Button>
                    </CardContent>
                </Card>

                <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: `1px solid ${theme.palette.divider}` }}>
                    <CardHeader title="Clearsale Limit" />
                    <CardContent>
                        <TextField fullWidth size="normal" placeholder="Set Range" type="number" value={settings.clearsale_rang} onChange={(e) => handleChange('clearsale_rang', e.target.value)} sx={{ mb: 2 }} />
                        <Button variant="contained" color="primary" onClick={handleSave}>Save Changes</Button>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default SettingsPageWrapper;
