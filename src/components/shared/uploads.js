import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography, Paper, LinearProgress, Button, Grid, Alert } from '@mui/material';
import { CheckCircle, Error } from '@mui/icons-material';

export default function FileUpload({
    accept = '.png,.jpg,.jpeg',
    maxSize = 1024 * 1024,
    multiple = false,
    onFileSelect,
    onFileRemove,
    previews = [],
    fileNames = [],
    fileSizes = [],
    className = '',
    placeholder = 'Click to upload or drag & drop',
    description = 'PNG/JPG format, max 1MB',
    error,
    loading,
    success,
}) {
    const [uploadProgress, setUploadProgress] = useState(0);

    const validateFile = (file) => {
        if (file.size > maxSize) {
            const maxSizeMB = Math.round(maxSize / (1024 * 1024));
            return `File size must be less than ${maxSizeMB}MB`;
        }

        const allowedTypes = accept.split(',').map(type => {
            if (type.startsWith('.')) {
                return `image/${type.slice(1)}`;
            }
            return type;
        });

        if (!allowedTypes.some(type => file.type.includes(type.replace('image/', '')))) {
            return `Please upload a ${accept.replace(/\./g, '').toUpperCase()} file`;
        }

        return null;
    };

    const onDrop = (acceptedFiles) => {
        const validFiles = [];

        for (const file of acceptedFiles) {
            const validationError = validateFile(file);
            if (!validationError) {
                validFiles.push(file);
            }
        }

        if (validFiles.length > 0) {
            if (previews.length === 0) {
                setUploadProgress(0);
                const interval = setInterval(() => {
                    setUploadProgress(prev => {
                        if (prev >= 100) {
                            clearInterval(interval);
                            return 100;
                        }
                        return prev + Math.random() * 30;
                    });
                }, 100);
            }

            onFileSelect(multiple ? validFiles : validFiles[0]);
        }
    };

    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
        onDrop,
        accept: accept.split(',').reduce((acc, type) => {
            if (type.startsWith('.')) {
                acc[`image/${type.slice(1)}`] = [type];
            } else {
                acc[type] = [];
            }
            return acc;
        }, {}),
        maxSize,
        multiple,
    });

    const getUploadAreaSx = () => {
        let sx = {
            border: '2px dashed',
            borderRadius: 2,
            p: 3,
            cursor: 'pointer',
            transition: 'all 0.2s',
            bgcolor: 'background.default',
        };

        if (isDragActive) {
            sx.borderColor = 'primary.main';
            sx.bgcolor = 'action.hover';
            sx.transform = 'scale(1.02)';
        } else if (isDragReject || error) {
            sx.borderColor = 'error.main';
            sx.bgcolor = 'error.lighter';
        } else if (previews.length > 0) {
            sx.borderColor = 'success.main';
            sx.bgcolor = 'success.lighter';
        } else {
            sx.borderColor = 'divider';
            sx['&:hover'] = {
                borderColor: 'primary.main',
                bgcolor: 'action.hover',
            };
        }

        return sx;
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} className="upload-wrapper">
            <Paper {...getRootProps()} sx={getUploadAreaSx()} elevation={0}>
                <input {...getInputProps()} />
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>

                    <Box>
                        <Typography variant="body2" fontWeight={500} mb={0.5}>{placeholder}</Typography>
                        <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>{description}</Typography>
                        {multiple && (
                            <Typography variant="caption" className='multi-file-des' color="primary.main">You can select multiple files</Typography>
                        )}
                    </Box>
                </Box>

                {loading && (
                    <Box sx={{ mt: 2 }}>
                        <LinearProgress variant="determinate" value={uploadProgress} />
                    </Box>
                )}

                {success && (
                    <Alert severity="success" icon={<CheckCircle fontSize="small" />} sx={{ mt: 1 }}>
                        Upload successful!
                    </Alert>
                )}

                {error && (
                    <Alert severity="error" icon={<Error fontSize="small" />} sx={{ mt: 1 }}>
                        {error}
                    </Alert>
                )}
            </Paper>

            {previews.length > 0 && (
                <Grid container spacing={1.5}>
                    {previews.map((preview, index) => (
                        <Grid item xs={multiple ? 6 : 12} sm={multiple ? 4 : 12} lg={multiple ? 3 : 12} key={index}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{ position: 'relative', paddingTop: '100%', overflow: 'hidden', borderRadius: 1.5, border: 2, borderColor: 'divider', bgcolor: 'background.paper' }}>
                                    <Box component="img" src={preview} alt={`Preview ${index + 1}`} sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }} />
                                </Box>
                                {fileNames[index] && (
                                    <Paper sx={{ mt: 1.5, p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} elevation={0}>
                                        <Box sx={{ flex: 1, minWidth: 0, mr: 2 }}>
                                            <Typography variant="caption" fontWeight={500} noWrap title={fileNames[index]}>
                                                {fileNames[index]}
                                            </Typography>
                                            {fileSizes[index] && (
                                                <Typography variant="caption" color="text.secondary" display="block">
                                                    {fileSizes[index]}
                                                </Typography>
                                            )}
                                        </Box>
                                        {onFileRemove && (
                                            <Button
                                                size="small"
                                                color="error"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onFileRemove(multiple ? index : undefined);
                                                }}
                                                sx={{ textTransform: 'none', fontSize: '0.75rem' }}
                                            >
                                                Remove
                                            </Button>
                                        )}
                                    </Paper>
                                )}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
