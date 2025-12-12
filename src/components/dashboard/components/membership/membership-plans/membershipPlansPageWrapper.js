'use client';
import React, { useState } from 'react';
import {
    Container,
    Grid,
    Card,
    CardContent,
    TextField,
    Button,
    Box,
    FormControlLabel,
    Checkbox,
    RadioGroup,
    Radio,
    InputAdornment,
    IconButton,
    Stack,
    Divider,
    Typography,
    Paper,
    CardActions,

} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import EditPlanDrawer from './editPlanDrawer';

function MembershipPlansPageWrapper() {
    const [formData, setFormData] = useState({
        titles: { en: '', de: '', fr: '', it: '', es: '' },
        numberOfAds: '',
        unlimitedAds: false,
        numberOfDays: '',
        unlimitedTime: false,
        price: '',
        isFree: false,
        commission: '',
        fundReleaseDays: '',
        earlyPayouts: '',
        planOrder: '',
        isPopular: false,
    });

    const [settings, setSettings] = useState({ membershipStatus: '1' });
    const [features, setFeatures] = useState([{ en: '', de: '', fr: '', it: '', es: '' }]);
    const [editDrawerOpen, setEditDrawerOpen] = useState(false);
    const [editingPlan, setEditingPlan] = useState(null);
    const [editFormData, setEditFormData] = useState({
        titles: { en: '', de: '', fr: '', it: '', es: '' },
        numberOfAds: '',
        unlimitedAds: false,
        numberOfDays: '',
        unlimitedTime: false,
        price: '',
        isFree: false,
        planOrder: '',
        isPopular: false,
    });
    const [editFeatures, setEditFeatures] = useState([{ en: '', de: '', fr: '', it: '', es: '' }]);

    const openEditDrawer = (plan) => {
        setEditingPlan(plan);
        setEditFormData({
            titles: { en: plan.name, de: plan.name, fr: plan.name, it: plan.name, es: plan.name },
            numberOfAds: '',
            unlimitedAds: true,
            numberOfDays: '',
            unlimitedTime: true,
            price: plan.price === 'Free' ? '' : plan.price,
            isFree: plan.price === 'Free',
            planOrder: '',
            isPopular: false,
        });
        setEditFeatures(plan.features.map(f => ({ en: f, de: f, fr: f, it: f, es: f })));
        setEditDrawerOpen(true);
    };

    const closeEditDrawer = () => {
        setEditDrawerOpen(false);
        setEditingPlan(null);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        console.log('Edit submitted:', { ...editFormData, features: editFeatures });
        closeEditDrawer();
    };

    const membershipPlans = [
        {
            id: 1,
            name: 'Tier 1',
            price: 'Free',
            features: ['Start Selling', '10% Commission', 'Release Funds 21 Days - min 7 Days!', 'Level based = Level 5 = 7% Commission']
        },
        {
            id: 2,
            name: 'Tier 2',
            price: 'Free',
            features: ['Start Selling', 'Commission 20%', 'Released of funds 72 hours']
        }
    ];

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

    const addFeature = () => {
        setFeatures([...features, { en: '', de: '', fr: '', it: '', es: '' }]);
    };

    const removeFeature = (index) => {
        setFeatures(features.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { ...formData, features });
    };

    const handleSettingsSubmit = (e) => {
        e.preventDefault();
        console.log('Settings submitted:', settings);
    };

    return (
        <Container maxWidth={false} sx={{ py: 4 }}>
            {/* Membership Plans Display */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>Membership Plans</Typography>
                <Grid container spacing={3}>
                    {membershipPlans.map(plan => (
                        <Grid item key={plan.id} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ boxShadow: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ p: 3, flex: 1 }}>
                                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, textAlign: 'center' }}>{plan.name}</Typography>
                                    <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, textAlign: 'center', color: 'primary.main' }}>{plan.price}</Typography>
                                    <Stack spacing={1.5}>
                                        {plan.features.map((feature, idx) => (
                                            <Box key={idx} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                                                <Box sx={{ color: 'success.main', mt: 0.5, flexShrink: 0 }}>✓</Box>
                                                <Typography variant="body2">{feature}</Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </CardContent>
                                <CardActions sx={{ p: 2, justifyContent: 'center', gap: 1, borderTop: '1px solid', borderColor: 'divider' }}>
                                    <Button variant="outlined" size="small" color="primary" onClick={() => openEditDrawer(plan)}>Edit</Button>
                                    <Button variant="outlined" size="small" color="error">Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Grid container spacing={3}>
                {/* Create Plan Form */}
                <Grid item size={{ xs: 12, lg: 7 }}>
                    <Card sx={{ boxShadow: 2 }}>
                        <CardContent sx={{ p: 3 }}>
                            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Create Membership Plan</Typography>
                            <form onSubmit={handleSubmit}>
                                <Stack spacing={3}>
                                    {/* Plan Titles */}
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 500 }}>Plan Title (Multi-language)</Typography>
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
                                                    variant="outlined"
                                                />
                                            ))}
                                        </Stack>
                                    </Box>

                                    <Divider />

                                    {/* Plan Details */}
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 500 }}>Plan Details</Typography>
                                        <Stack spacing={2}>
                                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end' }}>
                                                <TextField
                                                    type="number"
                                                    size="normal"
                                                    placeholder="Number of Ads"
                                                    value={formData.numberOfAds}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, numberOfAds: e.target.value }))}
                                                    sx={{ flex: 1 }}
                                                    disabled={formData.unlimitedAds}
                                                    required
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
                                                    required
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
                                        </Stack>
                                    </Box>

                                    <Divider />

                                    {/* Pricing */}
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 500 }}>Pricing</Typography>
                                        <Stack spacing={2}>
                                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end' }}>
                                                <TextField
                                                    type="number"
                                                    size="normal"
                                                    placeholder="Price"
                                                    value={formData.price}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                                                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                                    sx={{ flex: 1 }}
                                                    disabled={formData.isFree}
                                                    required
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

                                            <Grid container spacing={2}>
                                                <Grid item size={{ xs: 12, sm: 6 }}>
                                                    <TextField
                                                        fullWidth
                                                        type="number"
                                                        size="normal"
                                                        placeholder="Commission"
                                                        value={formData.commission}
                                                        onChange={(e) => setFormData(prev => ({ ...prev, commission: e.target.value }))}
                                                        InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment> }}
                                                        required
                                                    />
                                                </Grid>
                                                <Grid item size={{ xs: 12, sm: 6 }}>
                                                    <TextField
                                                        fullWidth
                                                        type="number"
                                                        size="normal"
                                                        placeholder="Release of Fund"
                                                        value={formData.fundReleaseDays}
                                                        onChange={(e) => setFormData(prev => ({ ...prev, fundReleaseDays: e.target.value }))}
                                                        InputProps={{ endAdornment: <InputAdornment position="end">Days</InputAdornment> }}
                                                        required
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </Box>

                                    <Divider />

                                    {/* Additional Settings */}
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 500 }}>Additional Settings</Typography>
                                        <Grid container spacing={2}>
                                            <Grid item size={{ xs: 12, sm: 6 }}>
                                                <TextField
                                                    fullWidth
                                                    type="number"
                                                    size="normal"
                                                    placeholder="Early Payouts Limit"
                                                    value={formData.earlyPayouts}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, earlyPayouts: e.target.value }))}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item size={{ xs: 12, sm: 6 }}>
                                                <TextField
                                                    fullWidth
                                                    type="number"
                                                    size="normal"
                                                    placeholder="Plan Order"
                                                    value={formData.planOrder}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, planOrder: e.target.value }))}
                                                    required
                                                />
                                            </Grid>
                                        </Grid>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={formData.isPopular}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, isPopular: e.target.checked }))}
                                                />
                                            }
                                            label="Mark as Popular"
                                            sx={{ mt: 2 }}
                                        />
                                    </Box>

                                    <Divider />

                                    {/* Features */}
                                    <Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>Plan Features</Typography>
                                            <Button
                                                startIcon={<AddIcon />}
                                                onClick={addFeature}
                                                variant="outlined"
                                                size="small"
                                            >
                                                Add Feature
                                            </Button>
                                        </Box>
                                        <Stack spacing={2}>
                                            {features.map((feature, idx) => (
                                                <Paper key={idx} sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                                        <Typography variant="caption" sx={{ fontWeight: 500 }}>Feature {idx + 1}</Typography>
                                                        {features.length > 1 && (
                                                            <IconButton size="small" color="error" onClick={() => removeFeature(idx)}>
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
                                                                required
                                                            />
                                                        ))}
                                                    </Stack>
                                                </Paper>
                                            ))}
                                        </Stack>
                                    </Box>

                                    <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
                                        Create Plan
                                    </Button>
                                </Stack>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Settings Panel */}
                <Grid item size={{ xs: 12, lg: 5 }}>
                    <Card sx={{ boxShadow: 2 }}>
                        <CardContent sx={{ p: 3 }}>
                            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>System Settings</Typography>
                            <form onSubmit={handleSettingsSubmit}>
                                <Stack spacing={3}>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 500 }}>Membership System Status</Typography>
                                        <RadioGroup
                                            value={settings.membershipStatus}
                                            onChange={(e) => setSettings(prev => ({ ...prev, membershipStatus: e.target.value }))}
                                        >
                                            <FormControlLabel value="1" control={<Radio />} label="Enable" />
                                            <FormControlLabel value="0" control={<Radio />} label="Disable" />
                                        </RadioGroup>
                                    </Box>

                                    <Divider />

                                    <Paper sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1, border: '1px solid', borderColor: 'divider' }}>
                                        <Typography variant="caption" sx={{ color: 'primary.main' }}>
                                            Enable or disable the membership system for your platform. When disabled, users won't be able to purchase membership plans.
                                        </Typography>
                                    </Paper>

                                    <Button type="submit" variant="contained" color="primary" size="large">
                                        Save Settings
                                    </Button>
                                </Stack>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Edit Plan Drawer */}
            <EditPlanDrawer
                open={editDrawerOpen}
                onClose={closeEditDrawer}
                plan={editingPlan}
                formData={editFormData}
                setFormData={setEditFormData}
                features={editFeatures}
                setFeatures={setEditFeatures}
                onSubmit={handleEditSubmit}
            />
        </Container>
    );
}

export default MembershipPlansPageWrapper;
