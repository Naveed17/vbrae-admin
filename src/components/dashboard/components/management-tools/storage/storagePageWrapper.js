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
} from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';

function StoragePageWrapper() {
    const [storageType, setStorageType] = useState('local');
    const [awsData, setAwsData] = useState({
        aws_key: '',
        aws_secret: '',
        aws_bucket: '',
        aws_region: '',
        aws_base_url: 'https://s3.amazonaws.com/',
    });

    const handleStorageChange = (e) => {
        setStorageType(e.target.value);
    };

    const handleAwsChange = (field, value) => {
        setAwsData(prev => ({ ...prev, [field]: value }));
    };

    const handleSaveStorage = () => {
        console.log('Storage type saved:', storageType);
    };

    const handleSaveAws = () => {
        console.log('AWS settings saved:', awsData);
    };

    return (
        <Container maxWidth={false}>
            <Grid container spacing={3}>
                {/* Storage Selection */}
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Card sx={{ boxShadow: 2, height: '100%' }}>
                        <CardHeader
                            title="Storage Configuration"
                            sx={{ borderBottom: 1, borderColor: 'divider', pb: 2 }}
                        />
                        <CardContent sx={{ p: 3 }}>
                            <Stack spacing={3}>
                                <Box>
                                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                                        Select Storage Type
                                    </Typography>
                                    <RadioGroup
                                        value={storageType}
                                        onChange={handleStorageChange}
                                    >
                                        <FormControlLabel
                                            value="local"
                                            control={<Radio />}
                                            label={
                                                <Box>
                                                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                        Local Storage
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                                        Store files on your server
                                                    </Typography>
                                                </Box>
                                            }
                                        />
                                        <FormControlLabel
                                            value="aws_s3"
                                            control={<Radio />}
                                            label={
                                                <Box>
                                                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                        AWS S3 Storage
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                                        Store files on Amazon S3
                                                    </Typography>
                                                </Box>
                                            }
                                        />
                                    </RadioGroup>
                                </Box>

                                <Divider />

                                <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
                                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                        Current Storage: <strong>{storageType === 'local' ? 'Local Storage' : 'AWS S3 Storage'}</strong>
                                    </Typography>
                                </Box>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<SaveIcon />}
                                    onClick={handleSaveStorage}
                                    fullWidth
                                >
                                    Save Storage Type
                                </Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                {/* AWS S3 Configuration */}
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Card sx={{ boxShadow: 2, height: '100%' }}>
                        <CardHeader
                            title="AWS S3 Configuration"
                            sx={{ borderBottom: 1, borderColor: 'divider', pb: 2 }}
                        />
                        <CardContent sx={{ p: 3 }}>
                            <Stack spacing={2.5}>
                                <TextField
                                    fullWidth
                                    size="normal"
                                    placeholder="AWS Access Key"
                                    value={awsData.aws_key}
                                    onChange={(e) => handleAwsChange('aws_key', e.target.value)}
                                />

                                <TextField
                                    fullWidth
                                    size="normal"
                                    placeholder="AWS Secret Key"
                                    type="password"
                                    value={awsData.aws_secret}
                                    onChange={(e) => handleAwsChange('aws_secret', e.target.value)}
                                />

                                <TextField
                                    fullWidth
                                    size="normal"
                                    placeholder="Bucket Name"
                                    value={awsData.aws_bucket}
                                    onChange={(e) => handleAwsChange('aws_bucket', e.target.value)}
                                />

                                <TextField
                                    fullWidth
                                    size="normal"
                                    placeholder="Region (e.g: us-east-1)"
                                    value={awsData.aws_region}
                                    onChange={(e) => handleAwsChange('aws_region', e.target.value)}
                                />

                                <TextField
                                    fullWidth
                                    size="normal"
                                    placeholder="AWS Base URL"
                                    value={awsData.aws_base_url}
                                    onChange={(e) => handleAwsChange('aws_base_url', e.target.value)}
                                />

                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<SaveIcon />}
                                    onClick={handleSaveAws}
                                    fullWidth
                                >
                                    Save AWS Settings
                                </Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default StoragePageWrapper;
