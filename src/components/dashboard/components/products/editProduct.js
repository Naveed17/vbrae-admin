'use client';
import { useState } from 'react';
import Image from 'next/image';
import QuillEditor from './QuillEditor';
import {
    Card,
    CardContent,
    CardHeader,
    Container,
    Box,
    TextField,
    Select,
    MenuItem,
    Button,
    Grid,
    Alert,
    CircularProgress,
    FormControl,
    Stack,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography,
    IconButton,
    Collapse,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    useTheme,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import FileUpload from '@/components/shared/uploads';

const CATEGORIES = [
    { id: '135', name: 'PSN' },
    { id: '134', name: 'XBOX' },
    { id: '139', name: 'GIFT CARDS' },
    { id: '146', name: 'NINTENDO' },
    { id: '158', name: 'PC GAMING' },
    { id: '168', name: 'SHOP THE BEST SOFTWARE KEYS' },
    { id: '175', name: 'VR GAMES' },
    { id: '169', name: 'WEEKLY DEALS' },
];

const COUNTRIES = ['Global', 'Afghanistan', 'Albania', 'Algeria', 'United States', 'United Kingdom'];

export default function EditProduct({ productId, onClose }) {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        id: productId || '2806',
        title: 'Ashampoo Privacy Inspector 2 Activation Key (Lifetime / 1 PC)',
        slug: 'ashampoo-privacy-inspector-2-activation-key-lifetime-1-pc',
        listing_type: 'license_key',
        category_id: '168',
        country: 'Global',
        genres: 'Software',
        is_sold: '0',
        visibility: '1',
        description_en: '',
        seo_title_en: '',
        seo_description_en: '',
        seo_keywords_en: '',
        images: [
            'https://cdn.vbrae.com/images/assets/img/template-image/c_35708.webp',
            'https://cdn.vbrae.com/images/assets/img/template-image/07774.webp',
            'https://cdn.vbrae.com/images/assets/img/template-image/48862.webp',
            'https://cdn.vbrae.com/images/assets/img/template-image/37180.webp',
            'https://cdn.vbrae.com/images/assets/img/template-image/18238.webp',
            'https://cdn.vbrae.com/images/assets/img/template-image/57521.webp',
        ],
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [uploadLoading, setUploadLoading] = useState(false);
    const [uploadError, setUploadError] = useState(null);
    const [expandedDetails, setExpandedDetails] = useState(true);
    const [imageDialogOpen, setImageDialogOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileSelect = (files) => {
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
                        setFormData(prev => ({
                            ...prev,
                            images: [...prev.images, ...newPreviews]
                        }));
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
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
    };

    const handleUseImage = () => {
        setImageDialogOpen(false);
        setSelectedImage(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/products/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setMessage({ type: 'success', text: 'Product updated successfully!' });
                setTimeout(() => onClose?.(), 1500);
            } else {
                setMessage({ type: 'error', text: 'Failed to update product' });
                setTimeout(() => onClose?.(), 1500);
            }
        } catch (error) {
            setMessage({ type: 'error', text: error.message });
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setFormData({
            id: productId || '2806',
            title: 'Ashampoo Privacy Inspector 2 Activation Key (Lifetime / 1 PC)',
            slug: 'ashampoo-privacy-inspector-2-activation-key-lifetime-1-pc',
            listing_type: 'license_key',
            category_id: '168',
            country: 'Global',
            genres: 'Software',
            is_sold: '0',
            visibility: '1',
            description_en: '',
            seo_title_en: '',
            seo_description_en: '',
            seo_keywords_en: '',
            images: [
                'https://cdn.vbrae.com/images/assets/img/template-image/c_35708.webp',
                'https://cdn.vbrae.com/images/assets/img/template-image/07774.webp',
                'https://cdn.vbrae.com/images/assets/img/template-image/48862.webp',
                'https://cdn.vbrae.com/images/assets/img/template-image/37180.webp',
                'https://cdn.vbrae.com/images/assets/img/template-image/18238.webp',
                'https://cdn.vbrae.com/images/assets/img/template-image/57521.webp',
            ],
        });
        setMessage(null);
    };

    return (
        <Container maxWidth={false} sx={{ py: 3 }}>
            {message && (
                <Alert severity={message.type} sx={{ mb: 3 }} onClose={() => setMessage(null)}>
                    {message.text}
                </Alert>
            )}

            <Grid container spacing={3}>
                {/* Images Section */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card>
                        <CardHeader title="Product Images" />
                        <CardContent>
                            <FileUpload
                                accept=".png,.jpg,.jpeg,.webp"
                                maxSize={5 * 1024 * 1024}
                                multiple={true}
                                onFileSelect={handleFileSelect}
                                onFileRemove={handleFileRemove}
                                previews={formData.images}
                                fileNames={formData.images.map((_, i) => `Image ${i + 1}`)}
                                placeholder="Drag and drop images here"
                                description="PNG/JPG/WEBP format, max 5MB"
                                error={uploadError}
                                loading={uploadLoading}
                            />
                            <Typography variant="caption" sx={{ mt: 2, display: 'block', color: 'text.secondary' }}>
                                💡 Products with good and clear images are sold faster!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Edit Form */}
                <Grid size={{ xs: 12, md: 8 }}>
                    <Card>
                        <CardHeader title="Edit Product" />
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Listing Type</FormLabel>
                                    <RadioGroup
                                        name="listing_type"
                                        value={formData.listing_type}
                                        onChange={handleInputChange}
                                        sx={{ mt: 1 }}
                                    >
                                        <FormControlLabel value="sell_on_site" control={<Radio />} label="Add a Product for Sale" />
                                        <FormControlLabel value="ordinary_listing" control={<Radio />} label="Add a Product or Service as an Ordinary Listing" />
                                        <FormControlLabel value="bidding" control={<Radio />} label="Add a Product to Receive Quote (Price) Requests" />
                                        <FormControlLabel value="license_key" control={<Radio />} label="Add a Product to Sell License Keys" />
                                    </RadioGroup>
                                </FormControl>

                                <FormControl fullWidth size="small">
                                    <Select
                                        name="category_id"
                                        value={formData.category_id}
                                        onChange={handleInputChange}
                                        size='normal'
                                    >
                                        {CATEGORIES.map(cat => (
                                            <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth size="small">
                                    <Select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        size='normal'
                                    >
                                        {COUNTRIES.map(country => (
                                            <MenuItem key={country} value={country}>{country}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <TextField
                                    name="genres"
                                    value={formData.genres}
                                    onChange={handleInputChange}
                                    placeholder="Genres"
                                    fullWidth
                                    size='normal'
                                />

                                <TextField
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Title"
                                    fullWidth
                                    multiline
                                    rows={2}
                                />

                                <TextField
                                    name="slug"
                                    value={formData.slug}
                                    onChange={handleInputChange}
                                    placeholder="Slug"
                                    fullWidth
                                />

                                <FormControl fullWidth size="small">
                                    <Select
                                        name="is_sold"
                                        value={formData.is_sold}
                                        onChange={handleInputChange}
                                        size='normal'
                                        displayEmpty
                                        renderValue={(selected) => (
                                            <Typography
                                                variant="body2"
                                                component="span"
                                                sx={{ fontWeight: 600, color: 'text.secondary' }}
                                            >
                                                {selected || 'Is sold'}
                                            </Typography>
                                        )}
                                    >
                                        <MenuItem value="0">Active</MenuItem>
                                        <MenuItem value="1">Sold</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth size="small">
                                    <Select
                                        name="visibility"
                                        size='normal'
                                        value={formData.visibility}
                                        onChange={handleInputChange}
                                        displayEmpty
                                        renderValue={(selected) => (
                                            <Typography
                                                variant="body2"
                                                component="span"
                                                sx={{ fontWeight: 600, color: 'text.secondary' }}
                                            >
                                                {selected || 'Select Visibility'}
                                            </Typography>
                                        )}
                                    >
                                        <MenuItem value="1">Visible</MenuItem>
                                        <MenuItem value="0">Hidden</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Stack spacing={2}>
                <Box>
                    <Button variant="contained" disabled={loading}>
                        Translate All
                    </Button>
                </Box>
                <Card>
                    <CardHeader
                        title="Details :English"
                        action={
                            <IconButton
                                onClick={() => setExpandedDetails(!expandedDetails)}
                                sx={{ transform: expandedDetails ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.3s' }}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        }
                        sx={{ pb: expandedDetails ? 0 : 2, transition: 'all .5s' }}
                    />
                    <Collapse in={expandedDetails}>
                        <CardContent>
                            <Stack spacing={.5} mb={2}>
                                <Typography fontWeight={600}>
                                    Title
                                </Typography>
                                <TextField size='normal' />
                            </Stack>
                            <Stack spacing={.5} mb={2}>
                                <Typography fontWeight={600}>
                                    Description
                                </Typography>
                                <Box>
                                    <Button variant='contained' onClick={() => setImageDialogOpen(true)}>
                                        Add Image
                                    </Button>
                                </Box>
                            </Stack>
                            <QuillEditor
                                value={formData.description_en}
                                onChange={(value) => setFormData(prev => ({ ...prev, description_en: value }))}
                                placeholder="Enter product details..."
                            />
                            <Stack spacing={2} mt={3}>
                                <Typography fontWeight={600}>SEO</Typography>
                                <TextField
                                    name="seo_title_en"
                                    value={formData.seo_title_en}
                                    onChange={handleInputChange}
                                    placeholder="Title"
                                    fullWidth
                                    size='normal'

                                />
                                <TextField
                                    name="seo_description_en"
                                    value={formData.seo_description_en}
                                    onChange={handleInputChange}
                                    placeholder="Description"
                                    fullWidth
                                    size='normal'


                                />
                                <TextField
                                    name="seo_keywords_en"
                                    value={formData.seo_keywords_en}
                                    onChange={handleInputChange}
                                    placeholder="Keywords (E.g. book, new, pencil)"
                                    fullWidth
                                    size='normal'


                                />
                            </Stack>
                        </CardContent>
                    </Collapse>
                </Card>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 3 }}>
                    <Button
                        variant="contained"
                        onClick={handleSave}
                        disabled={loading}
                        startIcon={loading && <CircularProgress size={20} />}
                    >
                        {loading ? 'Saving...' : 'Save Changes'}
                    </Button>
                    <Button
                        variant="outlined"
                        disabled={loading}
                    >
                        Edit Details
                    </Button>

                </Box>
            </Stack>

            <Dialog open={imageDialogOpen} onClose={() => setImageDialogOpen(false)} maxWidth="md" fullWidth>
                <DialogTitle>Images</DialogTitle>
                <DialogContent>
                    <Box sx={{ py: 2 }}>
                        <FileUpload
                            accept=".png,.jpg,.jpeg,.webp"
                            maxSize={5 * 1024 * 1024}
                            multiple={true}
                            onFileSelect={handleFileSelect}
                            onFileRemove={handleFileRemove}
                            previews={formData.images}
                            fileNames={formData.images.map((_, i) => `Image ${i + 1}`)}
                            placeholder="Drag and drop images here"
                            description="PNG/JPG/WEBP format, max 5MB"
                            error={uploadError}
                            loading={uploadLoading}
                            onSelectPreview={(idx) => setSelectedImage(idx)}
                            selectedPreview={selectedImage}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setImageDialogOpen(false)}>Close</Button>
                    {selectedImage !== null && (
                        <Button variant="contained" onClick={handleUseImage}>Select Image</Button>
                    )}
                </DialogActions>
            </Dialog>
        </Container>
    );
}
