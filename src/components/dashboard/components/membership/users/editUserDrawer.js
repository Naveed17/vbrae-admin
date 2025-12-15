'use client';
import React, { useState } from 'react';
import { Drawer, Box, TextField, Button, Avatar, Stack, Typography, Divider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const EditUserDrawer = ({ open, onClose, data }) => {
    const [formData, setFormData] = useState(data || {});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setFormData(prev => ({ ...prev, avatar: event.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        console.log('Saving:', formData);
        onClose();
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: 450 } }}>
            <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Edit User</Typography>
                <Divider sx={{ mb: 3 }} />

                <Box sx={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {/* Avatar Section */}
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Avatar src={formData.avatar} sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
                        <Button variant="contained" size="small" component="label" startIcon={<CloudUploadIcon />}>
                            Select Image
                            <input hidden accept=".png,.jpg,.jpeg,.webp" type="file" onChange={handleFileChange} />
                        </Button>
                    </Box>

                    {/* Role Badge */}
                    {formData.role && (
                        <Box sx={{ mb: 2, p: 1, bgcolor: 'success.light', borderRadius: 1, textAlign: 'center' }}>
                            <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 600 }}>{formData.role}</Typography>
                        </Box>
                    )}

                    {/* Basic Info */}
                    <TextField size="normal" placeholder="Email" name="email" value={formData.email?.address || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Username" name="username" value={formData.username || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Slug" name="slug" value={formData.slug || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="First Name" name="first_name" value={formData.first_name || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Last Name" name="last_name" value={formData.last_name || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Phone Number" name="phone_number" value={formData.phone_number || ''} onChange={handleChange} fullWidth />

                    {/* Shop Info */}
                    <TextField size="normal" placeholder="Shop Name" name="shop_name" value={formData.shop_name || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Shop Description" name="about_me" value={formData.about_me || ''} onChange={handleChange} fullWidth multiline rows={3} />

                    {/* Location */}
                    <Stack spacing={1}>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>Location</Typography>
                        <FormControl size="normal">
                            <Select
                                displayEmpty
                                inputProps={{ 'aria-label': 'Country' }}
                                renderValue={(selected) => {
                                    if (!selected) {
                                        return <span>Select Country</span>
                                    }
                                    return selected
                                }}
                                name="country_id" value={formData.country_id || ''} onChange={handleChange}
                            >
                                <MenuItem value="230">United States</MenuItem>
                                <MenuItem value="72">France</MenuItem>
                                <MenuItem value="80">Germany</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl size="normal">
                            <Select
                                displayEmpty
                                inputProps={{ 'aria-label': 'State' }}
                                renderValue={(selected) => {
                                    if (!selected) {
                                        return <span>Select State</span>
                                    }
                                    return selected
                                }}
                                name="state_id" value={formData.state_id || ''} onChange={handleChange}
                            >
                                <MenuItem value="">Select State</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl size="normal">
                            <Select
                                displayEmpty
                                inputProps={{ 'aria-label': 'City' }}
                                renderValue={(selected) => {
                                    if (!selected) {
                                        return <span>Select City</span>
                                    }
                                    return selected
                                }}
                                name="city_id" value={formData.city_id || ''} onChange={handleChange}
                            >
                                <MenuItem value="">Select City</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>

                    <TextField size="normal" placeholder="Address" name="address" value={formData.address || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Zip Code" name="zip_code" value={formData.zip_code || ''} onChange={handleChange} fullWidth />

                    {/* Social URLs */}
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>Social Media</Typography>
                    <TextField size="normal" placeholder="Personal Website URL" name="personal_website_url" value={formData.personal_website_url || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Facebook URL" name="facebook_url" value={formData.facebook_url || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Twitter URL" name="twitter_url" value={formData.twitter_url || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Instagram URL" name="instagram_url" value={formData.instagram_url || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Pinterest URL" name="pinterest_url" value={formData.pinterest_url || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="LinkedIn URL" name="linkedin_url" value={formData.linkedin_url || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="VK URL" name="vk_url" value={formData.vk_url || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="WhatsApp URL" name="whatsapp_url" value={formData.whatsapp_url || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Telegram URL" name="telegram_url" value={formData.telegram_url || ''} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="YouTube URL" name="youtube_url" value={formData.youtube_url || ''} onChange={handleChange} fullWidth />
                </Box>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: 1, mt: 3, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                    <Button variant="outlined" onClick={onClose} fullWidth>Cancel</Button>
                    <Button variant="contained" onClick={handleSave} fullWidth>Save Changes</Button>
                </Box>
            </Box>
        </Drawer>
    );
};

export default EditUserDrawer;
