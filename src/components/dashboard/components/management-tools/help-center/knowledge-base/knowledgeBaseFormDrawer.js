'use client';
import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Drawer,
    Box,
    TextField,
    Button,
    Stack,
    Typography,
    FormControl,
    Select,
    MenuItem,
    Divider,
    FormHelperText,
} from '@mui/material';
import { Image as ImageIcon } from '@mui/icons-material';
import TextEditor from '@/components/shared/textEditor';

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    slug: Yup.string(),
    language: Yup.string().required('Language is required'),
    category: Yup.string().required('Category is required'),
    order: Yup.number().min(1, 'Order must be at least 1').required('Order is required'),
    content: Yup.string().required('Content is required'),
});

const languageOptions = {
    '1': 'English',
    '3': 'German',
    '4': 'French',
    '5': 'Italian',
    '6': 'Spanish',
};

const categoryOptions = {
    '1': 'Account',
    '7': 'Vendors',
    '3': 'Order & Returns',
    '4': 'Shipping & Delivery',
    '5': 'Earnings & Payouts',
    '6': 'Payment',
};

function KnowledgeBaseFormDrawer({ open, onClose, article, onSubmit }) {
    const fileInputRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            title: '',
            slug: '',
            language: '',
            category: '',
            order: '1',
            content: '',
        },
        validationSchema,
        onSubmit: (values) => {
            onSubmit(values);
            onClose();
        },
    });

    useEffect(() => {
        if (article && open) {
            formik.setValues({
                title: article.title || '',
                slug: article.slug || '',
                language: article.language || '',
                category: article.category || '',
                order: article.order || '1',
                content: article.content || '',
            });
        } else if (open) {
            formik.resetForm();
        }
    }, [article, open]);

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log('Image uploaded:', file);
        }
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: 500 } }}>
            <Box sx={{ p: 3, height: '100%', overflow: 'auto' }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                    {article ? 'Edit Article' : 'Add Article'}
                </Typography>

                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={3}>
                        {/* Title */}
                        <TextField
                            fullWidth
                            size="normal"
                            placeholder="Title"
                            {...formik.getFieldProps('title')}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />

                        {/* Slug */}
                        <TextField
                            fullWidth
                            size="normal"
                            placeholder="Slug (auto-generated if empty)"
                            {...formik.getFieldProps('slug')}
                        />

                        <Divider />

                        {/* Language */}
                        <FormControl fullWidth error={formik.touched.language && Boolean(formik.errors.language)}>
                            <Select
                                {...formik.getFieldProps('language')}
                                displayEmpty
                                size="normal"
                                renderValue={(value) => value ? languageOptions[value] : 'Select Language'}
                            >
                                <MenuItem value="1">English</MenuItem>
                                <MenuItem value="3">German</MenuItem>
                                <MenuItem value="4">French</MenuItem>
                                <MenuItem value="5">Italian</MenuItem>
                                <MenuItem value="6">Spanish</MenuItem>
                            </Select>
                            {formik.touched.language && formik.errors.language && (
                                <FormHelperText>{formik.errors.language}</FormHelperText>
                            )}
                        </FormControl>

                        {/* Category */}
                        <FormControl fullWidth error={formik.touched.category && Boolean(formik.errors.category)}>
                            <Select
                                {...formik.getFieldProps('category')}
                                displayEmpty
                                size="normal"
                                renderValue={(value) => value ? categoryOptions[value] : 'Select Category'}
                            >
                                <MenuItem value="1">Account</MenuItem>
                                <MenuItem value="7">Vendors</MenuItem>
                                <MenuItem value="3">Order & Returns</MenuItem>
                                <MenuItem value="4">Shipping & Delivery</MenuItem>
                                <MenuItem value="5">Earnings & Payouts</MenuItem>
                                <MenuItem value="6">Payment</MenuItem>
                            </Select>
                            {formik.touched.category && formik.errors.category && (
                                <FormHelperText>{formik.errors.category}</FormHelperText>
                            )}
                        </FormControl>

                        {/* Order */}
                        <TextField
                            fullWidth
                            type="number"
                            size="normal"
                            placeholder="Order"
                            {...formik.getFieldProps('order')}
                            error={formik.touched.order && Boolean(formik.errors.order)}
                            helperText={formik.touched.order && formik.errors.order}
                            inputProps={{ min: '1' }}
                        />

                        <Divider />

                        {/* Content */}
                        <Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>Content</Typography>
                                <Button
                                    type="button"
                                    variant="outlined"
                                    size="small"
                                    startIcon={<ImageIcon />}
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    Add Image
                                </Button>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    style={{ display: 'none' }}
                                />
                            </Box>
                            <TextEditor
                                initialValue={formik.values.content}
                            />
                            {formik.touched.content && formik.errors.content && (
                                <Typography variant="caption" sx={{ color: 'error.main' }}>
                                    {formik.errors.content}
                                </Typography>
                            )}
                        </Box>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ mt: 2 }}
                            disabled={formik.isSubmitting}
                        >
                            {article ? 'Update Article' : 'Add Article'}
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Drawer>
    );
}

export default KnowledgeBaseFormDrawer;
