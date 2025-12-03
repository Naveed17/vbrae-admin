'use client';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardHeader,
    Container,
    Box,
    Typography,
    Chip,
    Grid,
    Link,
    Avatar,
    Rating,
    Button,
} from '@mui/material';
import { Close as CloseIcon, Edit as EditIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import EditProduct from './editProduct';
import React from 'react';

const productData = {
    id: '2806',
    title: 'Ashampoo Privacy Inspector 2 Activation Key (Lifetime / 1 PC)',
    slug: 'ashampoo-privacy-inspector-2-activation-key-lifetime-1-pc',
    url: 'https://vbrae.com/ashampoo-privacy-inspector-2-activation-key-lifetime-1-pc',
    images: [
        'https://cdn.vbrae.com/images/assets/img/template-image/c_35708.webp',
        'https://cdn.vbrae.com/images/assets/img/template-image/07774.webp',
        'https://cdn.vbrae.com/images/assets/img/template-image/48862.webp',
        'https://cdn.vbrae.com/images/assets/img/template-image/37180.webp',
        'https://cdn.vbrae.com/images/assets/img/template-image/18238.webp',
        'https://cdn.vbrae.com/images/assets/img/template-image/57521.webp',
    ],
    status: 'Active',
    visibility: 'Visible',
    product_type: 'Digital',
    category: 'SHOP THE BEST SOFTWARE KEYS',
    price: '€40 EUR',
    stock: 'In Stock',
    user: { name: 'Freaky', avatar: 'https://vbrae.com/uploads/profile/avatar_64cc30a46b4860-74061951-42543323.webp', url: 'https://vbrae.com/profile/freaky' },
    kyc: 'No',
    reviews: 0,
    rating: 0,
    page_views: 70,
    description: `<h1>Ashampoo Privacy Inspector 2 – PC Privacy & Security Software</h1>
<h2>Overview</h2>
<p>Ashampoo Privacy Inspector 2 is the successor to the original Privacy Inspector, built to help users monitor, analyze, and control personal data stored on their Windows PC.</p>
<h2>Key Features</h2>
<ul>
<li><strong>Activities Module:</strong> Lists all significant events and user actions on your PC.</li>
<li><strong>Internet Cleaner:</strong> Deletes browsing traces across all major browsers.</li>
<li><strong>File Wiper:</strong> Permanently erases sensitive files beyond recovery.</li>
</ul>`
};

function ProductDetailsPageWrapper() {
    const [selectedImage, setSelectedImage] = React.useState(productData.images[0]);
    const [isEditMode, setIsEditMode] = React.useState(false);

    const DetailRow = ({ label, value, isChip = false, isLink = false, isUser = false }) => (
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 2, py: 1.5, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>{label}</Typography>
            <Box>
                {isChip && <Chip label={value} size="small" color={value === 'Active' || value === 'Visible' ? 'success' : 'default'} />}
                {isLink && <Link href={value} target="_blank" rel="noopener" sx={{ fontSize: 12 }}>{value}</Link>}
                {isUser && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar src={value.avatar} sx={{ width: 40, height: 40 }} />
                        <Link href={value.url} target="_blank" rel="noopener" sx={{ fontSize: 12 }}>{value.name}</Link>
                    </Box>
                )}
                {!isChip && !isLink && !isUser && <Typography variant="body2">{value}</Typography>}
            </Box>
        </Box>
    );

    return (
        <Container maxWidth={false}>
            <AnimatePresence mode="wait">
                {isEditMode ? (
                    <motion.div
                        key="edit"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                    >
                        <EditProduct productId={productData.id} onClose={() => setIsEditMode(false)} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="details"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Grid container spacing={3}>
                            {/* Images Section */}
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Card>
                                    <CardContent>
                                        <Box sx={{ mb: 2, borderRadius: 1, overflow: 'hidden', height: 300, bgcolor: 'background.default' }}>
                                            <Image
                                                src={selectedImage}
                                                alt="Product"
                                                width={400}
                                                height={300}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </Box>
                                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
                                            {productData.images.map((img, idx) => (
                                                <Box
                                                    key={idx}
                                                    onClick={() => setSelectedImage(img)}
                                                    sx={{
                                                        cursor: 'pointer',
                                                        borderRadius: 1,
                                                        overflow: 'hidden',
                                                        border: selectedImage === img ? '2px solid' : '1px solid',
                                                        borderColor: selectedImage === img ? 'primary.main' : 'divider',
                                                        height: 80,
                                                    }}
                                                >
                                                    <Image
                                                        src={img}
                                                        alt="Thumbnail"
                                                        width={100}
                                                        height={80}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                </Box>
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Details Section */}
                            <Grid size={{ xs: 12, md: 8 }}>
                                <Card>
                                    <CardHeader title="Product Details" />
                                    <CardContent>
                                        <DetailRow label="Link" value={productData.url} isLink />
                                        <DetailRow label="Status" value={productData.status} isChip />
                                        <DetailRow label="Visibility" value={productData.visibility} isChip />
                                        <DetailRow label="Id" value={productData.id} />
                                        <DetailRow label="Title" value={productData.title} />
                                        <DetailRow label="Slug" value={productData.slug} />
                                        <DetailRow label="Product Type" value={productData.product_type} />
                                        <DetailRow label="Category" value={productData.category} />
                                        <DetailRow label="Price" value={productData.price} />
                                        <DetailRow label="Stock" value={productData.stock} />
                                        <DetailRow label="User" value={productData.user} isUser />
                                        <DetailRow label="KYC" value={productData.kyc} />
                                        <Box sx={{ py: 1.5, borderBottom: '1px solid', borderColor: 'divider' }}>
                                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary', mb: 1 }}>Reviews</Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Rating value={productData.rating} readOnly size="small" />
                                                <Typography variant="body2">({productData.reviews})</Typography>
                                            </Box>
                                        </Box>
                                        <DetailRow label="Page Views" value={productData.page_views} />
                                    </CardContent>
                                </Card>

                                {/* Description */}
                                <Card sx={{ mt: 3 }}>
                                    <CardHeader title="Description" />
                                    <CardContent>
                                        <Box
                                            sx={{
                                                '& h1': { fontSize: 20, fontWeight: 700, mb: 2 },
                                                '& h2': { fontSize: 16, fontWeight: 600, mb: 1.5, mt: 2 },
                                                '& p': { mb: 1.5, lineHeight: 1.6 },
                                                '& ul': { pl: 2, mb: 1.5 },
                                                '& li': { mb: 0.5 },
                                            }}
                                            dangerouslySetInnerHTML={{ __html: productData.description }}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', gap: 2, mt: 3, justifyContent: 'flex-end' }}>
                            <Button variant="outlined" color="error" startIcon={<CloseIcon />}>
                                Reject
                            </Button>
                            <Button variant="contained" startIcon={<EditIcon />} onClick={() => setIsEditMode(true)}>
                                Edit
                            </Button>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    );
}

export default ProductDetailsPageWrapper;
