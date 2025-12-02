'use client';
import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Select,
    MenuItem,
    FormControl,
    FormLabel,
    Button,
    Box,
    Grid,
} from '@mui/material';
import FileUpload from '@/components/shared/uploads';

const animationOptions = [
    'none', 'bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello',
    'heartBeat', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp',
    'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight',
    'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flip', 'flipInX', 'flipInY', 'lightSpeedIn',
    'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
    'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'zoomIn', 'zoomInDown',
    'zoomInLeft', 'zoomInRight', 'zoomInUp', 'hinge', 'jackInTheBox', 'rollIn'
];

const validationSchema = Yup.object().shape({
    lang_id: Yup.string().required('Language is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string(),
    link: Yup.string().url('Invalid URL'),
    item_order: Yup.number().required('Order is required'),
    button_text: Yup.string(),
    text_color: Yup.string(),
    button_color: Yup.string(),
    button_text_color: Yup.string(),
    animation_title: Yup.string(),
    animation_description: Yup.string(),
    animation_button: Yup.string(),
});

export default function SliderForm({ open, onClose, onSubmit, editData = null }) {
    const [desktopPreview, setDesktopPreview] = useState(null);
    const [mobilePreview, setMobilePreview] = useState(null);
    const [desktopFile, setDesktopFile] = useState(null);
    const [mobileFile, setMobileFile] = useState(null);

    useEffect(() => {
        if (editData) {
            setDesktopPreview(editData.image || null);
            setMobilePreview(editData.mobile_image || null);
        } else {
            setDesktopPreview(null);
            setMobilePreview(null);
        }
        setDesktopFile(null);
        setMobileFile(null);
    }, [editData]);

    const getLanguageId = (language) => {
        const langMap = { 'English': '1', 'German': '3', 'French': '4', 'Italian': '5', 'Spanish': '6' };
        return langMap[language] || '1';
    };

    const handleDesktopUpload = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => setDesktopPreview(reader.result);
        reader.readAsDataURL(file);
        setDesktopFile(file);
    };

    const handleMobileUpload = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => setMobilePreview(reader.result);
        reader.readAsDataURL(file);
        setMobileFile(file);
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>{editData ? 'Edit Slider Item' : 'Add Slider Item'}</DialogTitle>
            <Formik
                enableReinitialize
                initialValues={{
                    lang_id: editData ? getLanguageId(editData.language) : '1',
                    title: editData?.title || '',
                    description: editData?.description || '',
                    link: editData?.link || '',
                    item_order: editData?.order || '',
                    button_text: editData?.button_text || '',
                    text_color: editData?.text_color || '#ffffff',
                    button_color: editData?.button_color || '#222222',
                    button_text_color: editData?.button_text_color || '#ffffff',
                    animation_title: editData?.animation_title || 'fadeInUp',
                    animation_description: editData?.animation_description || 'fadeInUp',
                    animation_button: editData?.animation_button || 'fadeInUp',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    onSubmit({
                        ...values,
                        desktop_image: desktopPreview,
                        mobile_image: mobilePreview,
                    });
                    onClose();
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, isSubmitting, resetForm }) => (
                    <Form>
                        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <FormControl fullWidth size="small">
                                <FormLabel>Language</FormLabel>
                                <Select
                                    size='normal'
                                    name="lang_id"
                                    value={values.lang_id}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <MenuItem value="1">English</MenuItem>
                                    <MenuItem value="3">German</MenuItem>
                                    <MenuItem value="4">French</MenuItem>
                                    <MenuItem value="5">Italian</MenuItem>
                                    <MenuItem value="6">Spanish</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                fullWidth
                                size="normal"
                                placeholder="Title"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.title && !!errors.title}
                                helperText={touched.title && errors.title}
                            />

                            <TextField
                                fullWidth
                                placeholder="Description"
                                name="description"
                                multiline
                                rows={3}
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            <TextField
                                fullWidth
                                size="normal"
                                placeholder="Link"
                                name="link"
                                value={values.link}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.link && !!errors.link}
                                helperText={touched.link && errors.link}
                            />

                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        size="normal"
                                        placeholder="Order"
                                        name="item_order"
                                        type="number"
                                        value={values.item_order}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.item_order && !!errors.item_order}
                                        helperText={touched.item_order && errors.item_order}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        size="normal"
                                        placeholder="Button Text"
                                        name="button_text"
                                        value={values.button_text}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={1}>
                                <Grid item xs={4}>
                                    <FormControl fullWidth size="small">
                                        <FormLabel>Text Color</FormLabel>
                                        <TextField
                                            type="color"
                                            name="text_color"
                                            value={values.text_color}
                                            onChange={handleChange}
                                            sx={{ mt: 1, input: { p: 1.5 } }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl fullWidth size="small">
                                        <FormLabel>Button Color</FormLabel>
                                        <TextField
                                            type="color"
                                            name="button_color"
                                            value={values.button_color}
                                            onChange={handleChange}
                                            sx={{ mt: 1, input: { p: 1.5 } }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl fullWidth size="small">
                                        <FormLabel>Button Text Color</FormLabel>
                                        <TextField
                                            type="color"
                                            name="button_text_color"
                                            value={values.button_text_color}
                                            onChange={handleChange}
                                            sx={{ mt: 1, input: { p: 1.5 } }}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Box>
                                <FormLabel sx={{ mb: 1, display: 'block' }}>Animations</FormLabel>
                                <Grid container spacing={1}>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth size="small">
                                            <Select
                                                name="animation_title"
                                                value={values.animation_title}
                                                onChange={handleChange}
                                            >
                                                {animationOptions.map(opt => (
                                                    <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth size="small">
                                            <Select
                                                name="animation_description"
                                                value={values.animation_description}
                                                onChange={handleChange}
                                            >
                                                {animationOptions.map(opt => (
                                                    <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth size="small">
                                            <Select
                                                name="animation_button"
                                                value={values.animation_button}
                                                onChange={handleChange}
                                            >
                                                {animationOptions.map(opt => (
                                                    <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box>
                                <FormLabel sx={{ mb: 1, display: 'block' }}>Desktop Image (1920x600)</FormLabel>
                                <FileUpload
                                    accept=".png,.jpg,.jpeg,.webp,.gif"
                                    maxSize={5 * 1024 * 1024}
                                    onFileSelect={handleDesktopUpload}
                                    previews={desktopPreview ? [desktopPreview] : []}
                                    fileNames={desktopPreview ? [desktopFile?.name || 'Current Image'] : []}
                                    fileSizes={desktopFile ? [`${(desktopFile.size / 1024 / 1024).toFixed(2)} MB`] : desktopPreview && !desktopFile ? ['Existing Image'] : []}
                                    onFileRemove={() => {
                                        setDesktopPreview(null);
                                        setDesktopFile(null);
                                    }}
                                    placeholder="Select Desktop Image"
                                />
                            </Box>

                            <Box>
                                <FormLabel sx={{ mb: 1, display: 'block' }}>Mobile Image (768x500)</FormLabel>
                                <FileUpload
                                    accept=".png,.jpg,.jpeg,.webp,.gif"
                                    maxSize={5 * 1024 * 1024}
                                    onFileSelect={handleMobileUpload}
                                    previews={mobilePreview ? [mobilePreview] : []}
                                    fileNames={mobilePreview ? [mobileFile?.name || 'Current Image'] : []}
                                    fileSizes={mobileFile ? [`${(mobileFile.size / 1024 / 1024).toFixed(2)} MB`] : mobilePreview && !mobileFile ? ['Existing Image'] : []}
                                    onFileRemove={() => {
                                        setMobilePreview(null);
                                        setMobileFile(null);
                                    }}
                                    placeholder="Select Mobile Image"
                                />
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => {
                                resetForm();
                                setDesktopPreview(null);
                                setMobilePreview(null);
                                setDesktopFile(null);
                                setMobileFile(null);

                                onClose();
                            }}>Cancel</Button>
                            <Button type="submit" variant="contained" disabled={isSubmitting}>
                                {editData ? 'Update Slider Item' : 'Add Slider Item'}
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>
    );
}