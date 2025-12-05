'use client';
import { Card, CardContent, CardHeader, Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, CircularProgress, List, ListItem, ListItemText, Alert, Grid, TextField, Container } from '@mui/material';
import { Download as DownloadIcon, Help as HelpIcon } from '@mui/icons-material';
import FileUpload from '@/components/shared/uploads';
import React, { useState } from 'react';

const currencies = [
    'USD', 'EUR', 'DKK', 'GBP', 'SEK', 'CAD', 'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN',
    'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYR', 'BZD',
    'CDF', 'CHF', 'CLF', 'CLP', 'CNY', 'COP', 'CRC', 'CUP', 'CVE', 'CZK', 'DJF', 'DOP', 'DZD', 'EGP', 'ETB',
    'FJD', 'FKP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR',
    'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW',
    'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTL', 'LVL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD',
    'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR',
    'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR',
    'SBD', 'SCR', 'SDG', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT',
    'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF',
    'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMK', 'ZWL'
];

const listingTypes = [
    { value: 'sell_on_site', label: 'Add a Product for Sale' },
    { value: 'ordinary_listing', label: 'Add a Product or Service as an Ordinary Listing' },
    { value: 'bidding', label: 'Add a Product to Receive Quote (Price) Requests' }
];

function BulkProductUpload() {
    const [listingType, setListingType] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const [categorySearch, setCategorySearch] = useState('');
    const [categoryResults, setCategoryResults] = useState([]);

    const handleFileSelect = (selectedFile) => {
        setFile(selectedFile);
        setFileNames([selectedFile.name]);
    };

    const handleFileRemove = () => {
        setFile(null);
        setFileNames([]);
    };

    const handleUpload = async () => {
        if (!file || !listingType) {
            alert('Please select listing type and CSV file');
            return;
        }

        setUploading(true);
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('listingType', listingType);
            formData.append('currency', currency);

            const response = await fetch('/api/bulk-upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setUploadedFiles([...uploadedFiles, { name: file.name, status: 'completed' }]);
                setFile(null);
                setFileNames([]);
            }
        } catch (error) {
            console.error('Upload error:', error);
        } finally {
            setUploading(false);
        }
    };

    const handleReset = () => {
        setFile(null);
        setFileNames([]);
        setListingType('');
        setCurrency('USD');
    };

    const handleDownloadTemplate = () => {
        console.log('Download CSV Template');
    };

    const handleDownloadExample = () => {
        console.log('Download CSV Example');
    };

    const handleCategorySearch = (e) => {
        const value = e.target.value;
        setCategorySearch(value);
        if (value.length > 0) {
            setCategoryResults([
                { id: 1, name: 'Electronics' },
                { id: 2, name: 'Fashion' },
                { id: 3, name: 'Home & Garden' }
            ]);
        } else {
            setCategoryResults([]);
        }
    };

    return (
        <Container maxWidth={false}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Card>
                        <CardHeader title="Bulk Product Upload" />
                        <CardContent>
                            <Alert severity="info" sx={{ mb: 2 }}>
                                <Typography variant="body2">You can add your products with a CSV file from this section</Typography>
                            </Alert>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <FormControl fullWidth>
                                    <Select value={listingType}
                                        displayEmpty
                                        renderValue={(selected) => (
                                            <Typography
                                                variant="body2"
                                                component="span"
                                                sx={{ fontWeight: 600, color: 'text.secondary' }}
                                            >
                                                {selected || 'Listing Type'}
                                            </Typography>
                                        )}
                                        size='normal'
                                        onChange={(e) => setListingType(e.target.value)}>

                                        {listingTypes.map((type) => (
                                            <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth>
                                    <Select value={currency}
                                        displayEmpty
                                        renderValue={(selected) => (
                                            <Typography
                                                variant="body2"
                                                component="span"
                                                sx={{ fontWeight: 600, color: 'text.secondary' }}
                                            >
                                                {selected || 'Currency'}
                                            </Typography>
                                        )}
                                        size='normal' onChange={(e) => setCurrency(e.target.value)}>
                                        {currencies.map((curr) => (
                                            <MenuItem key={curr} value={curr}>{curr}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FileUpload
                                    accept=".csv"
                                    maxSize={10 * 1024 * 1024}
                                    multiple={false}
                                    onFileSelect={handleFileSelect}
                                    onFileRemove={handleFileRemove}
                                    previews={file ? ['data:text/csv;base64,'] : []}
                                    fileNames={fileNames}
                                    placeholder="Drag and drop CSV file here or"
                                    description="CSV format, max 10MB"
                                />

                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Button variant="contained" color="primary" onClick={handleUpload} disabled={uploading || !file}>
                                        {uploading ? <CircularProgress size={24} /> : 'Upload'}
                                    </Button>
                                    <Button variant="outlined" onClick={handleReset}>Reset</Button>
                                </Box>

                                {uploadedFiles.length > 0 && (
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ mb: 1 }}>Uploaded Files</Typography>
                                        <List>
                                            {uploadedFiles.map((f, idx) => (
                                                <ListItem key={idx}>
                                                    <ListItemText primary={f.name} secondary={f.status} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                )}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Card>
                            <CardHeader title="Help Documents" subheader="You can use these documents to generate your CSV file" />
                            <CardContent>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Button fullWidth variant="contained" color="success" startIcon={<DownloadIcon />} onClick={handleDownloadTemplate}>
                                        Download CSV Template
                                    </Button>
                                    <Button fullWidth variant="contained" color='primary' startIcon={<DownloadIcon />} onClick={handleDownloadExample}>
                                        Download CSV Example
                                    </Button>
                                    <Button fullWidth variant="contained" color='secondary' startIcon={<HelpIcon />}>
                                        Documentation
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader title="Category Id Finder" subheader="You can use this section to find out the Id of a category" />
                            <CardContent>
                                <TextField
                                    fullWidth
                                    size="small"
                                    placeholder="Category Name"
                                    value={categorySearch}
                                    onChange={handleCategorySearch}
                                    sx={{ mb: 1 }}
                                />
                                {categoryResults.length > 0 && (
                                    <List sx={{ maxHeight: 200, overflow: 'auto' }}>
                                        {categoryResults.map((cat) => (
                                            <ListItem key={cat.id} sx={{ py: 0.5 }}>
                                                <ListItemText primary={cat.name} secondary={`ID: ${cat.id}`} />
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default BulkProductUpload;
