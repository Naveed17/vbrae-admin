'use client';
import React from 'react';
import {
    Drawer,
    Box,
    Typography,
    IconButton,
    Stack,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Divider,
    Paper,
    InputAdornment,
} from '@mui/material';
import { Close as CloseIcon, Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

function EditPlanDrawer({ open, onClose, plan, formData, setFormData, features, setFeatures, onSubmit }) {
    const handleTitleChange = (lang, value) => {
        setFormData(prev => ({
            ...prev,
            titles: { ...prev.titles, [lang]: value }
        }));
    };

    const handleFeatureChange = (index, lang, value) => {
        const newFeatures = [...features];
        newFeatures[index][lang] = value;
        setFeatures(newFeatures);
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: { xs: '100%', sm: 500 } } }}>
            <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>Edit Plan</Typography>
                    <IconButton onClick={onClose} size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ flex: 1, overflowY: 'auto', mb: 3 }}>
                    <form onSubmit={onSubmit}>
                        <Stack spacing={3}>
                            {/* Plan Titles */}
                            <Box>
                                <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 500 }}>Plan Title</Typography>
                                <Stack spacing={1.5}>
                                    {['en', 'de', 'fr', 'it', 'es'].map(lang => (
                                        <TextField
                                            key={lang}
                                            fullWidth
                                            size="normal"
                                            placeholder={`Title - ${lang.toUpperCase()}`}
                                            value={formData.titles[lang]}
                                            onChange={(e) => handleTitleChange(lang, e.target.value)}
                                            required
                                        />
                                    ))}
                                </Stack>
                            </Box>

                            <Divider />

                            {/* Plan Details */}
                            <Box>
                                <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 500 }}>Plan Details</Typography>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end', mb: 2 }}>
                                    <TextField
                                        type="number"
                                        size="normal"
                                        placeholder="Number of Ads"
                                        value={formData.numberOfAds}
                                        onChange={(e) => setFormData(prev => ({ ...prev, numberOfAds: e.target.value }))}
                                        sx={{ flex: 1 }}
                                        disabled={formData.unlimitedAds}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={formData.unlimitedAds}
                                                onChange={(e) => setFormData(prev => ({ ...prev, unlimitedAds: e.target.checked }))}
                                            />
                                        }
                                        label="Unlimited"
                                        sx={{ whiteSpace: 'nowrap' }}
                                    />
                                </Box>

                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end' }}>
                                    <TextField
                                        type="number"
                                        size="normal"
                                        placeholder="Duration (Days)"
                                        value={formData.numberOfDays}
                                        onChange={(e) => setFormData(prev => ({ ...prev, numberOfDays: e.target.value }))}
                                        sx={{ flex: 1 }}
                                        disabled={formData.unlimitedTime}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={formData.unlimitedTime}
                                                onChange={(e) => setFormData(prev => ({ ...prev, unlimitedTime: e.target.checked }))}
                                            />
                                        }
                                        label="Unlimited"
                                        sx={{ whiteSpace: 'nowrap' }}
                                    />
                                </Box>
                            </Box>

                            <Divider />

                            {/* Pricing */}
                            <Box>
                                <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 500 }}>Pricing</Typography>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end', mb: 2 }}>
                                    <TextField
                                        type="number"
                                        size="normal"
                                        placeholder="Price"
                                        value={formData.price}
                                        onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                                        InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                        sx={{ flex: 1 }}
                                        disabled={formData.isFree}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={formData.isFree}
                                                onChange={(e) => setFormData(prev => ({ ...prev, isFree: e.target.checked }))}
                                            />
                                        }
                                        label="Free"
                                        sx={{ whiteSpace: 'nowrap' }}
                                    />
                                </Box>
                                <TextField
                                    fullWidth
                                    type="number"
                                    size="normal"
                                    placeholder="Plan Order"
                                    value={formData.planOrder}
                                    onChange={(e) => setFormData(prev => ({ ...prev, planOrder: e.target.value }))}
                                />
                            </Box>

                            <Divider />

                            {/* Features */}
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>Features</Typography>
                                    <Button
                                        startIcon={<AddIcon />}
                                        onClick={() => setFeatures([...features, { en: '', de: '', fr: '', it: '', es: '' }])}
                                        variant="outlined"
                                        size="small"
                                    >
                                        Add
                                    </Button>
                                </Box>
                                <Stack spacing={2}>
                                    {features.map((feature, idx) => (
                                        <Paper key={idx} sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                                <Typography variant="caption" sx={{ fontWeight: 500 }}>Feature {idx + 1}</Typography>
                                                {features.length > 1 && (
                                                    <IconButton size="small" color="error" onClick={() => setFeatures(features.filter((_, i) => i !== idx))}>
                                                        <DeleteIcon fontSize="small" />
                                                    </IconButton>
                                                )}
                                            </Box>
                                            <Stack spacing={1}>
                                                {['en', 'de', 'fr', 'it', 'es'].map(lang => (
                                                    <TextField
                                                        key={lang}
                                                        fullWidth
                                                        size="normal"
                                                        placeholder={`Feature - ${lang.toUpperCase()}`}
                                                        value={feature[lang]}
                                                        onChange={(e) => handleFeatureChange(idx, lang, e.target.value)}
                                                    />
                                                ))}
                                            </Stack>
                                        </Paper>
                                    ))}
                                </Stack>
                            </Box>

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.isPopular}
                                        onChange={(e) => setFormData(prev => ({ ...prev, isPopular: e.target.checked }))}
                                    />
                                }
                                label="Mark as Popular"
                            />
                        </Stack>
                    </form>
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="outlined" fullWidth onClick={onClose}>Cancel</Button>
                    <Button variant="contained" color="primary" fullWidth onClick={onSubmit}>Save Changes</Button>
                </Box>
            </Box>
        </Drawer>
    );
}

export default EditPlanDrawer;
