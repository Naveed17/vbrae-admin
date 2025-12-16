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
} from '@mui/material';
import { Save as SaveIcon, Refresh as RefreshIcon } from '@mui/icons-material';

function CacheSystemPageWrapper() {
    const [productCache, setProductCache] = useState({
        status: '1',
        refreshOnChange: '1',
        refreshTime: '60',
    });

    const [staticCache, setStaticCache] = useState({
        status: '1',
    });

    const handleProductChange = (field, value) => {
        setProductCache(prev => ({ ...prev, [field]: value }));
    };

    const handleStaticChange = (field, value) => {
        setStaticCache(prev => ({ ...prev, [field]: value }));
    };

    const handleSaveProduct = () => {
        console.log('Product cache settings saved:', productCache);
    };

    const handleResetProduct = () => {
        console.log('Product cache reset');
    };

    const handleSaveStatic = () => {
        console.log('Static cache settings saved:', staticCache);
    };

    const handleResetStatic = () => {
        console.log('Static cache reset');
    };

    return (
        <Container maxWidth={false}>
            <Grid container spacing={3}>
                {/* Product Cache System */}
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Card sx={{ boxShadow: 2, height: '100%' }}>
                        <CardHeader
                            title="Product Cache System"
                            sx={{ borderBottom: 1, borderColor: 'divider', pb: 2 }}
                        />
                        <CardContent sx={{ p: 3 }}>
                            <Stack spacing={3}>
                                {/* Status */}
                                <Box>
                                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                                        Status
                                    </Typography>
                                    <RadioGroup
                                        row
                                        value={productCache.status}
                                        onChange={(e) => handleProductChange('status', e.target.value)}
                                    >
                                        <FormControlLabel
                                            value="1"
                                            control={<Radio />}
                                            label="Enable"
                                        />
                                        <FormControlLabel
                                            value="0"
                                            control={<Radio />}
                                            label="Disable"
                                        />
                                    </RadioGroup>
                                </Box>

                                <Divider />

                                {/* Refresh on Database Changes */}
                                <Box>
                                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                                        Refresh Cache Files When Database Changes
                                    </Typography>
                                    <RadioGroup
                                        row
                                        value={productCache.refreshOnChange}
                                        onChange={(e) => handleProductChange('refreshOnChange', e.target.value)}
                                    >
                                        <FormControlLabel
                                            value="1"
                                            control={<Radio />}
                                            label="Yes"
                                        />
                                        <FormControlLabel
                                            value="0"
                                            control={<Radio />}
                                            label="No"
                                        />
                                    </RadioGroup>
                                </Box>

                                <Divider />

                                {/* Cache Refresh Time */}
                                <Box>
                                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                                        Cache Refresh Time (Minute)
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1.5 }}>
                                        After this time, your cache files will be refreshed.
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        size="normal"
                                        placeholder="Cache Refresh Time (Minute)"
                                        value={productCache.refreshTime}
                                        onChange={(e) => handleProductChange('refreshTime', e.target.value)}
                                    />
                                </Box>

                                <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<SaveIcon />}
                                        onClick={handleSaveProduct}
                                        fullWidth
                                    >
                                        Save Changes
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="warning"
                                        startIcon={<RefreshIcon />}
                                        onClick={handleResetProduct}
                                        fullWidth
                                    >
                                        Reset Cache
                                    </Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Static Content Cache System */}
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Card sx={{ boxShadow: 2, height: '100%' }}>
                        <CardHeader
                            title="Static Content Cache System"
                            sx={{ borderBottom: 1, borderColor: 'divider', pb: 2 }}
                        />
                        <CardContent sx={{ p: 3 }}>
                            <Stack spacing={3}>
                                {/* Status */}
                                <Box>
                                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                                        Status
                                    </Typography>
                                    <RadioGroup
                                        row
                                        value={staticCache.status}
                                        onChange={(e) => handleStaticChange('status', e.target.value)}
                                    >
                                        <FormControlLabel
                                            value="1"
                                            control={<Radio />}
                                            label="Enable"
                                        />
                                        <FormControlLabel
                                            value="0"
                                            control={<Radio />}
                                            label="Disable"
                                        />
                                    </RadioGroup>
                                </Box>

                                <Divider />

                                <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<SaveIcon />}
                                        onClick={handleSaveStatic}
                                        fullWidth
                                    >
                                        Save Changes
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="warning"
                                        startIcon={<RefreshIcon />}
                                        onClick={handleResetStatic}
                                        fullWidth
                                    >
                                        Reset Cache
                                    </Button>
                                </Stack>

                                <Alert severity="info" sx={{ mt: 3 }}>
                                    <Typography variant="body2">
                                        <strong>Info:</strong> Static content cache system is for records (categories, custom fields, language translations etc.) that do not change much on the site. The cache files will be refreshed automatically when there is a change in these records. It is recommended to activate this system always for a faster site.
                                    </Typography>
                                </Alert>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CacheSystemPageWrapper;
