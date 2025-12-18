'use client';
import { Card, CardContent, CardHeader, Container, Button, Box, FormControlLabel, Radio, RadioGroup, Typography, Grid, Alert, useTheme, Divider } from '@mui/material';
import React, { useState } from 'react';

function PreferencesPageWrapper() {
    const theme = useTheme();
    const [general, setGeneral] = useState({
        multilingual_system: '1',
        rss_system: '1',
        vendor_verification_system: '1',
        hide_vendor_contact_information: '1',
        guest_checkout: '0',
        location_search_header: '0',
        pwa_status: '0',
    });

    const [products, setProducts] = useState({
        approve_before_publishing: '0',
        promoted_products: '1',
        vendor_bulk_product_upload: '1',
        show_sold_products: '1',
        product_link_structure: 'slug-id',
    });

    const [reviewsComments, setReviewsComments] = useState({
        reviews: '1',
        product_comments: '1',
        blog_comments: '1',
        comment_approval_system: '1',
    });

    const [shop, setShop] = useState({
        request_documents_vendors: '0',
    });

    const handleGeneralChange = (field, value) => {
        setGeneral({ ...general, [field]: value });
    };

    const handleProductsChange = (field, value) => {
        setProducts({ ...products, [field]: value });
    };

    const handleReviewsCommentsChange = (field, value) => {
        setReviewsComments({ ...reviewsComments, [field]: value });
    };

    const handleShopChange = (field, value) => {
        setShop({ ...shop, [field]: value });
    };

    const handleSave = (section) => {
        console.log(`Save ${section}:`, { general, products, reviewsComments, shop }[section]);
    };

    const PreferenceOption = ({ label, field, value, onChange, options, helper }) => (
        <Box sx={{ mb: 2.5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Box>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: theme.palette.text.primary }}>
                        {label}
                    </Typography>
                    {helper && <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mt: 0.5 }}>{helper}</Typography>}
                </Box>
                <RadioGroup row value={value} onChange={(e) => onChange(field, e.target.value)} sx={{ ml: 2 }}>
                    {options.map(opt => (
                        <FormControlLabel key={opt.value} value={opt.value} control={<Radio size="small" />} label={<Typography variant="caption">{opt.label}</Typography>} />
                    ))}
                </RadioGroup>
            </Box>
            <Divider sx={{ mt: 1.5 }} />
        </Box>
    );

    const PreferenceCard = ({ title, children, onSave }) => (
        <Card sx={{
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
        }}>
            <CardHeader
                title={title}
                sx={{
                    pb: 2,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    '& .MuiCardHeader-title': {
                        fontSize: '1rem',
                        fontWeight: 600,
                    }
                }}
            />
            <CardContent sx={{ pt: 3 }}>
                {children}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onSave}
                    fullWidth
                    sx={{ mt: 2, textTransform: 'none', fontWeight: 500 }}
                >
                    Save Changes
                </Button>
            </CardContent>
        </Card>
    );

    return (
        <Container maxWidth={false} sx={{ py: 3 }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Preferences</Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>Manage your system settings and preferences</Typography>
            </Box>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <PreferenceCard title="General" onSave={() => handleSave('general')}>
                        <PreferenceOption
                            label="Multilingual System"
                            field="multilingual_system"
                            value={general.multilingual_system}
                            onChange={handleGeneralChange}
                            options={[
                                { value: '1', label: 'Enable' },
                                { value: '0', label: 'Disable' },
                            ]}
                        />
                        <PreferenceOption
                            label="RSS System"
                            field="rss_system"
                            value={general.rss_system}
                            onChange={handleGeneralChange}
                            options={[
                                { value: '1', label: 'Enable' },
                                { value: '0', label: 'Disable' },
                            ]}
                        />
                        <PreferenceOption
                            label="Vendor Verification System"
                            field="vendor_verification_system"
                            value={general.vendor_verification_system}
                            onChange={handleGeneralChange}
                            helper="Disable to allow all users to add products"
                            options={[
                                { value: '1', label: 'Enable' },
                                { value: '0', label: 'Disable' },
                            ]}
                        />
                        <PreferenceOption
                            label="Hide Vendor Contact Information"
                            field="hide_vendor_contact_information"
                            value={general.hide_vendor_contact_information}
                            onChange={handleGeneralChange}
                            options={[
                                { value: '1', label: 'Yes' },
                                { value: '0', label: 'No' },
                            ]}
                        />
                        <PreferenceOption
                            label="Guest Checkout"
                            field="guest_checkout"
                            value={general.guest_checkout}
                            onChange={handleGeneralChange}
                            options={[
                                { value: '1', label: 'Enable' },
                                { value: '0', label: 'Disable' },
                            ]}
                        />
                        <PreferenceOption
                            label="Search by Location"
                            field="location_search_header"
                            value={general.location_search_header}
                            onChange={handleGeneralChange}
                            options={[
                                { value: '1', label: 'Enable' },
                                { value: '0', label: 'Disable' },
                            ]}
                        />
                        <PreferenceOption
                            label="Progressive Web App (PWA)"
                            field="pwa_status"
                            value={general.pwa_status}
                            onChange={handleGeneralChange}
                            options={[
                                { value: '1', label: 'Enable' },
                                { value: '0', label: 'Disable' },
                            ]}
                        />
                        {general.pwa_status === '1' && (
                            <Alert severity="warning" sx={{ mt: 2, mb: 0 }}>
                                Read PWA documentation to complete setup
                            </Alert>
                        )}
                    </PreferenceCard>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <PreferenceCard title="Products" onSave={() => handleSave('products')}>
                        <PreferenceOption
                            label="Approve Products Before Publishing"
                            field="approve_before_publishing"
                            value={products.approve_before_publishing}
                            onChange={handleProductsChange}
                            options={[
                                { value: '1', label: 'Yes' },
                                { value: '0', label: 'No' },
                            ]}
                        />
                        <PreferenceOption
                            label="Featured Products System"
                            field="promoted_products"
                            value={products.promoted_products}
                            onChange={handleProductsChange}
                            options={[
                                { value: '1', label: 'Enable' },
                                { value: '0', label: 'Disable' },
                            ]}
                        />
                        <PreferenceOption
                            label="Vendor Bulk Product Upload"
                            field="vendor_bulk_product_upload"
                            value={products.vendor_bulk_product_upload}
                            onChange={handleProductsChange}
                            options={[
                                { value: '1', label: 'Enable' },
                                { value: '0', label: 'Disable' },
                            ]}
                        />
                        <PreferenceOption
                            label="Show Sold Products"
                            field="show_sold_products"
                            value={products.show_sold_products}
                            onChange={handleProductsChange}
                            options={[
                                { value: '1', label: 'Yes' },
                                { value: '0', label: 'No' },
                            ]}
                        />
                        <PreferenceOption
                            label="Product Link Structure"
                            field="product_link_structure"
                            value={products.product_link_structure}
                            onChange={handleProductsChange}
                            options={[
                                { value: 'slug-id', label: 'slug-id' },
                                { value: 'id-slug', label: 'id-slug' },
                            ]}
                        />
                    </PreferenceCard>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <PreferenceCard title="Reviews & Comments" onSave={() => handleSave('reviewsComments')}>
                        <PreferenceOption
                            label="Reviews"
                            field="reviews"
                            value={reviewsComments.reviews}
                            onChange={handleReviewsCommentsChange}
                            options={[
                                { value: '1', label: 'Enable' },
                                { value: '0', label: 'Disable' },
                            ]}
                        />
                        <PreferenceOption
                            label="Product Comments"
                            field="product_comments"
                            value={reviewsComments.product_comments}
                            onChange={handleReviewsCommentsChange}
                            options={[
                                { value: '1', label: 'Enable' },
                                { value: '0', label: 'Disable' },
                            ]}
                        />
                        <PreferenceOption
                            label="Blog Comments"
                            field="blog_comments"
                            value={reviewsComments.blog_comments}
                            onChange={handleReviewsCommentsChange}
                            options={[
                                { value: '1', label: 'Enable' },
                                { value: '0', label: 'Disable' },
                            ]}
                        />
                        <PreferenceOption
                            label="Comment Approval System"
                            field="comment_approval_system"
                            value={reviewsComments.comment_approval_system}
                            onChange={handleReviewsCommentsChange}
                            options={[
                                { value: '1', label: 'Enable' },
                                { value: '0', label: 'Disable' },
                            ]}
                        />
                    </PreferenceCard>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <PreferenceCard title="Shop" onSave={() => handleSave('shop')}>
                        <PreferenceOption
                            label="Request Documents from Vendors"
                            field="request_documents_vendors"
                            value={shop.request_documents_vendors}
                            onChange={handleShopChange}
                            options={[
                                { value: '1', label: 'Yes' },
                                { value: '0', label: 'No' },
                            ]}
                        />
                    </PreferenceCard>
                </Grid>
            </Grid>
        </Container>
    );
}

export default PreferencesPageWrapper;
